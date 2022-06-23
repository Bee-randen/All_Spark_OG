<template>
  <div class="card-page h-auto p-3">
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Template
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        Choose the correct <em>template</em> for the job.
      </p>
    </div>
    <div class="grid grid-cols-3 mt-10 gap-5">
      <!-- Universal Orlando B2C Template -->
      <B2COUS />
      <!-- Universal Orlando B2B Template -->
      <B2BOUS />
      <!-- Universal Hollywood B2C Template -->
      <B2CUSH />
      <!-- Universal Orlando B2C HHN Template -->
      <B2COUSHHN />
      <!-- Universal Orlando B2B HHN Template -->
      <B2BOUSHHN />
      <!-- Universal Hollywood B2C HHN Template -->
      <B2CUSHHHN />
    </div>
  </div>
</template>
<script>
import B2COUS from "../../Email/Templates/B2COUS.vue"
import B2BOUS from "../../Email/Templates/B2BOUS.vue"
import B2CUSH from "../../Email/Templates/B2CUSH.vue"
import B2COUSHHN from "../../Email/Templates/B2COUSHHN.vue"
import B2BOUSHHN from "../../Email/Templates/B2BOUSHHN.vue"
import B2CUSHHHN from "../../Email/Templates/B2CUSHHHN.vue"

export default{
  components :{
    B2COUS,
    B2BOUS,
    B2CUSH,
    B2COUSHHN,
    B2BOUSHHN,
    B2CUSHHHN
  }
}
</script>


