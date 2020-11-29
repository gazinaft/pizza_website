const display = (data, hash) => {
  const endpoint = hash.split('/').pop();
  const slide = data.slider.find(prod => prod.id === endpoint);
  return `
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <img src="./images/${slide.images}.jpg" style="width: 100%" class="img-rounded">
      </div>
      <div class="col-md-8">
        <h1>${slide.name}</h1>
        <p>${slide.description}</p>
      </div>
    </div>
  </div>
  `
}

export default display;
