<template>
  <div class="card-page h-auto p-3">
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Banner
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        Choose the correct <em>template</em> for the job.
      </p>
    </div>
    <div class="grid grid-cols-4 mt-10 gap-5">
      <div class="card w-full p-5 rounded-md bg-white dark:bg-gray-800">
        <h2 class="dark:text-gray-200">USH-HDR0100 USH</h2>
        <div class="wrapper-button w-full box-border mt-4">
          <div
            id="draggable-1"
            class="example-draggable"
            draggable="true"
            ondragstart="onDragStart(event);"
          >
            <Banners />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banners from "../../Email/Modules/Banners.vue";
export default {
  Name: "Banner",

  components: {
    Banners,
  },
};
</script>
