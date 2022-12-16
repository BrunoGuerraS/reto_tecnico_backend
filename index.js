const express = require('express');
const cors = require('cors');
const routerApi = require('./routes')
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors())
require('./utils/auth')

app.get('/', (req, res)=>{
  res.send("server runinng");
});

routerApi(app)

app.listen(port, ()=>{
  console.log(`run in port ${port}`);
});
