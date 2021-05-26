<template>
  <div class="container-fluid login d-flex justify-content-center">
    <div class="d-flex justify-content-center">
      <b-form @submit="onSubmit" v-if="show" class="mt-5">
        <b-form-group id="input-group-1" label="Username:" label-for="input-1">
          <b-form-input
            id="input-1"
            class="m-4 p-3 s-input"
            v-model="form.username"
            type="text"
            placeholder="Enter Username"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Your Password:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            class="m-4 p-3 s-input"
            v-model="form.password"
            placeholder="Enter Password"
            required
          ></b-form-input>
          <b-button 
          type="submit" 
          variant="outline-info" 
          class="ml-4 s-btn"
          @click="register"
            >Submit
            </b-button
          >
        </b-form-group>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "plain",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
   
  }
};
</script>

.<style scoped>
.login {
  /* height: 100vh; */
  /* background-image: url(~static/b.jpg);
  background-size:cover; */
  height:100vh;
   background: linear-gradient(45deg,#020202, #00303e, #08b6ec99);
}
.login > div {
  /* background: linear-gradient(#00303e, #00303e, #08b6ec99); */
  background-color:white;
  height: 300px;
  width: 50%;
  /* border-radius: 3px 76px 3px; */
  /* box-shadow: 0px 4px 35px 0 rgb(141 159 165 / 97%); */
  margin-top: 9%;
}
.s-btn {
  border: 2px solid;
  /* border-color: #00303e #8ca2a9 #8ca2a9 #8ca2a9; */
  color: rgb(5, 34, 46);
  font-weight: 500;
  /* border-radius: 3px 18px; */
}
.s-input {
  border: none;
  background-color: transparent;
  border-bottom: 2px solid #5fc1df;
  border-radius: 0;
}
.s-input:active {
  outline: none;
}
</style>
