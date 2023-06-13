<template>
  <div class="flex justify-center mb-4">
    <nav class="flex space-x-4">
      <button
        @click="filterBy('All')"
        class="px-4 py-2 rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300"
        :class="{ all: currentSubNav == 'All' }"
      >
        All
      </button>
      <button
        @click="filterBy('Ongoing')"
        class="px-4 py-2 rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300"
        :class="{ all: currentSubNav == 'Ongoing' }"
      >
        Ongoing
      </button>
      <button
        @click="filterBy('Complete')"
        class="px-4 py-2 rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300"
        :class="{ all: currentSubNav == 'Complete' }"
      >
        Complete
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["currentSubNav"],
  methods: {
    filterBy(value) {
      this.$emit("filteredValue", value);
    },
  },
};
</script>

<style>
.all {
  background-color: #21c55d;
}
</style>
