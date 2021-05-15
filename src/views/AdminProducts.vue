<template>
  <div>
    <AdminSidebar/>
    <div class="mt-4">
      <button class="btn float-right mb-3 btn-primary" @click="openModal(true)">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="150">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="110">是否啟用</th>
          <th width="170">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ item.origin_price |currency }}</td>
          <td class="text-right">{{ item.price |currency}}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group" role="group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openModal(false, item, false)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openModal(false, item, true)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!--pagination-->
    <nav v-if="pagination!==undefined">
      <ul class="pagination">
        <li class="page-item " :class="{'disabled':!pagination.has_pre}">
          <span class="page-link" @click.prevent="getProducts(pagination.current_page-1)">Previous</span>
        </li>
        <li class="page-item" :class="{'active':pagination.current_page===page}" v-for="page  in pagination.total_pages" :key="page">
          <a class="page-link" href="#" @click.prevent="getProducts(page)">{{page}}</a></li>
        <li class="page-item" :class="{'disabled':!pagination.has_next}">
          <a class="page-link" href="#" @click.prevent="getProducts(pagination.current_page+1)">Next</a>
        </li>
      </ul>
    </nav>

    <!-- Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="productModalLabel">
              <span class="text-white"><span >{{ addOrUpdate }}</span>產品</span
              >
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    id="image"
                    v-model="tempProduct.imageUrl"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或 上傳圖片
                    <i :class="{'fas fa-spinner fa-spin':status.fileUploading}"  
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    @change="uploadFile"
                    class="form-control"
                    ref="files"
                  />
                </div>
                <img :src="tempProduct.imageUrl" class="img-fluid" />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    v-model="tempProduct.title"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="tempProduct.category"
                      formnovalidateid="category"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      v-model="tempProduct.unit"
                      id="unit"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      v-model="tempProduct.origin_price"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      v-model="tempProduct.price"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <hr />
                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    v-model="tempProduct.description"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    v-model="tempProduct.content"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      v-model="tempProduct.is_enabled"
                      type="checkbox"
                      id="is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="updateProduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--delete modal-->
    <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="delProductModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="delProductModalLabel">
              <span>刪除產品</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delProduct">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import AdminSidebar from "../components/AdminSidebar.vue";
export default {
    components: {
    AdminSidebar,
  },
  data() {
    return {
      products: [],
      //欄位內容
      tempProduct: {},
      //此項可判斷add或update
      isNew: false,
      //此項用來改變 modal title
      addOrUpdate: "",
      status: {
        fileUploading: false,
      },
      pagination: {
      },
    };
  },
  methods: {
    /**
     * 讀取資料
     * */
    getProducts(page=1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      const vm = this;
         vm.$store.dispatch("updateLoading", true); //顯示loading
      this.$http.get(api).then((response) => {
        // console.log(response.data);
        vm.products = response.data.products;
           vm.$store.dispatch("updateLoading", false);//隱藏loading
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isNew, item, isDel) {
      if (isNew) {
        //add
        this.tempProduct = {};
        this.isNew = true;
        this.addOrUpdate = "新增";
      } else {
        //update
        this.tempProduct = Object.assign({}, item);
        this.isNew = false;
        this.addOrUpdate = "更新";
      }
      if (isDel) {
        $("#delProductModal").modal("show");
      } else {
        $("#productModal").modal("show");
      }
    },
    /**
     * 更新/新增 產品事件
     */
    updateProduct() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
      const vm = this;
      let httpMethod = "post";
      //判斷要執行 add還是update api
      if (!vm.isNew) {
        //為update時
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        httpMethod = "put";
      }
      //因為資料上送時是以物件形式，故 vm.tempProduct 資料要用物件包起來
      this.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {
        // console.log(response.data);
        $("#productModal").modal("hide");
        if (response.data.success) {
          vm.getProducts();
        } else {
          this.$bus.$emit("message:push", response.data.message, "danger");
        }
      });
    },
    /**
     *  刪除產品事件
     */
    delProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      this.$http.delete(api, { data: vm.tempProduct }).then((response) => {
        // console.log(response.data);
        $("#delProductModal").modal("hide");
        if (response.data.success) {
          vm.getProducts();
        } else {
          this.$bus.$emit("message:push", response.data.message, "danger");
        }
      });
    },
    /**
     *  上傳圖片
     */
    uploadFile() {
      const uploadedFile = this.$refs.files.files[0]; //take out picture object
      const vm = this;
      const formData = new FormData(); //把file塞進FormData object
      formData.append("file-to-upload", uploadedFile);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      vm.status.fileUploading = true; //上傳前loading icon開始轉
      this.$http
        .post(url, formData, {
          headers: { "Content-Type": "multipart / form - data" },
        })
        .then((response) => {
          // console.log(response.data);
          if (response.data.success) {
            vm.$set(vm.tempProduct, "imageUrl", response.data.imageUrl); //強制寫回post回傳資料      
          } else {
            this.$bus.$emit("message:push", response.data.message, "danger");      
          }
            vm.status.fileUploading = false; //上傳後loading icon 消失
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
