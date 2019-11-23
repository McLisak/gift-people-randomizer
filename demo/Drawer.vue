<template>
  <div class="drawer" :class="{open: open}" id="edit-drawer">
    <div class="drawer-title">
      <h3>{{title}}</h3>
      <div class="btn-group">
        <button class="btn btn" @click="close()">
          <i class="material-icons">check</i>
        </button>
      </div>
    </div>
    <div class="drawer-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const toggleBackdrop = (open, backdrop) => {
  if (open) {
    backdrop.classList.add("visible");
  } else {
    backdrop.classList.remove("visible");
  }
};
export default {
  props: ["title", "open", "name", "backdrop"],
  methods: {
    close() {
      backdrop.classList.remove("visible");
      this.$emit("close");
    }
  },
  mounted() {
    toggleBackdrop(this.open, this.backdrop);
  },
  watch: {
    open(newValue) {
      toggleBackdrop(newValue, this.backdrop);
    }
  }
};
</script>
