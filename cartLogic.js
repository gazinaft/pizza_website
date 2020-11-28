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
    --value[itemId];
    if(value[itemId] === 0) delete value[itemId];
    localStorage.setItem('cart', JSON.stringify(value));
  }

  isEmpty() {
    const value = JSON.parse(localStorage.getItem('cart'));
    return Object.keys(value).length === 0;;
  }

  clear() {
    localStorage.setItem('cart', "{}");
  }
}
