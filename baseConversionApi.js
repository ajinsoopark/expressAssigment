const express = require('express');
const app = express();
const decToBin = (num) => num.toString(2);
const decToHex = (num) => num.toString(16);
const binToDec = (str) => parseInt(str, 2);
const hexToDec = (str) => parseInt(str, 16);
let baseConversions = {};

const baseDec = (strNum) => {
    let num = parseInt(strNum);
    baseConversions['original'] = { value: strNum, base: 10 };
    baseConversions['conversions'] = { decimal: num, binary: decToBin(num), hex: decToHex(num) };
};

const baseBin = (strNum) => {
    baseConversions['original'] = { value: strNum, base: 2 };
    baseConversions['conversions'] = { decimal: binToDec(strNum), binary: strNum, hex: decToHex(binToDec(strNum)) };
};

const baseHex = (strNum) => {
    baseConversions['original'] = { value: strNum, base: 16};
    baseConversions['conversions'] = { decimal: hexToDec(strNum), binary: decToBin(hexToDec(strNum)), hex: strNum }
}


app.get('/:number/:base', (req, res) => {
    if (req.params.base === 'dec') {
        baseDec(req.params.number);
    } else if (req.params.base === 'bin') {
        baseBin(req.params.number); 
    } else if (req.params.base === 'hex') {
        baseHex(req.params.number);
    } 
    res.json(baseConversions)
})

app.get('/:number', (req, res) => {
    baseDec(req.params.number)
    res.json(baseConversions)
})

app.listen(8000, (req, res) => {
    console.log('Thanks for tuning into Base FM 8000.')
})