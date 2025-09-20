import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource'; // storing data
// import { storage } from './storage/resource'; // use for storing assets, etc. not using it right now

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
  auth,
  // storage,
  data,
});
