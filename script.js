import RenderEngine from './engine.js';
import Router from './router.js';
import Client from './client.js';
import Cart from './cartLogic.js';
const open = document.getElementById('openbtn');
const close = document.getElementById('closebtn');

const openNav = () => {
  document.getElementById("myNav").style.width = "100%";
}
  
const closeNav = () => {
  document.getElementById("myNav").style.width = "0%";
}
open.addEventListener("click", openNav);
close.addEventListener("click", closeNav);



const router = new Router();
const client = new Client();
const engine = new RenderEngine();
const cart = new Cart();

globalThis.cartadd = (item) => {
  cart.add(item)
}


async function loadMain() {
  const view = await import('./views/mainPage.js');
  const data = await client.getData('/db');
  engine.render(view(data))
}

const getPrice = async () => {
  const orders = cart.getItems()
  const db = await client.getData('/products');
  let res = 0;
  for (const key in orders) {
    res += db[0].price
  }
  return res;
} 


const priceUpdate = async (view) => {
  setInterval(() => {view.innerHTML = getPrice()}, 500)
}


globalThis.submitForm = async () => {
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const name = document.getElementById("name");
  const adress = document.getElementById("adress");
  const time = document.getElementById("time");
  const cash = document.getElementById("cash");
  const obj = {
    email: email.value,
    phone: phone.value,
    name: name.value,
    adress: adress.value,
    time: time.value,
    payment: cash.checked ? 'cash' : 'card',
    order: cart.getItems(),
    price: await getPrice()
  }
  console.log(JSON.stringify(obj))
  cart.clear();
  const orderId = (await client.post(obj, '/orders')).id
  const db = await client.getData('/orders');
  const view = (await import('/views/orderDone.js')).default
  window.removeEventListener('hashchange', mainF);
  router.changeURL(`#order${orderId}`);
  engine.render(view(obj, db));
  window.addEventListener('hashchange', mainF);
}

let view;
const mainF = () => {
const { viewName, endpointName } = router.getState()

import(`./views/${viewName}.js`)
  .then((viewModel) => {
    view = viewModel.default;
    return client.getData(endpointName);
  })
  .catch(reason => {
    console.log(reason);
    loadMain();
  })
  .then(data => {
    engine.render(view(data, endpointName));
  })
  .catch(reason => {
    console.log(reason);
  })

}
mainF();
window.addEventListener('hashchange', mainF);


