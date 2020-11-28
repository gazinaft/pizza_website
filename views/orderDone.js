const display = (data, db) => {
  return `
  <div class="container" max-width="600px">
    <h1>Delivery details</h1>
    <h3>Email: <b>${data.email}</b><h3>
    <h3>Phone number: ${data.phone}<h3>
    <h3>Name: ${data.name}<h3>
    <h3>Adress: ${data.adress}<h3>
    <h3>Time: ${data.time}<h3>
    <h3>Payment: ${data.payment}<h3>

    <hr>

    <h1>Order<h1>
    ${Object.entries(data.order).map(([key, quantity]) => {
      const product = db.find(x => x.id == key);
      return `
      <h3>${product.productName}<h3>
      <h5>${quantity} for ${quantity * product.price}</h5>
    `}).reduce((acc, item) => acc + item)
    }
    <h3>Total: ${data.price}</h3>
  </div>
  `
}
export default display;