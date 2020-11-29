const display = (data, db) => {

  return `
  <div class="container" max-width="600px">
    <h1>Delivery details</h1>
    <p>
      Email: <b>${data.email}</b> <br>
      Phone number: ${data.phone} <br>
      Name: ${data.name} <br>
      Adress: ${data.adress} <br>
      Time: ${data.time} <br>
      Payment: ${data.payment} <br>
    </p>

    <hr>

    <h1>Order</h1>
    ${Object.keys(data.order).map((key) => {
      console.log(db);
      const product = db.find(x => x.id === key);
      const quantity = data.order[key];
      return `
      ${product.productName}
      <h5 style="text-align: left">${quantity} for ${quantity * product.price}</h5>
    `}).reduce((acc, item) => acc + item)
    }

    <hr>

    <p class="lead">Total: ${data.price}</p>
  </div>
  `
}
export default display;