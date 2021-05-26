<template>
  <div class="col p-0 card-div bg-danger s_card_container">
    <b-card
      overlay
       text-variant="white"
      :img-src="`https://image.tmdb.org/t/p/w1280${backdrop_path}`"
      :title="title"
      tag="article"
      class="mb-2 card-item card_titles"
    >
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Trending",
  props: {
    title: {
      required: true,
    },
    backdrop_path: {
      required:true,
    },
   original_name: {
      required:true,
    }
  },
};
</script>

<style scoped>
.card-div {
  background-color: transparent;
  border-radius: 5px;
  transition: all 1.1s ease;
  margin: 0 9px;
  /* border: 2px solid #146c86; */
  box-shadow: 2px 7px 20px -2px #2125297a;
}
.card-div:hover {
  transform: translateY(-4%);
}
.card-item {
  border: none;
}
.card_titles .card-img {
  height: 100%;
}
.card_titles h4{
  margin-top: 145px;
  font-size: 1.2rem;
  text-align: center;
  background: #343a40
}

.card_titles .card-img-overlay{
  padding: 0;
}
.s_card_container article {
  height: 100%;
}
.s_card_container article div {
  height: 100%;
}
</style>
