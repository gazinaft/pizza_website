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

async function loadMain() {
  const view = await import('./views/mainPage.js');
  const data = await client.getData('/db');
  engine.render(view(data))
}

let view;

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
    engine.render(view(data));
  })
  .catch(reason => {
    console.log(reason);
  })



