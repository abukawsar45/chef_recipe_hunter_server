const express = require ('express');
const cors = require('cors');


const port = 5000;


const app = express();
app.use(cors());

const chefs_info = require ('./chefs_data.json')


app.get('/', (req, res) => {
  res.json({message: "hello server running"})

})

app.get('/alldata', (req, res) => {
  res.send(chefs_info)
  // console.log('he')
})

app.listen(port,() => {
  console.log(`server listening on port ${port}`);
})
