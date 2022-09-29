import Button from 'react-bootstrap/Button';

exports.Generator = () => {
    return (
        <div className="layout">
        <div className='block'>
          This tool helps you generate full prompts.
          <br />
          Set your preferences, enter a prompt to imagine and paste it to MD !
        </div>
        <br />
        <Button variant="primary">Primary</Button>
        <div>
      <h2>What do you want to imagine ?</h2>
      <div className="block">
        <textarea rows="2" placeholder="a cute kitten with a laser sword"></textarea>
        <span className='button'>Generate</span>
        <span className='button'>Generate & Copy to clipboard</span>
      </div>
    </div>
        <h5>CURRENT OPTIONS</h5>
        <div className='block'>
          cinematic lighting, intricate details, 8K, HDR --ar 13:19
          <br />
          <br />
          <span className='button'>Copy options to clipboard</span>
        </div>
      </div>
    );
  };