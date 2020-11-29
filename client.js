export default class Client {
  getData(endpoint) {
    return fetch(`https://my-json-server.typicode.com/gazinaft/pizza_db/${endpoint}`)
        .then(response => response.json())
        .catch(e => console.log(e));
  }

  post(data, endpoint) {
    return fetch(`https://my-json-server.typicode.com/gazinaft/pizza_db/${endpoint}`, { 
      method: "POST",  
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .catch(e => console.log(e)); 
  }

}