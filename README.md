# NHOST.io React Native Starter  
React Native Starter Repo for using NHOST on the backend (GraphQL, Hasura, Auth &amp; Storage)

# Key changes from earlier Nhost boilerplate

First off, you of course have to change `src/helpers/api.js` to add your Nhost connection constants:
```
export const GRAPHQL_ENDPOINT = 'https://hasura-xxxxxxxx.nhost.app/v1/graphql';
export const BACKEND_ENDPOINT = 'https://backend-xxxxxxxxx.nhost.app';

export const X_HASURA_ADMIN_SECRET = 'xxxxxxxxxx';
```

Then, you'll notice that the `3.0.0 release` of nhostSdk (`nhost-js-sdk`) has changed it's API in two key ways

* you'll need to use de-referencing brackets on import:
```
import { auth } from '../../helpers/nhostSdk';
```
* when you use the `auth` library, you'll need to pass an object with params instead of email and password separately
```
  await auth.login({email, password});

  // instead of

  await auth.login(email, password);

  // same deal for auth.register()
