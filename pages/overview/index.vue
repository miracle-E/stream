<template>
  <div class="container movies">
    <h1 class="text-center font-weight-bold topic">TRENDING</h1>
    <div class="row d-flex">
      <Trending v-for="movie in trending" :key="movie.id" :title="movie.title || movie.original_name" :overview="movie.overview" :backdrop_path="movie.backdrop_path"/>
    </div>
    <div>
  
</div>
  </div>
</template>

<script>
import Trending from "~/components/Trending.vue";
export default {
  components: {
    Trending
  },
  layout: "default",
  // data(){
  //   return{
  //     arr:[1,2,3]
  //   }
  // },
   async asyncData({$axios}) {
      const {results}  = await $axios.$get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`);
      const trending = results.slice(0,4);
      // console.log(trending)
      return {trending};
    }
};
</script>

<style scoped>
.movies {
  margin-left: 223px;
}
</style>
