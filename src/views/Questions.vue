<template>
  <div>
    <div class="appview">
      <div class="container">
        <div class="my-5">
          <div class="row">
            <div class="col-md-6">
              <h4>Mathematics</h4>
              <h6 class="text-danger">
                <i class="fa fa-clock-o"></i>
                01:26:37
              </h6>
            </div>
            <div class="col-md-6 text-right">
              <router-link to="/app/result" class="btn btn-primary btn-lg">Submit</router-link>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-4">
              <div class="questlist">
                <a
                  v-for="n in 100"
                  :key="n"
                  :href="n"
                  :class="[ { 'questactive': n ==2 },{ 'questionanswered': n==1 },{ 'questlink': n>0 }]"
                >{{n}}</a>
              </div>
            </div>
            <div class="col-md-8">
              <div class>
                <h4 class="txt-bold">Question 2</h4>
                <p>The salary scale for a senior officer starts at N5,700 per annum. A rise of N2,800 is given at the end of each year. Find the total amount of money that the officer will earn in 14 years?</p>

                <div>
                  <base-radio name="radio0" class="mb-3" v-model="radio">N663,768</base-radio>

                  <base-radio name="radio1" class="mb-3" v-model="radio">N676,887</base-radio>

                  <base-radio name="radio2" class="mb-3" v-model="radio">N334,600</base-radio>

                  <base-radio name="radio3" class="mb-3" v-model="radio">N221,500</base-radio>
                </div>
              </div>
              <div class="my-5">
                <button class="btn btn-secondary">Previous</button>
                <button class="btn btn-primary">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "questions",
  components: {},
  data() {
    return {
      radio: {
        radio1: "radio1",
        radio2: "radio3"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/site/style.scss";
</style>
