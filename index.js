const brain = require('brain.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// to-do: preprocess data

// training phase 
const trainingData = [
    {input: {good: 1, great: 1, wonderful: 1}, output: {positive: 1}}
    {input: {bad: 1, terrible: 1, worst: 1}, output: {positive: 1}}
]

const net = new brain.NeuralNetwork();

net.train(train);


// const result = net.run({these: 1, cookies: 1, are: 1, great: 1});
// console.log(result);

const tokenize = (phrase) => {
    const words = phrase.split(" ");
    const tokenObj = {};

    words.forEach((word) => {
        tokenObj[word] = 1;
    });
}

const prompt = (phrase) => {
    rl.question("Please enter a phrase for sentiment analysis", (phrase) => {
        console.log(`Sentiment analysis for the phrase: ${phrase}`);
        console.log(net.run(tokenize(phrase)));
        prompt();
    });
}

prompt();