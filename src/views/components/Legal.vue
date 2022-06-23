<template>
  <!-- Search component card with name of type, press Ctrl + F -->

  <div class="card-page h-auto p-3">
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Legal
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        Make sure you have selected a template or are using an existing piece.
      </p>
    </div>
    <div class="grid grid-cols-2 mt-10 gap-5">
      <div class="card w-full p-5 rounded-md bg-white dark:bg-gray-800">
        <h2 class="dark:text-gray-200 mb-2">Legal information here</h2>
<form>
   <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
       <div class="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
           <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
               <div class="flex items-center space-x-1 sm:pr-4">
                   <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                   </button>
               </div>
           </div>
           
       </div>
       <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
           <label for="editor" class="sr-only">Sumbit Legal</label>
           <textarea id="editor" rows="8" class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write legal here..." required=""></textarea>
       </div>
   </div>
   <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
       Sumbit Legal
   </button>
</form>

      </div>
    </div>
  </div>
</template>
