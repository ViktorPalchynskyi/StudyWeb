const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const AdminProductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');


const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
   keys: ['123tfg123414g175412739124']
}));
app.use(authRouter);
app.use(AdminProductsRouter);
app.use(productsRouter);
app.use(cartsRouter);

app.listen(3000, () => {
   console.log(`Starting server in ${3000} port`);
});