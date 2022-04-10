import { ref } from "vue";

const getAllData = () => {
  const data = ref();
  const error = ref(null);
  const isLoading = ref(false);

  const fetchAllData = async function () {
    isLoading.value = true;
    try {
      const res = await fetch("http://localhost:8000/articles/?format=json", {
        method: "GET",
      });
      data.value = await res.json();
      // console.log(data.value);
    } catch (err) {
      error.value = err.message;
      alert(error.value);
    }
    isLoading.value = false;
  };
  return { data, isLoading, fetchAllData };
};

export default getAllData;
