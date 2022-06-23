<template>
  <!-- Search component card with name of type, press Ctrl + F -->

  <div class="card-page h-auto p-3">
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        View in Browser
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        Make sure you have selected a template or are using an existing piece.
      </p>
    </div>
    <div class="grid grid-cols-4 mt-10 gap-5">
      <div class="card w-full p-5 rounded-md bg-white dark:bg-gray-800">
        <h2 class="dark:text-gray-200">Input information here</h2>
        <div class="mb-6 mt-4">
    <label for="ViBText" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Place Text Here</label>
    <input type="ViBtext" id="Text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div class="mb-6 mt-4">
    <label for="ViBLink" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Place Link Here</label>
    <input type="ViBLink" id="Text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div class="mb-6 mt-4">
    <label for="ViBAlias" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Place Alias Here</label>
    <input type="ViBAlias" id="Text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
      </div>
    </div>
  </div>
</template>
