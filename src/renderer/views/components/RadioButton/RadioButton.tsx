/* eslint-disable prettier/prettier */
import './RadioButton.css';

const RadioButton = ({ label, hint, checked, image }) => {
  return (
    <div
      className={`button ${checked === true ? 'selected' : ''} ${hint && hint !== '' ? '' : 'noHint'
        } ${image ? 'hasImage' : ''}`}
    >
      {image ? <img src={image} width={50} alt="" /> : ''}
      {label}
      <small>{hint}</small>
    </div>
  );
};

export default RadioButton;
