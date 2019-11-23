<template>
  <ul :class="{ 'edit-list': editable }">
    <h3 v-if="!list.length">No people in the list</h3>

    <li v-else-if="editable" v-for="(item, index) in list" :key="index">
      <div class="text-input">
        <input
          type="text"
          :disabled="editedIndex !== index"
          :ref="`input-${index}`"
          :value="item"
          @blur="(event) => updateItem(index, event.target)"
        />
      </div>
      <div class="btn-group">
        <button :disabled="editedIndex === index" class="btn" @click="editItem(index)">
          <i class="material-icons">edit</i>
        </button>
        <button class="btn btn-secondary" @click="list.splice(index, 1)">
          <i class="material-icons">clear</i>
        </button>
      </div>
    </li>

    <li v-else v-for="(item, index) in list" :key="index">{{item}}</li>
  </ul>
</template>

<script>
export default {
  props: ["editable", "list"],
  data: () => ({
    editedIndex: null
  }),
  methods: {
    updateItem(index, { value }) {
      this.editedIndex = null;
      if (value === "") return;
      this.list.splice(index, 1, value);
    },
    editItem(index) {
      if (this.editedIndex === index) return;
      this.editedIndex = index;
      window.requestAnimationFrame(() => {
        this.$refs[`input-${index}`][0].focus();
      });
    }
  }
};
</script>