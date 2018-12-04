const express = require('express');
const app = express();
const rock = [{"user":"rock","ai":"rock","result":"tie"},
              {"user":"rock","ai":"paper","result":"lose"},
              {"user":"rock","ai":"scissors","result":"win"}];
const paper = [{"user":"paper","ai":"paper","result":"tie"},
               {"user":"paper","ai":"scissors","result":"lose"},
               {"user":"paper","ai":"rock","result":"win"}];
const scissors = [{"user":"scissors","ai":"scissors","result":"tie"},
                  {"user":"scissors","ai":"rock","result":"lose"},
                  {"user":"scissors","ai":"paper","result":"win"}];

app.get('/:userChoice', (req, res) => {
    if (req.params.userChoice === 'rock') {
        res.json(rock[Math.floor(Math.random() * 3)])
    } else if (req.params.userChoice === 'paper') {
        res.json(paper[Math.floor(Math.random() * 3)])
    } else if (req.params.userChoice === 'scissors') {
        res.json(scissors[Math.floor(Math.random() * 3)])
    }
});

app.get('/*', (req, res) => {
    res.send('404 page not found.')
})

app.listen(8000, () => {
    console.log('You are now listening to Power FM 8000')
})