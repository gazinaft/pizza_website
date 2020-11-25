export default class Client {
  getData(endpoint) {
    return fetch(`http://my-json-server.typicode.com/gazinaft/pizza_db/${endpoint}`)
        .then(response => response.json());
  }
}