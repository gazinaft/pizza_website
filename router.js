export default class Router {

  getHash() {
    return window.location.hash.split('#')[1];
  }

  changeURL(url) {
    globalThis.history.pushState({}, null, `#${url}`);
  }
  
  getShit = (midURL) => (endURL = '') => ({
    'cart': {viewName: 'cart', endpointName: '/db'},
    'catalog': {viewName: `${endURL ? `catalog/page` : 'catalog'}`, endpointName: '/db'},
    'order': {viewName: 'order', endpointName: '/db'},
    'action': {viewName: `${endURL ? `action/page` : 'mainPage'}`, endpointName: `${endURL ? `action/${endURL}` : '/db'}`},
    'product': {viewName: `${endURL ? `action/page` : 'mainPage'}`, endpointName: `${endURL ? `catalog/${endURL}` : '/db'}`}
  })[midURL] || {viewName: 'mainPage', endpointName: '/db'}


  getState() {
    if (!this.getHash()) return {viewName: 'mainPage', endpointName: '/db'};
    if (this.getHash().includes('/')) {
      const list = this.getHash().split('/');
      return this.getShit(list[0])(list[1]);
    }
    return this.getShit(this.getHash())();
  }
}
