export const getBaseUrlApi = () => {
  const env = process.env.NEXT_APP_ENV;
  if (env === 'dev') {
    return 'http://localhost:3000/';
  } else if (env === 'test') {
    return 'https://testapi.ludify.com.au/';
  }
};
