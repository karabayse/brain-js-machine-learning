// Requires
const brain = require('brain.js');
const data = require('./data.json');

// Long Short-Term Memory
const network = new brain.recurrent.LSTM();

// Use map method to loop through data.json array
const trainingData = data.map(item => ({
  input: item.text,
  output: item.category
}));

network.train(trainingData, {
  iterations: 2000
});

// Run a piece of text against training data
const output = network.run('I fixed the power supply');
console.log(`Category: ${output}`);
