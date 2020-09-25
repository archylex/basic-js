const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date) {
        if (date instanceof Date) {
            if (!isNaN(date.getTime())) {
                switch ((date.getMonth() + 1 - (date.getMonth() + 1) % 3) / 3) {
                    case 0:
                        return "winter";
                    case 1:
                        return "spring";
                    case 2:
                        return "summer";
                    case 3:
                        return "fall";
                    case 4:
                        return "winter";
                }              
            } else return "Unable to determine the time of year!";
        } else throw new Error('Unable to determine the time of year!');
    } else return "Unable to determine the time of year!";
};
