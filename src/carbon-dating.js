const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    const ln2 = -0.693;
    if (!isNaN(sampleActivity) && typeof sampleActivity === 'string') {
        if (Number(sampleActivity) > 0 && Number(sampleActivity) <= 15)
            return Math.floor(Math.log(Number(sampleActivity) / MODERN_ACTIVITY) / ln2 * HALF_LIFE_PERIOD);
        else return false;
    } else return false;
};
