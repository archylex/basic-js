const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  options.addition = String(options.addition);
  
  const addition = (options.addition === 'undefined' ? '' : options.addition)
                    .concat(options.additionSeparator || '+')    
                    .repeat(options.additionRepeatTimes || 1)
                    .slice(0, -(options.additionSeparator || 0 ? options.additionSeparator.length : 1))

  return str.concat(addition)    
    .concat(options.separator || '+')
    .repeat(options.repeatTimes || 1)
    .slice(0, -(options.separator || 0 ? options.separator.length : 1));  
};
  