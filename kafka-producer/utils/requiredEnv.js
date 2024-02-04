/**
 * Function to retrieve a required environment variable.
 *
 * @param {string} key - the key of the environment variable to retrieve
 * @return {string} the value of the retrieved environment variable
 */
export default function requiredEnv(key) {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing env var ${key}`);
  }
  return value;
}
