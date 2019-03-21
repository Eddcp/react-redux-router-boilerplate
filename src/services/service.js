import axios from 'axios';

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
    return axios[method](URL, {
      params
    });
  }
}

export default Service;