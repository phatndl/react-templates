// const express = require('express');
// const prerender = require('prerender-node');
// const path = require('path');
// require('dotenv').config();
// var app = express();

// const protocol = process.env.PROTOCOL || 'http';
// const service_url = process.env.SERVICE_URL;
// const port = process.env.PORT || '3000';

// app.use(prerender.set('prerenderServiceUrl', service_url));
// app.use(prerender.set('protocol', protocol));

// app.use(express.static(path.join(__dirname, 'build')), {
//   setHeaders(res, route){
//     console.log(route, "route");
//     res.setHeaders('Cache-Control', 'public, max-ageage=604800');
//     res.set('Expires', new Date(Date.now() + 604800000).toUTCString());
//   }
// })
// app.use(prerender.set('beforeRender', function(req, done) {
//   // do whatever you need to do
//   console.log("boot request: ", req);
// 	done();
// }));

// app.listen(port);


