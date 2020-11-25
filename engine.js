export default class RenderEngine {
  render(view) {
    const root = document.getElementById('main');
    root.innerHTML = view;
  }
}
