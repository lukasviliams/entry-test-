<template>
  <div class="post_container">
    <spinner-component v-if="!indexData" />
    <div class="content_container" v-if="indexData">
      <div class="content_container-img">
        <img class="img" :src="indexData.header_image" alt="header img" />
      </div>
      <div class="content_container-text">
        <p class="header">
          {{ indexData.header_thumb }}
        </p>
        <p class="text">{{ indexData.content_en }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerComponent from "./SpinnerComponent.vue";
export default {
  props: {
    isLoading: {
      type: Boolean,
    },
    indexData: {
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
.post_container {
  margin-top: 5vh;
}
.content_container {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}
.content_container-img {
  height: 60vh;
  /* max-height: 20vh; */
}
.img {
  height: 100%;
  width: auto;
}
.content_container-text {
  min-height: 60vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3vh;
}
.header {
  font-size: 3rem;
}
.text {
  font-size: 1.6rem;
  line-height: 2.6rem;
}
@media only screen and (max-width: 1100px) {
  .content_container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content_container-img {
    margin-bottom: 5vh;
  }
}
</style>
