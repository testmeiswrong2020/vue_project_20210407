<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div id="fh5co-product">
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
   
    </div>
   
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
