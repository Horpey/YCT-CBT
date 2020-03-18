<template>
  <div>
    <div class="appview">
      <div class="container">
        <div class="text-center mt-5">
          <h4 class="text-primary txt-bold">Congratulations!</h4>
          <h4>
            You scored
            <b class="text-primary">78%</b> in your Mathematics Quiz which is above average!
          </h4>
          <hr />
          <div class>
            <p>You finished in 1hr,38 mins!</p>
            <p
              class="text-primary"
            >Nevertheless, we noticed you need to improve your skill in the below topics:</p>
            <div class="learntopics">
              <badge type="primary">Algebra</badge>
              <badge type="primary">Probability</badge>
              <badge type="primary">Set</badge>
              <badge type="primary">Ratio</badge>
            </div>
            <hr />
            <router-link to="/app/" class="btn btn-white mt-3">Take another Quiz</router-link>
            <router-link
              to="/app/profile"
              class="btn btn-primary text-white mt-3"
            >Proceed to Dashboard</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "result",
  components: {}
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/site/style.scss";
</style>
