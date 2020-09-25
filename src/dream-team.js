const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(names) {
    if (Array.isArray(names)) {
        let letters = [];
        
        const getLetter = str => {
            for (let i = 0; i < str.length; i++)
                if (str[i] !== ' ') return str[i].toUpperCase();
        };

        names.forEach(e => {
            if (typeof e === 'string')
                letters.push(getLetter(e));
        });
        
        return letters.sort().join``;
    } else return false;
};
