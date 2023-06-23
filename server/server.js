const express = require('express');
const path = require("path");
const dotenv = require("dotenv");
//const tf = require('@tensorflow/tfjs');
//require('@tensorflow/tfjs-node');

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;

const app = express();  

app.get('/', async (req, res)=>{
    res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
});


// async function getSentiment(text){
    
//     const model = await tf.loadLayersModel('model.json');

//     const tokenized = text?.toLowerCase().split(' ');
//     const indexed = tokenized.map(word => wordToIndex[word]);
//     const tensor = tf.tensor2d([indexed], [1, indexed.length]);
    
//     // Make a prediction
//     const prediction = await model.predict(tensor).data();
//     const sentiment = prediction[0] > 0.5 ? 'Positive' : 'Negative';
    
//     console.log('Sentiment:', sentiment);
// }

// function wordToIndex(words){
//     let wordToIndexMap = {};
//     let count = 0;
//     for(let word of words){
//         wordToIndexMap[word] = count++;
//     }
//     return wordToIndexMap;
// }