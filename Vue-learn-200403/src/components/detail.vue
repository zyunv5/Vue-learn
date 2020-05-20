<template>
  <div>
    <Header/>
    <div class="pagewrap pagewrap-full">
      <div class="article-detail">
        <div class="post-wrapper">
          <div class="post-detail-con-box full-reading mainlib_flex_wapper">
            <ArticleMain :data="article_data"/>
            <ArticleRight :data="article_data"/>
          </div>
        </div>
      </div>
      <ArticleShare :data="article_data"/>
      <ArticleDetail :data="article_data"/>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from "./inc/header";
import Footer from "./inc/footer";

import ArticleMain from "./article_main";
import ArticleRight from "./article_right";
import ArticleShare from "./article_share";
import ArticleDetail from "./article_detail";
export default {
  name: "Detail",
  components: {
    Header,
    Footer,
    ArticleMain,
    ArticleRight,
    ArticleShare,
    ArticleDetail
  },
  computed: {
    article_data() {
      // let id = this.$route.params.id;
      // console.log(id);
      return this.$store.state.article_data;
    }
  },
  mounted() {
    let id = this.$route.params.id;
    this.$store.dispatch("loadingArticle", id);
  }
};
</script>
<style>
</style>
