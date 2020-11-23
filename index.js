import Router from './router'

const router = new Router();

const open = document.getElementById('openbtn');
const close = document.getElementById('closebtn');

const openNav = () => {
  document.getElementById("myNav").style.width = "100%";
}
  
const closeNav = () => {
  document.getElementById("myNav").style.width = "0%";
}
