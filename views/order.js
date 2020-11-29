const display = (data, endpoint) => {
  return `
  <div style="height: 50px"></div>
  <form>
    <div class="container" style="max-width: 600px">
    <h2>Email</h2>
    <div class="form-group has-success">
      <input type="email" placeholder="Your email" class="form-control" id="email" required >
    </div>

    <h2>Phone</h2>
    <div class="form-group has-success">
      <input type="text" placeholder="Your phone number" class="form-control" id="phone" required="" pattern="\\+380[0-9]{9}">
    </div>


    <h2>Name</h2>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Your Name" id="name" required>
    </div>

    <h2>Address</h2>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Your adress" id="address" required>
    </div>

    <h2>Time</h2>
    <div class="form-group">
      <input type="datetime-local" class="form-control" placeholder="Delivery time" id="time" required>
    </div>


    <div class="form-group">
      <div class="custom-control custom-radio">
        <input type="radio" id="cash" name="radiobut" class="custom-control-input" checked="">
        <label class="custom-control-label" for="cash">Cash</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="card" name="radiobut" class="custom-control-input">
        <label class="custom-control-label" for="card">Card</label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary" onclick="submitForm()">Submit</button>
    </div>
  </form>
`
}
export default display;