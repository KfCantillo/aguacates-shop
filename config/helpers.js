export const getBaseUrlApi = () => {
  const env = process.env.NEXT_APP_ENV;
  console.log('env', env);
  if (env === 'dev') {
    return 'http://localhost:3000/';
  } else if (env === 'test') {
    return 'https://test.kcfashion.store/';
  } else {
    return 'https://kcfashion.store/';
  }
};
