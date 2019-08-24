<template>
  <div class="add-blog">
    <h2>添加新的博客</h2>

    <!-- 写博客 -->
    <form v-if="!submitted">
      <label for>博客标题</label>
      <!--  v-model.lazy 鼠标离开后才进行数据的更新，实现页面的优化-->
      <input type="text" required v-model.lazy="blog.title" />

      <label>博客内容</label>
      <textarea v-model.lazy="blog.content"></textarea>

      <!-- 分类 -->
      <div id="checkboxs">
        <label for>vue</label>
        <input type="checkbox" v-model="blog.check" value="v" />

        <label for>AG</label>
        <input type="checkbox" v-model="blog.check" value="a" />

        <label for>微信小程序</label>
        <input type="checkbox" v-model="blog.check" value="w" />
      </div>

      <!-- 选项 -->
      <select v-model="blog.author">
        <option v-for="(item,index) in author" :key="index">{{ item }}</option>
      </select>

      <hr />
      <!-- 数据请求 -->
      <button @click.prevent="handPost">添加博客</button>
    </form>

    <div v-if="submitted">
      <h1>您的博客已经添加成功...</h1>
    </div>

    <!-- 博客预览 -->
    <div id="preview">
      <h3>博客预览</h3>
      <p>标题预览{{ blog.title }}</p>
      <p>内容预览{{ blog.content }}</p>
      <p>技术分类</p>
      <ul>
        <li v-for="item in blog.check" :key="item">{{ item }}</li>
      </ul>
      <p>作者：{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        check: [],
        author: ""
      },
      author: ["1", "2", "3"],
      submitted: false
    };
  },
  props: {
    msg: String
  },
  methods: {
    handPost() {
      // console.log(this.blog);
      this.$axios
        .post("/posts", {
          title: this.blog.title,
          body: this.blog.content,
          useerId: 1
        })
        .then(res => {
          console.log(res);
          this.submitted = true;
        });
    }
  }
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px solid #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}

#checkboxs input {
  display: inline-block;
  margin: 10px;
}
#checkboxs label {
  display: inline-block;
}
</style>
