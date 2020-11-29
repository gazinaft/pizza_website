export default class Cart {
  
  constructor() {
    if (localStorage.getItem('cart') == null) {
      localStorage.setItem('cart', "{}");
    }
  }

  add(itemId) {
    const value = JSON.parse(localStorage.getItem('cart'));
    if (value[itemId] === undefined) {
      value[itemId] = 1;
    } else {
      ++value[itemId];
    }
    localStorage.setItem('cart', JSON.stringify(value));
  }

  getItems() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  delete(itemId) {
    const value = JSON.parse(localStorage.getItem('cart'));
    if(!value[itemId]) return;
    --value[itemId];
    if(value[itemId] === 0) delete value[itemId];
    localStorage.setItem('cart', JSON.stringify(value));
  }

  isEmpty() {
    const value = JSON.parse(localStorage.getItem('cart'));
    return Object.keys(value).length === 0;
  }

  clear() {
    localStorage.setItem('cart', "{}");
  }

  getPrice(data) {
    const orders = this.getItems()
    let res = 0;
    for (const key in orders) {
      res += data.find(product => product.id === key).price * orders[key]
    }
    return res;
  } 


  visualize(data, view) {
    const cartproducts = this.getItems();
    const products = data.products.filter(prod => Object.keys(cartproducts).includes(prod.id)); 
    view.innerHTML = `
    <div class="list-group">
      ${products.map(product =>
      `<a class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${product.productName}</h5>
        </div>
        <p class="mb-1">${cartproducts[product.id]} for ${product.price} each</p>
        <hr>
        <button class="btn btn-outline-primary" onclick="cartadd('${product.id}')" style="float: left">Add</button>
        <button class="btn btn-outline-primary" onclick="cartremove('${product.id}')">Remove</button>
          
      </a>`)}
        <h3>Total: ${this.getPrice(data.products)}</h3>
    </div>
    `
  }


}
