import { METHOD } from '../method';
import { apiDev } from 'helpers/api';

export default {
  RANDOM_USER: {
    method: METHOD.GET,
    url: '/api',
    handler: apiDev
  }
}
