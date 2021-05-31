<template name="add-name">
  <div class="container mt-5">
    <h3>Add Product</h3>

    <div class="card w-75 mb-3 border-warning">
      <div class="row g-0">
        <div class="col-md-4 ml-5 align-center" style="align-items:center; padding:15px">
          <img class="ml-3 mt-3 pr-5" src="../assets/shipping.svg" alt="..." width="300px" />
        </div>
        <div class="col-md-8" style="padding:10px">
          <div class="card-body">
            <h5 class="card-title">Add a product to the list</h5>
            <form>
              <div class="mb-3">
                <label for="exampleInputName" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputName"  v-model="userId" :state="validation" />
                <div id="qtyHelp" class="form-text" :state="validation">
                  Product Name
                </div>

              </div>
              
              <div class="mb-3">
                <label for="exampleInputQty" class="form-label">Quantity</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputQty"
                  aria-describedby="qtyHelp"
                />
                <div id="qtyHelp" class="form-text">
                 Product Quantity
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPrice" class="form-label"
                  >Price ($)</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPrice"
                  aria-describedby="priceHelp"
                />
                <div id="priceHelp" class="form-text">
                  Product price in US Dollars
                </div>
                
                
              </div>

              <button type="submit" class="btn btn-success">Add Item</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userId: ''
      }
    },
    computed: {
      validation() {
        return this.userId.length > 4 && this.userId.length < 13
      }
    }
  }
</script>