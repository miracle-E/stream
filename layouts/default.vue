<template>
  <div>
    <Nuxt />
    <div class="all">
      <b-navbar toggleable="lg" type="" class="navbar-s">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <hr />
      <!-- <b-button v-b-toggle.sidebar-variant>Toggle Sidebar</b-button> -->
      <b-sidebar
        id="sidebar-no-header"
        text-variant="light"
        class="sidebar aside-div"
        visible="true"
        shadow
        no-header
      >
        <div class="px-3 py-2 profile">
          <b-img
            fluid
            thumbnail
            width="550px"
          ></b-img>
          <p>
            Wayawaya Keychin <br />
            Guest
          </p>
        </div>
        <hr />
        <b-list-group>
          <b-list-group-item href="#" class="list-item"
            >Movies</b-list-group-item
          >
          <b-list-group-item href="#" class="list-item"
            >Tv Shows</b-list-group-item
          >
          <b-list-group-item href="#" class="list-item"
            >Music</b-list-group-item
          >
          <b-list-group-item href="#" class="list-item"
            >Audiobooks</b-list-group-item
          >
          <b-list-group-item href="#" class="list-item"
            >Games</b-list-group-item
          >
        </b-list-group>
        <b-list-group-item href="#" class="list-item">Apps</b-list-group-item>
        <b-list-group-item href="#" class="list-item"
          >Updates</b-list-group-item
        >
        <hr />

        <b-list-group>
          <b-list-group-item href="#" class="list-item"
            >Library</b-list-group-item
          >
          <b-list-group-item href="#" class="list-item"
            >Wishlist</b-list-group-item
          >
          <b-list-group-item href="#" class="list-item"
            >Settings</b-list-group-item
          >
        </b-list-group>
      </b-sidebar>
      <!--  -->
      <div class="container movies">
        <div class="row align-items-start">
          <div class="col card-div div-t">
            <b-card
              title="Card Title"
              tag="article"
              style="max-width: 20rem;"
              class="mb-2 card-item"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="dark">Go somewhere</b-button>
            </b-card>
          </div>
          <div class="col card-div div-tt">
            <b-card
              title="Card Title"
              tag="article"
              style="max-width: 20rem;"
              class="mb-2 card-item"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="dark">Go somewhere</b-button>
            </b-card>
          </div>
          <div class="col card-div dit">
            <b-card
              title="Card Title"
              tag="article"
              style="max-width: 20rem;"
              class="mb-2 card-item"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="dark">Go somewhere</b-button>
            </b-card>
          </div>
        </div>
      </div>
      <!-- right aside -->
      <div>
        <!-- <b-button v-b-toggle.sidebar-right class="btn-right"
          >Toggle Sidebar</b-button
        > -->
        <b-sidebar
          id="sidebar-right"
          title="Sidebar"
          no-header
          visible=true
          right
          shadow
        >
          <div class="px-3 py-2">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </div>
        </b-sidebar>
      </div>
    </div>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

/* .button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.list-item {
  background-color: transparent;
  color: white;
  border: none;
  position: relative;
  left: 25%;
}
#sidebar-variant {
  background-color: #2f606fbf !important;
}
.navbar-s {
  width: 84%;
  position: relative;
  left: 16%;
  background-color: transparent;
}
.navbar-s a {
  color: #146c86 !important;
}
.b-sidebar {
  width: 219px !important;
  background-color: #146c86 !important;
}
.movies {
  margin-left: 300px;
  width: 75%;
}
.card-div {
  background-color: transparent;
  border-radius: 5px;
  transition: all 1.1s ease;
  margin: 0 9px;
  border: 2px solid #146c86;
  box-shadow: 2px 7px 20px -2px #2125297a;
}
.card-div:hover {
  /* outline: 5px solid #146c86;
  outline-offset: 15px; */

  transform: translateY(-7%);
}
.card-item {
  background-color: transparent;
  border: none;
}
.div-t {
  background-color: rgb(191, 218, 224) !important;
}
.div-tt {
  background-color: #b7efb9 !important;
}
.dit {
  background-color: #dc9e9e;
}
.btn-right {
  position: relative;
  left: 40%;
}
#sidebar-right {
  top: 50%;
  right: 54px;
  width: 23% !important;
  background-color: transparent !important;
  border: 1px solid #dc9e9e;
}
</style>
