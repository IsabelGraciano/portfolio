<template>
  <div class="modal_backdrop" @click="closeModal">
    <div class="modal_container" ref="modalContainer">
      <slot name="modalHeader" />
      <div class="modal_body">
        <slot name="modalBody" />
      </div>
      <slot name="modalFooter">
        <div class="footer_container">
          <button ref="closeButton" class="footer_close_button" @click="closeModal">Close</button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import project from '@/utils/types/project'

export default defineComponent({
  props: {
    data: {
      type: Object as () => project,
      default: null
    }
  },
  setup (props, { emit }) {
    const modalContainer = ref<HTMLElement | null>(null)
    const closeButton = ref<HTMLElement | null>(null)

    const closeModal = (event: any) => {
      if (modalContainer.value) {
        if (!modalContainer.value.contains(event.target) || event.target === closeButton.value) {
          emit('close')
        }
      }
    }

    return {
      closeModal,
      modalContainer,
      closeButton,
      props
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/global-styles.scss";

.modal_backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.50);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal_container {
  border: 2px solid $dark-green;
  width: 700px;
  height: 500px;
  background-color: #F5F5F5;
  overflow-y: scroll;
}

.modal_body {
  margin: 24px;
}

.footer_container {
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 18px;
  height: 20px;
  border-top: 2px solid $dark-green;
  background-color: white;
}

.footer_close_button {
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 5%;
  background: transparent;
  &:hover {
    cursor: pointer;
    background: $dark-green;
  }
}

</style>
