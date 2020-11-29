const display = (data, hash) => {
  const endpoint = hash.split('/').pop();
  const product = data.products.find(prod => prod.id === endpoint);
  return `
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <img src="./images/${product.images}.jpg" style="width: 100%">
      </div>
      <div class="col-md-8">
        <h1>${product.productName}</h1>
        <p>${product.productDescription}</p>

        <hr>

        <p>Weight: ${product.weight} <br>
          Price: ${product.price}
        </p>
        <button type="button" class="btn btn-primary" onclick="cartadd('${product.id}')">Add to cart</button>
        <hr>

        <h3>Related products</h3>
        <div class="row">
          ${data.products.filter((x, i) => product.relatedProductIds.includes(i))
            .map(prod => `
            <div class="col-md-4">
              <div class="thumbnail">
                <a href="#product/${prod.id}">
                  <img class="img-thumbnail" src="./images/${prod.images}.jpg" alt="${prod.productName}" style="width:100%">
                  <div class="caption">
                    <p>${prod.productName}</p>
                  </div>
                </a>
              </div>
            </div>
            `).reduce((acc, item) => acc + item)}
        </div>
      </div>
    </div>
  </div>
  `
}

export default display;
