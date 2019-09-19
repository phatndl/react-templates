import configJSON from './config.json';

console.log(process.env.NODE_ENV);
const config = {
  apiEnv: process.env.NODE_ENV === 'production' ? configJSON.api.prod : configJSON.api.dev,
  timeout: configJSON.api.timeout,
};

export default config;
