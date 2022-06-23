<style scoped>
#Builder {
  display: none;
}
</style>

<template>
  <!-- App -->
  <div class="flex bg-packed font-lexend dark:bg-gray-900">
    <div
      id="sidebar-scroll"
      class="flex-sidebar lg:flex-auto w-sidebar lg:block hidden bg-white dark:bg-gray-800 border-r-2 dark:border-gray-700 h-screen lg:z-0 z-40 overflow-auto lg:relative fixed"
    >
      <Sidebar />
    </div>

    <div class="flex-auto w-full overflow-auto h-screen" id="body-scroll">
      <Header />
      
      <div id="Builder"
      class="lg:block bg-white dark:bg-gray-800 border-r-2 dark:border-gray-700 h-screen overflow-auto absolute right-0"
    >
      <Builder />
    </div>
    <router-view />
    </div>
  </div>
  <!-- end app -->
</template>

<script>
// vue Components
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import Builder from "@/components/Builder.vue";


export default {
  name: "App",
  data() {
    return {
      Builder: true,
    };
  },

  components: {
    Header,
    Sidebar,
    Builder,
  
},
};
</script>
