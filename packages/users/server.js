const express = require('express')
const path = require('path')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


// init i18next with serverside settings
// using i18next-express-middleware

    // loaded translations we can bootstrap our routes
    app.prepare()
      .then(() => {
        const server = express();
        server.use((req, res, next) => {
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
          );
          next();
        });

        // use next.js
        server.get('*', (req, res) => {

          handle(req, res)
        });

        server.listen(3002, (err) => {
          if (err) throw err
          console.log('> Ready on http://localhost:3002')
        })
      })

