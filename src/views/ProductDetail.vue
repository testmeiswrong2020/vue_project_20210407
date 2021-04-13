<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-7">
          <img class="w-100" src="images/product-single-1.jpg" />
        </div>
        <div class="col-md-5">
          <div class="px-5">
 <h4 class="text-muted text-left">Prada</h4>
          <h2 class="text-left">Prada bag</h2>
          <div class="border-top"></div>
          <dl>
            <h4 class="text-left">【商品介紹】</h4>
            <dd>A description list is perfect for defining terms.</dd>
          </dl>
          <h4 class="text-left">【商品詳情】</h4>
          <div class="px-4">
            <table class="table text-center">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Payment Taken</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TB - Monthly</td>
                  <td>01/04/2012</td>
                </tr>
                <tr>
                  <td>TB - Monthly</td>
                  <td>01/04/2012</td>
                </tr>
                <tr>
                  <td>TB - Monthly</td>
                  <td>02/04/2012</td>
                </tr>
                <tr>
                  <td>03/04/2012</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>04/04/2012</td>
                  <td>Call in to confirm</td>
                </tr>
              </tbody>
            </table>
          </div>
         
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="fh5co-product">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="animate-box">
              <div class="item">
                <div class="active text-center">
                  <figure>
                    <img src="images/product-single-1.jpg" class="w-100" alt="user" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            		<div class=" text-center fh5co-heading">
							<h2>Hauteville Rocking Chair</h2>
              <div class="border-top"></div>
              <h2>【商品介紹】</h2>

							<p>
								<a href="#" class="btn btn-primary btn-outline btn-lg">Add to Cart</a>
							</p>
						</div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12"></div>
        </div>
      </div>
   
    </div> -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      products: [],
      product: {},
      pagination: {},
      isLoading: false,
      status: {
        loadingItem: "",
        loadingItem_addToCart: "",
        loadingItem_getCart: "",
      },
      cart: {},
      coupon_code: "",
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  methods: {
    //取得單一 商品細節
    getProduct(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(url).then((response) => {
        console.log("getProduct", response.data);
        // vm.product = response.data.product;
        // $("#productModal").modal("show");
        vm.status.loadingItem = "";
      });
    },
  },
  created() {
    //把productid存起來
    let productId = this.$route.query.name;
    // const gg = this.productId;
    // console.log("======"+productId);
    this.getProduct(productId);
  },
};
</script>
