<template>
    <footer id="fh5co-footer" role="contentinfo">
      	 <div class="row">
		   <div class="col-md-12 col-sm-12  col-lg-12 ">
             <div class="d-flex  justify-content-around  pb-3">
              <ul class="nav">
                <router-link to="/product" > <li class="nav-link mx-sm-2 mx-md-5 mx-lg-9"> 購買商品  </li></router-link>
                <router-link to="/common-question"><li class="nav-link mx-sm-2 mx-md-5 mx-lg-9">常見問題</li></router-link>
                <router-link to="/contact"> <li  class="nav-link mx-sm-2 mx-md-5 mx-lg-9">門市位置 </li></router-link>
                <router-link to="/term-of-use">  <li  class="nav-link mx-sm-2 mx-md-5 mx-lg-9">使用條款 </li></router-link>
              </ul>
		     </div>
	         <div class="row copyright">
				<div class="col-md-12  text-center">
					<p>
						<ul class="fh5co-social-icons">
						<li><a :href="`${url}`"><i  class="fab fa-twitter"></i></a></li>
							<li><a :href="`${url}`"><i class="fab fa-facebook-square"></i></a></li>
							<li><a :href="`${url}`"><i class="fab fa-linkedin"></i></a></li>
							<li><a :href="`${url}`"><i class="fab fa-instagram-square"></i></a></li>
						</ul>
					</p>
					<p><small class="block mb-2 mt-n2">僅供學習使用，不做為商業用途</small>
						<small class="block">Copyright &copy; 2021 安雅. 版權所有.</small> 
            			</p>
				
				</div>
			 </div>
		   </div>
		 </div>
	</footer>
</template>
<script>
export default {
  data() {
    return {
      url: "https://github.com/testmeiswrong2020/vue_project_20210407",
    };
  },
};
</script>
