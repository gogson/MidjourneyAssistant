/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useRef } from 'react';

import './Prompt.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Prompt = () => {
  const computePromptTerms = (prompt: string) => {
    return (
      (prompt.indexOf(',') > -1 ? prompt.split(',') : []).length +
      (prompt.match(/ --/g) || []).length +
      (prompt.indexOf('in the style') > -1 ? 1 : 0)
    );
  };
  const inputRef = useRef(null);
  const [showClipboardModal, setShowClipboardModal] = useState(false);
  const [showClipboardOptionModal, setShowClipboardOptionModal] =
    useState(false);
  const [promptValue, setPromptValue] = useState(
    window.electron.store.get('promptTextValue') || ''
  );
  const [promptOptions, setPromptOptions] = useState(
    window.electron.ipcRenderer.computePrompt()
  );
  const [promptTermNumber, setPromptTermNumber] = useState(
    computePromptTerms(window.electron.ipcRenderer.computePrompt())
  );

  window.electron.onRefreshPrompt(() => {
    setPromptOptions(window.electron.ipcRenderer.computePrompt());
    setPromptTermNumber(
      computePromptTerms(window.electron.ipcRenderer.computePrompt())
    );
  });

  const inputChange = (event) => {
    const inputValue = event.target.value;
    setPromptOptions(window.electron.ipcRenderer.computePrompt());
    setPromptTermNumber(computePromptTerms(promptOptions));
    setPromptValue(inputValue);
    window.electron.store.set('promptTextValue', inputValue);
  };

  const onClickImagine = () => {
    if (inputRef !== null) {
      inputRef.current.focus();
    }
  };

  const copyPrompt = () => {
    const fullPromptOptions = window.electron.ipcRenderer.computePrompt();
    if (window.electron.store.get('promptTextValue')) {
      window.electron.clipboard.writeText(
        `/imagine prompt:${window.electron.store.get(
          'promptTextValue'
        )}, ${fullPromptOptions}`
      );
      setShowClipboardModal(true);
      window.electron.store.saveToHistory({
        promptValue: window.electron.store.get('promptTextValue'),
        promptOptions: fullPromptOptions,
        fullPrompt: `/imagine prompt:${window.electron.store.get(
          'promptTextValue'
        )}, ${fullPromptOptions}`,
      });
      return;
    }
    window.electron.clipboard.writeText(`${fullPromptOptions}`);
    setShowClipboardModal(true);
  };

  const copyPromptOptions = () => {
    window.electron.clipboard.writeText(`${promptOptions}`);
    setShowClipboardOptionModal(true);
  };

  return (
    <div>
      <Toast
        onClose={() => setShowClipboardModal(false)}
        show={showClipboardModal}
        delay={3000}
        autohide
      >
        <Toast.Body>Full prompt copied to clipboard !</Toast.Body>
      </Toast>
      <Toast
        onClose={() => setShowClipboardOptionModal(false)}
        show={showClipboardOptionModal}
        delay={3000}
        autohide
      >
        <Toast.Body>Prompt options copied to clipboard !</Toast.Body>
      </Toast>
      <div className="promptView">
        <Container fluid>
          <Row className="pt-4 pb-4 pl-1 pr-2">
            <Col xs={10}>
              <Container fluid>
                <Row>
                  <Col
                    xs={12}
                    className="p-0 monospaced"
                    onClick={onClickImagine}
                  >
                    <strong>/imagine</strong>
                    <div className="optionPreview" onClick={copyPromptOptions}>
                      <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={
                          <Tooltip id="tooltip-prompt">{promptOptions}</Tooltip>
                        }
                      >
                        <span>+{promptTermNumber} prompt terms</span>
                      </OverlayTrigger>
                    </div>
                    <div className="promptInput">
                      <Form.Control
                        ref={inputRef}
                        type="text"
                        id="promptText"
                        value={promptValue}
                        onChange={inputChange}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col xs={2}>
              <div className="copyPromptButton" onClick={copyPrompt}>
                Copy
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Prompt;
