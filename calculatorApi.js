const express = require('express');
const app = express();
const add = (num1, num2) => {
    return {num1: num1, num2: num2, result: num1 + num2};
};
const sub = (num1, num2) => {
    return {num1: num1, num2: num2, result: num1 - num2};
};
const mul = (num1, num2) => {
    return {num1: num1, num2: num2, result: num1 * num2};
};
const div = (num1, num2) => {
    return {num1: num1, num2: num2, result: num1 / num2};
};

app.get('/:operator/:num1/:num2', (req, res) => {
    if (req.params.operator === 'add') {
        res.json(add(parseInt(req.params.num1), parseInt(req.params.num2)))
    } else if (req.params.operator === 'sub') {
        res.json(sub(parseInt(req.params.num1), parseInt(req.params.num2)))
    } else if (req.params.operator === 'mul') {
        res.json(mul(parseInt(req.params.num1), parseInt(req.params.num2)))
    } else if (req.params.operator === 'div') {
        res.json(div(parseInt(req.params.num1), parseInt(req.params.num2)))
    }
})

app.get('/*', (req, res) => {
    res.send('That operator is not supported.')
})

app.listen(8000, () => {
    console.log('You are now tuned into Cal FM 8000!');
});

