// Requires
const brain = require('brain.js');
const data = require('data.json');

// Long Short-Term Memory
const network = new brain.recurrent.LSTM();

// Use map method to loop through data.json array
const trainingData = data.map(item => ({
  input: item.text,
  output: item.category
}));
