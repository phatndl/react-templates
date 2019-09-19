import request from 'utils/request';
import config from 'config';
import TokenControl from 'utils/token';
import * as type from './login.action.type';

var { apiEnv } = config;
const login = ({ phone, password }) => {
  return async dispatch => {
    try {
      dispatch({ type: type.LOGIN_REQUEST });

      const result = await request({
        method: 'POST',
        url: apiEnv,
        data: {
          client_id: '6oKJTo4VkpYnVIj0KyqdfniFXRUlbllCqBOn9nws',
          country_code: 'VN',
          password,
          phone,
        },
      });

      dispatch({ type: type.LOGIN_SUCCESS, data: result });
      if (result.data.msg !== 'User authentication fail. Please recheck username and password') {
        TokenControl.Token('123456789');
      }
    } catch (e) {
      dispatch({ type: type.LOGIN_FAIL, err: e });
    }
  };
};

export { login };
