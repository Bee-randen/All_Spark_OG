<template>
  <!-- this header -->
  <header class="bg-white dark:bg-gray-800 p-2 border-b-2 dark:border-gray-700">
    <div class="wrap-header flex items-center justify-between flex-wrap">
      <div class="flex flex-no-shrink items-center">
        
        <h2
          class="text-md text-indigo-800 ml-3 lg:block hidden px-5 p-2 rounded-md bg-indigo-200"
        >
          -- AllSpark --
        </h2>
      </div> 


      <div class="mr-5 flex">
        <button
          id="theme-toggle"
          type="button"
          data-tooltip-target="tooltip-theme"
          class="text-gray-500 mr-5 dark:text-gray-400 h outline-none rounded-lg text-sm p-2.5" 
        >
          <svg
            id="theme-toggle-light-icon"
            class="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
          <svg
            id="theme-toggle-dark-icon"
            class="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div id="tooltip-theme" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(1180px, 300px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
               Dark Mode On/Off
          <div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(63px, 0px);"></div>
        </div>

        <button id="BuilderButton" @click="Builder = !Builder" data-tooltip-target="tooltip-builder">
          <Icon
            icon="fa6-solid:trowel-bricks"
            class="mr-5 text-xl text-gray-500"
          />
        </button>
        <div id="tooltip-builder" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(1180px, 300px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
               Show Builder View
          <div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(63px, 0px);"></div>
        </div>

        
        <button class="mr-5 text-2xl text-gray-500">
          <a href="https://youtu.be/kuw0TmBPBXk" target="_blank" style="text-decoration: none;"><Icon icon="mdi:robot-confused-outline" /></a>
        </button>
        
        
      </div>
    </div>
  </header>
</template>

<script>
  import { Icon } from "@iconify/vue";

  export default {
    data() {
      return {
        menu: false,
      };
    },
    components: {
      Icon,
    },
    mounted() {
      var themeToggleDarkIcon = document.getElementById(
        "theme-toggle-dark-icon"
      );
      var themeToggleLightIcon = document.getElementById(
        "theme-toggle-light-icon"
      );

      // Change the icons inside the button based on previous settings
      if (
        localStorage.getItem("color-theme") === "dark" ||
        !("color-theme" in localStorage)
      ) {
        document.documentElement.classList.add("dark");
        themeToggleLightIcon.classList.remove("hidden");
      } else {
        document.documentElement.classList.remove("dark");
        themeToggleDarkIcon.classList.remove("hidden");
      }

      // // if set via local storage previously
      // if (!localStorage.getItem("color-theme")) {
      //   if (localStorage.getItem("color-theme") === "light") {
      //     document.documentElement.classList.add("dark");
      //     localStorage.setItem("color-theme", "dark");
      //   } else {
      //     document.documentElement.classList.remove("dark");
      //     localStorage.setItem("color-theme", "light");
      //   }

      // if NOT set via local storage previously
      // } else {
      //   if (document.documentElement.classList.contains("dark")) {
      //     document.documentElement.classList.remove("dark");
      //     localStorage.setItem("color-theme", "light");
      //   } else {
      //     document.documentElement.classList.add("dark");
      //     localStorage.setItem("color-theme", "dark");
      //   }
      // }

      var themeToggleBtn = document.getElementById("theme-toggle");

      themeToggleBtn.addEventListener("click", function () {
        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle("hidden");
        themeToggleLightIcon.classList.toggle("hidden");

        // if set via local storage previously
        if (localStorage.getItem("color-theme")) {
          if (localStorage.getItem("color-theme") === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          }

          // if NOT set via local storage previously
        } else {
          if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          }
        }
      });
    },
  };
</script>
