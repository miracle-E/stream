<template>
  <div>
    <div class="all">
      <b-navbar toggleable="lg" type="" class="navbar-s">
        <b-navbar-brand class="navbar-b" href="#">StreamR</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
         

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

            <!-- <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown> -->

            <!-- <b-nav-item-dropdown right>
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <hr />
      <!-- <b-button v-b-toggle.sidebar-variant>Toggle Sidebar</b-button> -->
      <b-sidebar
        id="sidebar-no-header"
        text-variant="light"
        class="sidebar aside-div"
        visible
        shadow
        no-header
      >
        <div class="px-3 py-2 profile">
          <b-img
            fluid
            thumbnail
            width="550px"
          ></b-img>
         
        </div>
        <b-list-group class="mr-4">
          <b-list-group-item href="#" class="list-item"
            >
             <b-icon icon="collection-play" scale="1.3" variant="info" class="mr-3" ></b-icon>
             Movies </b-list-group-item
          >
          <b-list-group-item href="#" class="list-item"
            >
             <b-icon-trophy-fill scale="1.3" variant="info" class="mr-3"></b-icon-trophy-fill>
             
              Top Rated </b-list-group-item
          >
          <b-list-group-item href="#" class="list-item"
            >
              <b-icon-list-stars scale="1.3" variant="info" class="mr-3"></b-icon-list-stars>

            Trending </b-list-group-item
          >
          <b-list-group-item href="#" class="list-item"
            >
             <b-icon-display-fill scale="1.3" variant="info" class="mr-3"></b-icon-display-fill>
             Popular </b-list-group-item
          >
        <hr />

          <b-list-group-item href="#" class="list-item"
            >
            <b-icon-patch-question scale="1.3" variant="info" class="mr-3"></b-icon-patch-question>
            About
            </b-list-group-item
          >
        </b-list-group>
      </b-sidebar>
      <!--  -->
      <Nuxt />
      <!-- right aside -->
      <div>
        <!-- <b-button v-b-toggle.sidebar-right class="btn-right"
          >Toggle Sidebar</b-button
        > -->

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
  background-color: #343a40 !important;
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
