const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(`${__dirname}/public`));

app.listen(port, () => {
  console.log('Server listening on port', port);
});
