<template>
  <div id="app">
    <router-link to="/add" tag="button">add</router-link>

    <router-link to="/show" tag="button">show</router-link>
    <hr />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import ShowBlog from "./components/ShowBlog";

export default {
  name: "App",
  components: {
    ShowBlog
  }
};
</script>

<style>
</style>
