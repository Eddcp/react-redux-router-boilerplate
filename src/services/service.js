import axios from 'axios';
import URL from '../constants/URL';

const { API } = URL;


class Service {
  get(URL, params={}) {
    return this.request(URL, params, 'get');
  }

  post(URL, params={}) {
    return this.request(URL, params, 'post');
  }

  put(URL, params={}) {
    return this.request(URL, params, 'put');
  }

  patch(URL, params={}) {
    return this.request(URL, params, 'patch');
  }

  delete(URL, params={}) {
    return this.request(URL, params, 'delete');
  }

  request(URL, params, method) {
    const service = axios.create({
      baseURL: API
    });

    return service[method](URL, {
      params
    });
  }
}

export default Service;