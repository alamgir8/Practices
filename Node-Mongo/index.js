
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express();
app.use(cors())
app.use(bodyParser.json());

const user = ['Alamgir', 'Hanif', 'Sakib', 'Aminul', 'Alamin']

app.get('/', (req, res) => {
    res.send('I know how to calling node')
})

// app.get('/fruits/banana', (req, res) => {
//     const fruit = {
//         product: 'Banana',
//         price: 20
//     };
//     res.send(fruit);
// })

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const name = user[id];
    res.send({id, name});
})

//post data to server

app.post('/userId', (req, res) => {
    const user = req.body;
    user.id = 1;
    res.send(user);
    console.log(req.body);
})

app.listen(3000, () => console.log('listing to port 4000'));