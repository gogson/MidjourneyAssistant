/* eslint-disable @typescript-eslint/no-unused-expressions */
const promptProcessor = (settings) => {
  const getSelectedOptions = (condition) => {
    return Object.keys(settings)
      .map((key) => {
        return settings[key].options
          .filter((opt) => {
            return (
              !!opt.checked &&
              opt.promptValue !== '' &&
              condition(opt.promptValue)
            );
          })
          .map((opt) => opt.promptValue);
      })
      .filter((opt) => opt.length);
  };

  const choosenOptions = getSelectedOptions((value) => {
    return value.indexOf('--') === -1;
  });
  const choosenArguments = getSelectedOptions((value) => {
    return value.indexOf('--') > -1;
  });

  return `${choosenOptions.join(', ')} ${choosenArguments.join(' ')}`;
};

export default promptProcessor;
