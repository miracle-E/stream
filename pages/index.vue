<template>

  <div class="container">
    
    <b-container class="landing-page">
      <div class="btn-div">
        <NuxtLink to="/register">
        <b-button class="btn-left btn" size="md">Sign Up</b-button>
        </NuxtLink>
          <NuxtLink to="/home"> 
            <b-button class="btn-right btn" size="md">
              Login
            </b-button>
          </NuxtLink>
       
      </div>

      <h1 class="main-txt">StreamR</h1>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'plain'
};
</script>

<style scoped>
body {
  background-color: #00303e;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: #F2E1DA; */
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.landing-page {
  /* background-color: black; */
  width: 90%;
  height: auto;
  box-shadow: 2px 7px 20px 7px #2125297a;
  background-image: url(~static/limg.jpg);
  background-size: cover;
  display: flex;
  flex-direction: column;
}
.main-txt {
  font-family: "Dosis", sans-serif;
  color: #fdfc00;
  font-size: 8rem;
  border: 3px solid #fdfdfe;
  outline: 4px solid #146c86;
  outline-offset: 80px;
}
.btn-left {
  margin-left: -30px;
  color: #fdfdfe;
  background-color: transparent;
  border:2px solid #146c86 ;
  font-size:18px;
}
.btn-right {
  margin-left: 10px;
  color: #fdfdfe;
  background-color: transparent;
  border-radius:0;
  font-size:18px;
  border:2px solid #146c86 ;
}
.btn:hover {
  border-radius: 0;
  /* font-weight:500; */
  /* box-shadow:-2px 2px 16px 0px #383a3a; */
  background-color: #fdfdfe;
  /* border: none; */
  color: #383a3a;
  transition: .4s cubic-bezier(0.4, 0, 1, 1);
}
.btn-div {
  position: relative;
  top: -195px;
}
</style>
