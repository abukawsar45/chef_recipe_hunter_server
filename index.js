const express = require ('express');
const cors = require('cors');


const port = process.env.PORT || 5000;


const app = express();
app.use(cors());

const chefs_info = require('./chefs_data.json')

const chefDetails = require('./Chef_Details.json')


app.get('/', (req, res) => {
  res.json({message: "Assalamualaikum,"})

})

app.get('/alldata', (req, res) => {
  res.send(chefs_info)
});

app.get('/alldata/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const selectedChef = chefDetails.find(chef => chef._id === id)
  console.log(selectedChef);
  res.send(selectedChef)
});


app.listen(port,() => {
  console.log(`server listening on port ${port}`);
})


