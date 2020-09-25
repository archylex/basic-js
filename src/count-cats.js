const CustomError = require("../extensions/custom-error");

module.exports = function countCats(yard) {
    let number = 0;
    yard.forEach(boxes => {
        boxes.forEach(box => {
            if (box === "^^") 
                number++;
        });
    });
    return number;  
};
