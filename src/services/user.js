import { apiEndpoint } from '../constants';

export default {
    async getRandomUser(){
    try{
      const ep = apiEndpoint.USER.RANDOM_USER;
      console.log(ep)
      const res = await ep.handler[ep.method](ep.url);
      return res;
    }
    catch(e){
      throw e;
    }
  }
}
