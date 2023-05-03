const express = require ('express');
const cors = require('cors');


const port = process.env.PORT || 5000;


const app = express();
app.use(cors());

const chefs_info = require('./chefs_data.json')

const single_chef_info = require('./Chef_Details.json')


app.get('/', (req, res) => {
  res.json({message: "hello server running"})

})

app.get('/alldata', (req, res) => {
  res.send(chefs_info)
  // console.log('he')
})

app.get('/alldata/:id', (req, res) => {
  res.send(single_chef_info)
})
// app.get('/alldata/:id', (req, res) => {
//   res.send(chefs_info)
//   // console.log('he')
// })
app.get('/alldata/:chefId', (req, res) => {
  // res.send(chefs_info);
  console.log('he2')
});

app.listen(port,() => {
  console.log(`server listening on port ${port}`);
})


