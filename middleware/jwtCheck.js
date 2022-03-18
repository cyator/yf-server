let jwt = require('express-jwt');
let jwks = require('jwks-rsa');

let jwtCheck = jwt({
	secret: jwks.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
	}),
	audience: process.env.AUTH0_AUDIENCE,
	issuer: `https://${process.env.AUTH0_DOMAIN}/`,
	algorithms: ['RS256'],
	requestProperty: 'payload',
});

module.exports = jwtCheck;
