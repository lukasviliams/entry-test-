<template>
  <div class="home">
    <BlogComponent :data="data" :isLoading="isLoading" />
  </div>
</template>

<script>
// @ is an alias to /src
import GetAllData from "../composables/getAllData";
import BlogComponent from "@/components/blogComponent.vue";

export default {
  name: "HomeView",
  components: {
    BlogComponent,
  },
  setup() {
    // import data from composables getAllData and props them the component BlogComponent
    const { data, isLoading, fetchAllData } = GetAllData();

    fetchAllData();

    return { data, isLoading, fetchAllData };
  },
};
</script>
