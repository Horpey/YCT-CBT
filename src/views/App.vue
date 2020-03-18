<template>
  <div>
    <div class="appview">
      <div class="container">
        <div class="text-center mt-5">
          <h4 class="text-primary txt-bold">Good Afternoon Horpey,</h4>
          <p class="small">
            We have over
            <b>5000</b> past questions from
            <b>1994 - 2019</b>,
            <br />you might need to attempt a quiz of 50 on each of these subjects.
            <br />You have 1hr, 30mins to complete selected subject
          </p>
          <hr />
          <div class>
            <h4>Select the subject you would like to start with!</h4>
            <router-link to="/app/question" class="btn btn-primary text-white mt-3">Proceed</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {}
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/site/style.scss";
</style>
