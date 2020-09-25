const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let result = [];
    const comm = '--discard-prev--double-prev';

    if(!Array.isArray(arr)) 
        throw new Error();
    else {
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case '--discard-next':                    
                   i += comm.indexOf(arr[i + 2]) !== -1 ? 2 : 1;
                   break;
                case '--discard-prev':
                    if (result[result.length - 1] !== undefined)
                        result.pop();
                   break;
                case '--double-next':
                    if (arr[i + 1] !== undefined)
                        result.push(arr[i + 1]);
                    break;
                case '--double-prev':
                    if (result[result.length - 1] !== undefined)
                        result.push(result[result.length - 1]);
                    break;
                default:
                   result.push(arr[i]);
            }
        }        
    } 
    return result;
};
