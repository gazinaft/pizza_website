export default class Client {
  getData(endpoint) {
    return fetch(`http://my-json-server.typicode.com/gazinaft/pizza_db/${endpoint}`)
        .then(response => response.json())
        .catch(e => console.log(e));
  }

  post(data, endpoint) {
    return fetch(`http://my-json-server.typicode.com/gazinaft/pizza_db/${endpoint}`, { 
      method: "POST",  
      body: JSON.stringify(data), 
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      } 
    })
    .then((response) => response.json())
    .catch(e => console.log(e)); 
  }

}