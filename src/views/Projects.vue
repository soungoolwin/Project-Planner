<template>
  <div class="home">
    <div v-for="project in projects" :key="project.id" class="mt-5">
      <SingleProject
        :project="project"
        @isCompleteToggle="isCompleteToggle"
        @Delete="Delete"
      />
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject";
export default {
  components: {
    SingleProject,
  },
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    isCompleteToggle(id) {
      let findProject = this.projects.find((project) => {
        return project.id === id;
      });
      findProject.IsComplete = !findProject.IsComplete;
    },
    Delete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id;
      });
    },
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((resources) => {
        return resources.json();
      })
      .then((datas) => {
        this.projects = datas.sort((a, b) => b.id - a.id);
      });
  },
};
</script>
