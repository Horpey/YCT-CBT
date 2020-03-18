<template>
  <header class="header-global">
    <base-nav class="navbar-main" type="primary" effect="dark" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/custom/logo.png" alt="logo" height="53" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <a href="#">
            <img src="img/custom/logo.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item d-none d-lg-block ml-lg-4">
          <router-link to="/app/profile" class="text-white">Profile</router-link>
        </li>
        <li class="nav-item d-none d-lg-block ml-lg-4">
          <router-link to="/" class="btn btn-white">Sign out</router-link>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/site/style.scss";
</style>
