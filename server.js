const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
var cors = require('cors');
app.use(cors({origin: true, credentials: true}));

// setup the server port
 

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});
// import product routes
const productRoutes = require('./backend/routes/product.route');
const orderRoutes = require('./backend/routes/order.route');
const cartRoutes = require("./backend/routes/cart.route")
 

// create product routes
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/cart', cartRoutes);
app.use('/api/v1/order', orderRoutes);
 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});