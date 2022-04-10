<template>
  <div class="blog_component-contain">
    <spinner-component v-if="isLoading" />
    <div class="data_container" v-for="(post, index) in data" :key="index">
      <router-link :to="{ name: 'PostDetail', params: { id: index } }">
        <p class="header">{{ post.header_thumb }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import SpinnerComponent from "./SpinnerComponent.vue";
export default {
  name: "blogComponent",
  props: {
    isLoading: {
      type: Boolean,
    },
    data: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  components: { SpinnerComponent },
};
</script>

<style scoped>
.data_container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  margin-bottom: 5vh;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
a {
  text-decoration: none;
  color: black;
}
.header {
  font-size: 2.4rem;
  text-decoration: none;
}
</style>
