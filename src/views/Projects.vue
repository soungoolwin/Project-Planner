<template>
  <div class="home">
    <FilterNav :currentSubNav="currentSubNav" @filteredValue="filteredValue" />
    <div v-for="project in filteredProjects" :key="project.id" class="mt-5">
      <SingleProject
        :project="project"
        @isCompleteToggle="isCompleteToggle"
        @Delete="Delete"
      />
    </div>
  </div>
</template>

<script>
import FilterNav from "../components/FilterNav";
import SingleProject from "../components/SingleProject";
import axiosInstance from "../../api";

export default {
  components: {
    FilterNav,
    SingleProject,
  },
  data() {
    return {
      projects: [],
      currentSubNav: "All",
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
    filteredValue(value) {
      this.currentSubNav = value;
    },
  },
  computed: {
    filteredProjects() {
      if (this.currentSubNav === "Ongoing") {
        return this.projects.filter((project) => {
          return !project.IsComplete;
        });
      }
      if (this.currentSubNav === "Complete") {
        return this.projects.filter((project) => {
          return project.IsComplete;
        });
      }
      return this.projects;
    },
  },
  mounted() {
    axiosInstance
      .get("http://157.230.42.225/api/projects")
      .then((resources) => {
        return resources.json();
      })
      .then((datas) => {
        this.projects = datas.sort((a, b) => b.id - a.id);
      });
  },
};
</script>
