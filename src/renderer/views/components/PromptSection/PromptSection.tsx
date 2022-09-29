/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import RadioButton from '../RadioButton/RadioButton';

const PromptSection = ({ sectionName, size = 6 }) => {
  const ipcsection = window.electron.store.getSection(sectionName);
  const [section, setSection] = useState(ipcsection);

  useEffect(() => {
    window.electron.store.updateSection(sectionName, section);
  });

  const toggleCheck = (checkSection: PromptSection, option: PromptOption) => {
    option.checked = checkSection.type === 'choice' ? true : !option.checked;
    if (checkSection.type === 'choice') {
      checkSection.options = checkSection.options.map((o: PromptOption) => {
        if (option.label === o.label) return o;
        o.checked = false;
        return o;
      });
    }

    setSection({ ...ipcsection, ...section });
  };

  return section.options.map((option, index) => {
    return (
      <Col
        xs={size}
        className="p-0 m-0 pb-1"
        key={index}
        onClick={() => toggleCheck(section, option)}
      >
        <RadioButton
          label={option.label}
          image={option.image}
          hint={option.hint}
          checked={option.checked}
        />
      </Col>
    );
  });
};

export default PromptSection;
