<template>
  <!-- sidebar -->
  <nav class="sidebar bg-white dark:bg-gray-800">
    <!-- sidebar head -->
    <div class="sidebar-head p-4">
      <h2
        class="text-2xl font-normal text-gray-800 dark:text-gray-500"
        translate="no"
      >
        Universal Orlando<span class="text-primary">.</span>
        <span
          class="bg-gray-700 absolute mt-2 dark:block hidden rounded-md py-1 px-2 text-xs text-gray-200"
          >Dark mode</span
        >
      </h2>
    </div>
    <!-- sidebar list -->
    <div class="sidebar-list p-4 mt-4">
      <div class="wrap-item mt-4 dark:text-gray-500">
        <p class="font-medium text-gray-400 mt-4 dark:text-gray-600">
          Start Here
        </p>
        <div class="item mt-3">
          <router-link to="/component/template">
            <button
              id="Templates"
              class="text-gray-800 dark:text-gray-500 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 w-full flex text-left rounded-md box-border p-3"
            >
              <span class="mr-3 text-xl"
                ><Icon icon="mdi:book-cog-outline"
              /></span>
              <span class="w-full"> Templates </span>
              <span class="box-border mt-1 text-gray-500"> </span>
            </button>
          </router-link>
        </div>
        <br />
        <hr />
        <br />
      </div>
      <p class="font-medium text-gray-400 mt-4 dark:text-gray-600">
        Components
      </p>
      <router-link to="/component/ViewInBrowser">
        <button
          class="text-gray-800 dark:text-gray-500 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 w-full flex text-left rounded-md box-border p-3"
        >
          <span class="mr-3 text-xl"
            ><Icon icon="fluent:globe-search-24-regular"
          /></span>
          <span class="w-full"> View in Browser </span>
          <span class="box-border mt-1 text-gray-500"> </span>
        </button>
      </router-link>
      <router-link to="/component/Banner">
        <button
          class="text-gray-800 dark:text-gray-500 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 w-full flex text-left rounded-md box-border p-3"
        >
          <span class="mr-3 text-xl"><Icon icon="ph:flag-banner-bold" /></span>
          <span class="w-full"> Banner </span>
          <span class="box-border mt-1 text-gray-500"> </span>
        </button>
      </router-link>
      <router-link to="/component/Body">
        <button
          class="text-gray-800 dark:text-gray-500 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 w-full flex text-left rounded-md box-border p-3"
        >
          <span class="mr-3 text-xl"><Icon icon="cil:puzzle" /></span>
          <span class="w-full"> Body </span>
          <span class="box-border mt-1 text-gray-500"> </span>
        </button>
      </router-link>
      <router-link to="/component/Social">
        <button
          class="text-gray-800 dark:text-gray-500 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 w-full flex text-left rounded-md box-border p-3"
        >
          <span class="mr-3 text-xl"><Icon icon="carbon:application-mobile" /></span>
          <span class="w-full"> Social </span>
          <span class="box-border mt-1 text-gray-500"> </span>
        </button>
      </router-link>
      <router-link to="/component/Apps">
        <button
          class="text-gray-800 dark:text-gray-500 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 w-full flex text-left rounded-md box-border p-3"
        >
          <span class="mr-3 text-xl"><Icon icon="octicon:plug-16" /></span>
          <span class="w-full"> Apps </span>
          <span class="box-border mt-1 text-gray-500"> </span>
        </button>
      </router-link>
      <router-link to="/component/CopyRight">
        <button
          class="text-gray-800 dark:text-gray-500 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 w-full flex text-left rounded-md box-border p-3"
        >
          <span class="mr-3 text-xl"
            ><Icon icon="ant-design:copyright-circle-outlined"
          /></span>
          <span class="w-full"> CopyRight </span>
          <span class="box-border mt-1 text-gray-500"> </span>
        </button>
      </router-link>
      <router-link to="/component/Legal">
        <button
          class="text-gray-800 dark:text-gray-500 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 w-full flex text-left rounded-md box-border p-3"
        >
          <span class="mr-3 text-xl"><Icon icon="codicon:law" /></span>
          <span class="w-full"> Legal </span>
          <span class="box-border mt-1 text-gray-500"> </span>
        </button>
      </router-link>
      <router-link to="/component/CanSpam">
        <button
          class="text-gray-800 dark:text-gray-500 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 w-full flex text-left rounded-md box-border p-3"
        >
          <span class="mr-3 text-xl"><Icon icon="ri:spam-2-line" /></span>
          <span class="w-full"> CanSpam </span>
          <span class="box-border mt-1 text-gray-500"> </span>
        </button>
      </router-link>
      <br />
      <hr />
      <br />
      <p class="font-medium text-gray-400 mt-4 dark:text-gray-600">Actions</p>
      <div class="item mt-3">
        <router-link to="/">
          <button
            class="text-gray-800 dark:text-gray-500 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl"
              ><Icon icon="typcn:arrow-forward-outline"
            /></span>
            <span class="w-full"> Export Email </span>
            <span class="box-border mt-1 text-gray-500"> </span>
          </button>
        </router-link>
      </div>
      <div class="item mt-3">
        <router-link to="/component/SavedEmails">
          <button
            id="SavedEmails"
            class="text-gray-800 dark:text-gray-500 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl"
              ><Icon icon="icon-park-outline:email-search"
            /></span>
            <span class="w-full"> Saved Emails </span>
            <span class="box-border mt-1 text-gray-500"> </span>
          </button>
        </router-link>
      </div>
      <div class="item mt-3">
        <router-link to="/">
          <button
            class="text-gray-800 dark:text-gray-500 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl"
              ><Icon icon="file-icons:test-generic"
            /></span>
            <span class="w-full"> <em>Coming Soon:</em> Email on Acid </span>
            <span class="box-border mt-1 text-gray-500"> </span>
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<style></style>
<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  mounted() {},
};
</script>
