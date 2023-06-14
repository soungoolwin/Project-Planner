<template>
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-4">New Project</h2>
      <form @submit.prevent="updateProject">
        <div class="mb-4">
          <label
            for="project-name"
            class="block text-gray-700 text-sm font-medium mb-1"
            >Project Name</label
          >
          <input
            type="text"
            id="project-name"
            v-model="projectName"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-4">
          <label
            for="project-description"
            class="block text-gray-700 text-sm font-medium mb-1"
            >Description</label
          >
          <textarea
            id="project-description"
            v-model="projectDescription"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Project
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      projectName: "",
      projectDescription: "",
    };
  },

  mounted() {
    fetch("https://www.technophilialab.social/api/projects/" + this.id)
      .then((resource) => {
        return resource.json();
      })
      .then((data) => {
        this.projectName = data.name;
        this.projectDescription = data.description;
      });
  },
  methods: {
    updateProject() {
      const updateData = {
        name: this.projectName,
        description: this.projectDescription,
      };
      fetch("https://technophilialab.social/api/projects/" + this.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      }).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style></style>
