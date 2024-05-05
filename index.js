//const display = document.getElementById("display");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html');
});

app.post('/calculate', (req, res) => {
    const { display } = req.body;
    let result;
function appendToDisplay(input){
        display.value += input;
        }

function clearDisplay(){
        display.value = "";
        }

function calculate(){
        try{
        display.value = eval(display.value);
        }
        catch(error){
        display.value = "Error";
        }
        }
        res.send({ result });
    });
    
    app.listen(port, () => {
      console.log(`Calculator app listening at http://localhost:${port}`);
    });
    