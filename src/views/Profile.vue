<template>
  <div>
    <div class="appview">
      <div class="container">
        <div class="my-5">
          <div class="row justify-content-center">
            <div class="col-md-5">
              <h3 class="txt-bold">Horpey Eureka</h3>
              <p class="small">School of Science, Computer Science</p>
              <a href class="btn btn-white">Edit Profile</a>
              <a href class="btn btn-primary">Upgrade Profile</a>

              <base-dropdown>
                <base-button slot="title" type="white" class="dropdown-toggle hiddrop">
                  <i class="fa fa-ellipsis-v"></i>
                </base-button>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </base-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseDropdown from "@/components/BaseDropdown";
export default {
  name: "profile",
  components: {
    "base-dropdown": BaseDropdown
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/site/style.scss";
</style>
