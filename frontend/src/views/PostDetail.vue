<template>
  <div class="post_detail-container">
    <PostsComponent :isLoading="isLoading" :indexData="indexData" />
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import PostsComponent from "@/components/postsComponent.vue";
export default {
  components: { PostsComponent },
  props: {
    id: {
      type: String,
    },
  },
  setup(props) {
    // References
    const data = ref();
    const error = ref(null);
    const isLoading = ref(false);
    const indexData = ref(null);

    const fetchIndexData = async function () {
      isLoading.value = true;
      try {
        const res = await fetch("http://localhost:8000/articles/?format=json", {
          method: "GET",
        });
        data.value = await res.json();
        //   update IndexData reference when props.id from router changed
        watchEffect(() => {
          indexData.value = data.value[props.id];
        });
      } catch (err) {
        error.value = err.message;
        alert(error.value);
      }
      isLoading.value = false;
    };
    fetchIndexData();

    return { data, error, isLoading, indexData };
  },
};
</script>

<style></style>
