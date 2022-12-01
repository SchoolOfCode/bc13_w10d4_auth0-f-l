// import express from "express";
// const app = express();
// const port = 5000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

import request from 'request'
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer'
import express from 'express'
const app = express()

const options = {
  method: 'POST',
  url: 'https://dev-h5z6gl6fimqclhvc.uk.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"Pt45O64LRPMQhdTTqfkasOFoS61Cn7Cy","client_secret":"ofnjzrZ9_TaQbgg-lGTnSPPLD1EQDb8XqozJ662zdhamEmSqU5FdFQ6fCP8O3ISt","audience":"http://localhost/3000","grant_type":"client_credentials", "scope":"read:messages"}'
}

request(options, function (error, response, body) {
  if (error) throw new Error(error)

  console.log(body)
})

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: 'http://localhost/3000',
  issuerBaseURL: 'https://dev-h5z6gl6fimqclhvc.uk.auth0.com/'
})

// This route doesn't need authentication
app.get('/api/public', function (req, res) {
  res.json({
    message:
      "Hello from a public endpoint! You don't need to be authenticated to see this."
  })
})

// This route needs authentication
app.get('/api/private', checkJwt, function (req, res) {
  res.json({
    message:
      'Hello from a private endpoint! You need to be authenticated to see this.'
  })
})

const checkScopes = requiredScopes('read:messages')

app.get('/api/private-scoped', checkJwt, checkScopes, function (req, res) {
  res.json({
    message:
      'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  })
})

app.listen(3000, function () {
  console.log('Listening on http://localhost:3000')
})
