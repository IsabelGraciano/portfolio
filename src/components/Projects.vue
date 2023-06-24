<template>
  <div class="projects">
    <h1 class="project_title">Projects</h1>
    <div class="projects_list">
      <div class="project" v-for="project in projectsList" :key="project.id" @click="showProjectDetails(project)">
        <h3 class="project_title">{{project.name}}</h3>
        <img :src="getImage(project.imgs[0])" alt="project-picture" class="general_project_picture">
      </div>
    </div>

    <ProjectModal :data="modalData" v-show="isModalVisible" @close="closeModal">
      <template v-slot:modalHeader>
        <h3 class="modal_header_text">{{modalData.name}}</h3>
      </template>
      <template v-slot:modalBody>
        <p>{{modalData.description}}</p>
        <p><strong>Tech stack: </strong>{{modalData.techStack}}</p>
        <p><strong>Github source code: </strong><a :href="modalData.repository" target="_blank">{{modalData.name}}</a></p>
        <p v-if="modalData.url"><strong>Deployed project: </strong><a :href="modalData.url" target="_blank">{{modalData.name}}</a></p>

        <div class="project_images">
          <div v-for="image in modalData.imgs" :key="image">
            <img :src="getImage(image)" alt="project-picture" class="specific_project_picture">
          </div>
        </div>
      </template>
    </ProjectModal>
  </div>
</template>

<script lang="ts">
import ProjectModal from '@/components/ProjectModal.vue'
import { defineComponent, ref } from 'vue'
import projectsList from '@/utils/projectsList'
import project from '@/utils/types/project'

export default defineComponent({
  components: {
    ProjectModal
  },
  setup () {
    const isModalVisible = ref(false)
    const modalData = ref({})

    const showProjectDetails = (projectData: project) => {
      modalData.value = projectData
      isModalVisible.value = true
    }

    const closeModal = () => {
      isModalVisible.value = false
    }

    const getImage = (image: string) => {
      return require(`../assets/imgs/${image}`)
    }

    return {
      projectsList,
      isModalVisible,
      modalData,

      showProjectDetails,
      closeModal,
      getImage
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/global-styles.scss";

.project_title {
  text-align: center;
}

.projects_list {
  display: flex;
  flex-wrap: wrap;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: center;
}

.project {
  border: solid 2px $dark-green;
  width: 300px;
  height: 400px;
  margin: 12px;
  padding: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}

.general_project_picture {
  height: 80%;
  width: 100%;
  object-fit: cover;
}

.specific_project_picture {
  height: 200px;
  width: 400px;
  object-fit: cover;
}

.modal_header_text {
  text-align: center;
}

.project_images {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

</style>
