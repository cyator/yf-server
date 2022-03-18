require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

// app.use(helmet());

app.use(
	cors({
		origin: process.env.ORIGIN,
		credentials: true,
	})
);

if (process.env.NODE_ENV === 'development') {
	app.use(logger('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
const apiRouter = express.Router();
app.use('/api', apiRouter);
apiRouter.use('/products', require('./Routes/api/products.routes'));
apiRouter.use('/orders', require('./Routes/api/orders.routes'));
apiRouter.use('/favorites', require('./Routes/api/favorites.routes'));
apiRouter.use('/images', require('./Routes/uploads.routes'));
apiRouter.use('/addresses', require('./Routes/api/addresses.routes'));
apiRouter.use(
	'/default-address',
	require('./Routes/api/defaultAddress.routes')
);
app.use('/stk', require('./Routes/stk.routes'));
// app.use('/newsletter', require('./Routes/newsletter.routes'));

app.use(express.static('./uploads'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError.NotFound());
});

// error handler
app.use((err, req, res, next) => {
	res.status(err.status || 500).json({
		status: err.status || 500,
		message: err.message || 'Internal Server Error',
	});
});

module.exports = app;
