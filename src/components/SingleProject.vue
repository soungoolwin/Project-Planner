<template>
  <div
    class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border-l-4 p-4 border-red-500"
    :class="{ 'border-green-500': project.IsComplete }"
  >
    <div class="p-8">
      <div
        class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
      >
        {{ project.name }}
      </div>
      <p
        class="block mt-3 text-lg leading-tight font-medium text-black hover:underline cursor-pointer"
        @click="showDescription = !showDescription"
      >
        Project Description
      </p>
      <p class="mt-2 text-gray-500" v-if="showDescription">
        {{ project.description }}
      </p>
      <div class="mt-4">
        <i class="mr-3 fa-solid fa-check" @click="toggleIsComplete()"></i>
        <router-link :to="`/edit-project/${project.id}`"
          ><i class="mr-3 fa-solid fa-pen-to-square"></i
        ></router-link>
        <i class="mr-3 fa-solid fa-trash" @click="Delete()"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { assertThisExpression } from "@babel/types";

export default {
  props: ["project"],
  data() {
    return {
      showDescription: false,
      baseUrl: "https://technophilialab.social/api/projects/",
    };
  },
  methods: {
    toggleIsComplete() {
      fetch(this.baseUrl + this.project.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          IsComplete: !this.project.IsComplete,
        }),
      }).then(() => {
        this.$emit("isCompleteToggle", this.project.id);
      });
    },
    Delete() {
      fetch(this.baseUrl + this.project.id, {
        method: "DELETE",
      }).then(() => {
        this.$emit("Delete", this.project.id);
      });
    },
  },
};
</script>

<style></style>
