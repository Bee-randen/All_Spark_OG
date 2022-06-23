<template>
<div class="card w-full p-5 rounded-md bg-white dark:bg-gray-800">
        <h2 class="dark:text-gray-200">Universal Orlando B2B HHN Template</h2>
        <div class="wrapper-button w-full box-border mt-4">
          <div
            class="card max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <button style="display: flex;" v-on:click="toggleModal()">
              <img
                class="rounded-lg "
                src="http://emailassets.nbcuni.com/universalorlando/perm/CRM/2020/TA_0017_HHN_TixOnSale_MikeAiello_031020/HHN_Location_USF.jpg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-sm">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              Please Confirm
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <p class="my-4 text-blueGray-500 text-lg leading-relaxed">
              That the template you have choosen was: <strong>Universal Orlando B2B HHN Template</strong>
            </p>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Close
            </button>
            <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
</template>



<script>
export default {
  name: "small-modal",
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    }
  }
}
</script>