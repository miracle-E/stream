<template>
  <div class="container-fluid bg-dark gen">
    <div>
  <b-navbar toggleable="lg" type="dark" >
    <b-navbar-brand class="navbar-b" href="#">StreamR</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

          <NuxtLink to="/register">
        <b-button class="btn m-1 btn-left" size="">Sign Up</b-button>
        </NuxtLink>
          <NuxtLink to="/overview"> 
            <b-button class="btn m-1 btn-right" size="">
              Login
            </b-button>
          </NuxtLink>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    <!-- navbar ends -->
    <!-- <b-container class="landing-page">
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
    </b-container> -->
    <section> 
      <div class="container-fluid main-pg-container">
        <h1 class="streamr text-center font-weight-bold">StreamR</h1>
      </div>
      
    </section>
  </div>
</template>

<script>
export default {
  layout: "plain"
};
</script>

<style scoped>
/* body {
  background-color: #00303e;
} */

.streamr{
  margin-top: 15%;
  font-size: 101px;
  	background: linear-gradient(30deg, #9ED8DB 40%, #821a00 70%);
    background-clip: text;
	-webkit-background-clip: text;
  color: transparent;
  animation: animatedGradient 1.5s infinite ease;
  animation-direction: alternate;
}
@keyframes animatedGradient {
  from {
    background-size: 100%;
  }

  to {
    background-size: 250%;
  }
}
/* .main-pg-container{
  height: 89.1vh;
  background:linear-gradient(
130deg
,rgb(96 220 251 / 27%),rgb(58 53 39));;
} */
.gen {
  height: 100vh;
  /* background-image: url(~static/limg.jpg);
 background-size: cover; */
} 

/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

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
  /* width: 90%;
  height: auto;
  box-shadow: 2px 7px 20px 7px #2125297a;
  background-image: url(~static/limg.jpg);
  background-size: cover;
  display: flex;
  flex-direction: column; */
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
  color: #fdfdfe;
  background-color: transparent;
  border: 2px solid #146c86;
  font-size: 18px;
}
.btn-right {
  color: #fdfdfe;
  background-color: transparent;
  border-radius: 0;
  font-size: 18px;
  outline: none;
  border: none;
}
/* .btn:hover {
  border-radius: 0;
  box-shadow:-2px 2px 16px 0px #383a3a; 
  background-color: #fdfdfe;
  color: #383a3a;
  transition: 0.4s cubic-bezier(0.4, 0, 1, 1);
} */
/* .btn-div {
  position: relative;
  top: -195px;
} */
</style>
