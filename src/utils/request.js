import axios from 'axios';
import config from 'config';

const request = ({ method, url, data, headers }) => {
  return new Promise((resolve, reject) => {
    axios({
      method: method || 'GET',
      url,
      data,
      headers,
      timeout: config.timeout,
    })
      .then(resp => resolve(resp))
      .catch(err => reject(err));
  });
};

export default request;
