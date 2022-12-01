# Auth0 Workshop 🔑🔓

## Task 1: Setting up authentication on the **frontend**

The `1-frontend` folder is a React project (which has already been initialised with Create React App). Follow the Auth0 [frontend tutorial](https://auth0.com/docs/quickstart/spa/react/interactive) to integrate the following features within that existing project:

1.  Allow users to log in
2.  Allow users to log out
3.  If a user is logged in, display their information (e.g. name, email, image URL)

### Practice explaining:

Once you've worked through the tutorial, practice explaining (within your teams) the answers to the following questions.

1.  What purpose does the callback URL serve?
2.  What purpose does the logout URL serve?
3.  Which React API(s) does Auth0 use to provide authentication information to other components (without prop drilling)?

(Feel free to research or go back to the tutorial/docs if it helps with your explanation!)

## Task 1A: Calling an API that validates our JWT

Building on from task 1 and using the same `1-frontend` project, follow this section of the Auth0 [frontend tutorial](https://auth0.com/docs/quickstart/spa/react/02-calling-an-api). The aim is to try to get your user's metadata to display on the page (and as per the tutorial, you'll need to add the metadata if there isn't any to being with).

### Practice explaining:

Once you've worked through the tutorial, practice explaining (within your teams) the answers to the following questions.

1.  What are the additional props you need to provide to `Auth0Provider`? What purpose do they serve?
2.  When we call `getAccessTokenSilently`, what does it return and what can we then do with the return value? (Use `console.log` and https://jwt.io/ to decode, if necessary.)

(Feel free to research or go back to the tutorial/docs if it helps with your explanation!)

## Optional bonus:

Come back to this after you've finished task 2. Try to add further ways for users to log in using existing credentials (e.g. via GitHub). Have a look [here](https://auth0.com/docs/connections/social) for details on how this can be done.

## Task 2: Protecting our **backend**

The `2-backend` folder contains an Express app (that is completely unrelated to the frontend you built in the previous task). Follow the Auth0 [backend tutorial](https://auth0.com/docs/quickstart/backend/nodejs/interactive) to create an API that supports the following routes:

- GET /api/public
- GET /api/private
- GET /api/private-scoped

(See the tutorial for how these routes should behave and what responses they should return.)

### Practice explaining:

Once you've worked through the tutorial, practice explaining (within your teams) the answers to the following questions.

1.  How would you explain the concept of permissions?
2.  Which NPM packages does the backend use for authentication? What purpose does each of those packages serve? (Feel free to google their docs for a better idea)
3.  What HTTP status code should our server respond with if the JWT was invalid?
4.  What HTTP status code should our server respond with if the JWT was valid but the token didn't contain necessary permissions/scopes?
5.  In our Express app, how do we use the functions `checkJwt` and `checkScopes` (as per the tutorial) -- and why?

(Feel free to research or go back to the tutorial/docs if it helps with your explanation!)

## Bonus Task 3:

Building something that involves signup/login can often be a stretch goal from project week or a special milestone in your journey as a developer.

If you still have time, build something within the `3-bonus` folder. What you build is up to you, but the only requirement is that it should use authentication and/or authorisation.

You can treat this as a mini-hackathon 🎉, so be creative and ideate as you normally would.
