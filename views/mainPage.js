const display = (data) => {
  console.log(data);
  console.log(JSON.stringify(data));
  return `
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="margin-top:10px">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="./images/${data.slider[0].images}.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="./images/${data.slider[1].images}.jpg" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="./images/${data.slider[0].images}.jpg" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <div style="height: 30px;"></div>
  ${data.categories.map((category, index) => `
  <div style="height: 50px"></div>
  <h1>${category.name}</h1>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 style="flex: wrap; max-width: 100%">
  ${data.products.filter(product => product.categoryId == index).map(product => `
    <div class="card" style="min-width: 100px">
      <img class="card-img-top" src="./images/${product.images}.jpg" alt="Card image cap">
      <div class="card-body">
        <a href="#products/${product.id}"><h5 class="card-title">${product.productName}</h5></a>
        <button type="button" class="btn btn-primary" onclick="cart.add(${product.id})">Order</button>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  `)}
  </div>
  `)}
`
}

export default display;