const display = (data, endpoint) => {
  const category = endpoint.split('/').pop();
  const index = data.categories.indexOf(category);
  return `
  <div style="height: 50px"></div>
  <a href="#/catalog/${category}"><h1>${category.name}</h1>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 style="max-width: 100%">
  ${data.products.filter(product => product.categoryId == index).map(product => `
    <div class="card" style="min-width: 100px">
      <img class="card-img-top" src="./images/${product.images}.jpg" alt="Card image cap">
      <div class="card-body">
        <a href="#products/${product.id}"><h5 class="card-title">${product.productName}</h5></a>
        <h6><strong>${product.price}</strong> uah</h6>
        <button type="button" class="btn btn-primary" onclick="cart.add(${product.id})">Order</button>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  `).reduce((acc, value) => acc + value)}
  </div>

`
}
export default display;
