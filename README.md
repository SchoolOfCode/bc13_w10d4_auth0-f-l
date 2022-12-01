# Auth0 Workshop 🔑🔓

Throughout this workshop please

## Setting up authentication on the **frontend**

The `frontend` folder is a React project (which has already been initialised with Create React App). Follow the Auth0 [frontend tutorial](https://auth0.com/docs/quickstart/spa/react/01-login) to integrate the following features within that existing project:

1.  Allow users to log in
2.  Allow users to log out
3.  If a user is logged in, display their information (e.g. name, email, image URL)

### Practice explaining:

Once you've worked through the tutorial, practice explaining (within your teams) the answers to the following questions.

1.  What purpose does the callback URL serve?
2.  What purpose does the logout URL serve?
3.  Which React API(s) does Auth0 use to provide authentication information to other components (without prop drilling)?

(Feel free to go back to the tutorial/docs when you're explaining!)

### Bonus:

Try to add further ways for users to log in using existing credentials (e.g. via GitHub). Have a look [here](https://auth0.com/docs/connections/social) for details on how this can be done.

## Calling an API that validates our JWT

Building on from task 1 and using the same `frontend` project, follow part two of Auth0 [frontend tutorial](https://auth0.com/docs/quickstart/spa/react/02-calling-an-api).

### Practice explaining:

Once you've worked through the tutorial, practice explaining (within your teams) the answers to the following questions.

1.  What are the additional props you need to provide to `Auth0Provider`? What purpose do they serve?
2.  When we call `getAccessTokenSilently`, what does it return and what can we then do with the return value? (Use `console.log` and https://jwt.io/ to decode, if necessary.)

(Feel free to go back to the tutorial/docs when you're explaining!)

## Protecting our **backend**

The `backend` folder contains very simple express app `boiler plate`. Follow the Auth0 [backend tutorial](https://auth0.com/docs/quickstart/backend/nodejs) to create a simple API that supports the following routes:

- GET /api/public
- GET /api/private
- GET /api/private-scoped

(See the tutorial for how these routes should behave and what responses they should return.)

### Practice explaining:

Once you've worked through the tutorial, practice explaining (within your teams) the answers to the following questions.

1.  How would you explain the concept of permissions?
2.  Among the dependencies that were installed for validating tokens:
    - What purpose does `express-jwt` serve? (Feel free to google their docs for a better idea)
    - What purpose does `jwks-rsa` serve? (Feel free to google their docs for a better idea)
    - What purpose does `express-jwt-authz` serve? (Feel free to google their docs for a better idea)
3.  What HTTP status code should our server respond with if the JWT was invalid?
4.  What HTTP status code should our server respond with if the JWT was valid but the token didn't contain necessary permission(s)/scope(s)?
5.  In our Express app, where can we place the functions `checkJwt` and `checkScopes` -- and why?

(Feel free to go back to the tutorial/docs when you're explaining!)
