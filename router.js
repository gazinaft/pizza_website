export default class Router {

  getHash() {
    return window.location.hash.split('#')[1];
  }

  changeURL(url) {
    globalThis.history.pushState({}, null, `#${url}`);
  }

  replace(hash) {
    globalThis.history.replaceState({}, null, `#${hash}`);
  }
  
  goBack() {
    history.back();
  }

  getShit = (midURL) => (endURL = '') => ({
    'cart': {viewName: 'cart', endpointName: '/db'},
    'catalog': {viewName: `${endURL ? `catalog/page` : 'catalog'}`, endpointName: '/db'},
    'order': {viewName: 'order', endpointName: '/db'},
    'action': {viewName: `${endURL ? `action/page` : 'mainPage'}`, endpointName: '/db'},
    'product': {viewName: `${endURL ? `product/page` : 'mainPage'}`, endpointName: '/db'}
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
