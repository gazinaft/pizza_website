class Router {
  constructor() {
    window.onhashchange(() => {
      this.download()
    })
    fetch()
  }

  getHash() {
    return window.location.hash.split('#')[1];
  }
  download(url) {

  }
  changeURL(url) {
    globalThis.history.pushState({}, null, `#${url}`);
    this.download(url);
  }

  getState() {

  }
}

export default Router;