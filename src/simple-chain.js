const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chains: [],
  
    addLink(value) {
        value = value === undefined ? '' : value;
        this.chains.push(String(value));    
        return this;
    },

    removeLink(position) {
        if (this.chains[position - 1] !== undefined)
            this.chains.splice(position - 1, 1);
        else {
            this.chains = [];
            throw new Error();            
        }
        
        return this;
    },
    
    reverseChain() {
        if (this.chains !== undefined)
            this.chains.reverse();
        return this;
    },

    finishChain() {
        let s = '';
        this.chains.forEach(e => s += `( ${e} )~~`)        
        this.chains = [];
        return s.slice(0, -2);
    },

    getLength() {
       return this.chains.length;
    }  
};

module.exports = chainMaker;
