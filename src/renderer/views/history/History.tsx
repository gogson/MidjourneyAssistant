import './History.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

import { useState } from 'react';
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const History = () => {
  const currentHistory = window.electron.store.getHistory().reverse() || [];
  const [history, setHistory] = useState(currentHistory);
  const pasteToClipboard = (str) => {
    window.electron.clipboard.writeText(`${str}`);
  };
  return (
    <div className="layout">
      <Container fluid>
        <Row>
          <Col xs={12} className="pr-2">
            <ListGroup as="ol" numbered>
              {history.length === 0 && (
                <div className="p-5 text-center">
                  <img
                    src="https://user-images.githubusercontent.com/3675776/193910053-4185bfe3-be2a-43df-a4a2-9f0c4efb2448.png"
                    width="500"
                  />
                  <h5>Looks like your history is empty. Go copy prompts!</h5>
                </div>
              )}
              {!!history &&
                history.map((line, index) => {
                  return (
                    <ListGroup.Item as="li" key={index}>
                      <div className="item-box">
                        <div className="date">
                          {new Date(line.date).toLocaleString()}
                        </div>
                        <small>
                          {line.promptValue.promptValue}
                          <span>
                            {line.promptValue.promptOptions !== '' ? ', ' : ''}
                            {line.promptValue.promptOptions}
                          </span>
                        </small>
                        <ButtonGroup
                          aria-label="Like result"
                          className="copyButtons"
                        >
                          <OverlayTrigger
                            key="top"
                            placement="left"
                            overlay={
                              <Tooltip id="tooltip-prompt">
                                Copy prompt to clipboard
                              </Tooltip>
                            }
                          >
                            <Button
                              variant="secondary"
                              className="mr-3"
                              onClick={() => {
                                pasteToClipboard(line.promptValue.fullPrompt);
                              }}
                            >
                              <FontAwesomeIcon icon={['fas', 'copy']} /> Copy
                              prompt
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            key="top"
                            placement="left"
                            overlay={
                              <Tooltip id="tooltip-prompt">
                                Copy prompt options to clipboard
                              </Tooltip>
                            }
                          >
                            <Button
                              variant="secondary"
                              onClick={() => {
                                pasteToClipboard(
                                  line.promptValue.promptOptions
                                );
                              }}
                            >
                              <FontAwesomeIcon icon={['fas', 'copy']} /> Copy
                              options
                            </Button>
                          </OverlayTrigger>
                        </ButtonGroup>
                        <ButtonGroup
                          aria-label="Like result"
                          className="likeButtons"
                        >
                          <OverlayTrigger
                            key="top"
                            placement="top"
                            overlay={
                              <Tooltip id="tooltip-prompt">
                                Result was m'kay
                              </Tooltip>
                            }
                          >
                            <Button variant="secondary">😒</Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            key="top"
                            placement="top"
                            overlay={
                              <Tooltip id="tooltip-prompt">
                                Result was great !
                              </Tooltip>
                            }
                          >
                            <Button variant="secondary">😍</Button>
                          </OverlayTrigger>
                        </ButtonGroup>
                      </div>
                    </ListGroup.Item>
                  );
                })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default History;
