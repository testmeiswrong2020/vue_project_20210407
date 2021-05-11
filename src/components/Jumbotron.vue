<template>
  <div class="mx-2">
    <div class="row bg-light">
      <div class="col-md-12 text-center fh5co-heading">
        <h1 class="mt-5 custom-font-size">{{ jumbotron[chosedindex].title }}</h1>
        <h6>
          {{ jumbotron[chosedindex].content }}
        </h6>
      </div>
    </div>
  </div>
</template>
<style >
.custom-font-size{
      font-size: 2rem;
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      jumbotron: {
        0: {
          title: "全系列精品包",
          content: "簡單隨興的設計，精選優質水柔牛皮，手感柔軟舒適，優美的線條輪廓與細密的車線線條，凸顯包包的品味格調。",
        },
        1: {
          title: "全系列腕錶",
          content: "接受時間的流動，試著讓別人等你。多留兩分鐘，生命更從容。左右你的時間，領銜你的個性。",
        },
        2: {
          title: "全系列珠寶",
          content: "有些東西，並不是越貴越好。能觸摸你心跳的人事物，應該在當時緊緊抓住，比如這一刻。",
        },
        3: {
          title: "全系列鞋履",
          content: "那些憧憬戀愛的人們，做一對讓他們感覺幸福的鞋子，從設計、材質、高度等方面都極致吻合，能踩出幸福的步子。",
        },
      },
    };
  },
  methods:{
        ...mapActions(["showDifferentJumbotron"]),
  },
  computed:{
        ...mapGetters([ "chosedindex"]),
  }
};
</script>
