const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (!isNaN(sampleActivity) && typeof sampleActivity === 'string') {
        if (Number(sampleActivity) > 0 && Number(sampleActivity) <= 15)
            return Math.ceil(Math.log(Number(sampleActivity) / MODERN_ACTIVITY) / -Math.log(2) * HALF_LIFE_PERIOD);
        else return false;
    } else return false;
};
