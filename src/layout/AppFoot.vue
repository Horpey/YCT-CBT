<template>
  <footer class="footer py-4">
    <div class="container">
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{year}}
            <a href="#" target="_blank" rel="noopener">Yabatech CBT</a>
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end"></ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "appFoot",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
</style>
