<template>
  <div class="show-blog" v-clj="'kl'">
    <input type="text" v-model="search" />
    <div v-for="(blog,index) in filterBlogs" :key="index" class="item">
      <h1>{{ blog.title }}</h1>
      <p>{{ blog.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-blog",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  props: {
    msg: String
  },
  created() {
    this.$axios.get("/posts").then(res => {
      this.blogs = res.data;
    });
  },
  computed: {
    filterBlogs() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search.trim());
      });
    }
  }
};
</script>

<style scoped>
.item {
  border: 1px solid #ccc;
  margin: 10px;
  box-shadow: 0 0 9px #ccc;
  padding: 6px;
  background-color: rgba(250, 250, 250, 0.87);
}
</style>
