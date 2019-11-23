<template>
  <div id="app">
    <div class="pool">
      <div class="row">
        <h2>People Pool</h2>
        <button class="btn" data-drawer-open="edit-drawer" @click="openDrawer='edit-drawer'">
          <i class="material-icons">edit</i>
        </button>
      </div>
      <list :list="people"></list>
    </div>

    <button v-if="people.length" class="btn btn-block" @click="randomize()">Randomize</button>

    <div class="output" v-if="result">
      <h2
        v-for="(resultItem, index) in result"
        :key="index"
      >{{resultItem.buys}} buys for {{resultItem.gets}}</h2>
    </div>

    <drawer
      :title="'Edit people'"
      :name="'edit-drawer'"
      :open="openDrawer==='edit-drawer'"
      :backdrop="backdrop"
      @close="openDrawer = null"
    >
      <div class="text-input">
        <input type="text" placeholder="Add person" v-model="newPersonName" />
        <button class="btn" @click="addPerson()">
          <i class="material-icons">add</i>
        </button>
      </div>

      <hr />

      <list :list="people" :editable="true"></list>
      <button
        v-if="people.length"
        class="btn btn-block btn-secondary"
        @click="people = []"
      >Clear list</button>
    </drawer>
  </div>
</template>

<script>
import { GiftPeopleRandomizer } from "../src/gift-people-randomizer";
import List from "./List";
import Drawer from "./Drawer";
const giftRandomizer = new GiftPeopleRandomizer();

export default {
  components: { List, Drawer },
  data: () => ({
    openDrawer: null,
    newPersonName: null,
    backdrop: document.getElementById("backdrop"),
    randomizer: giftRandomizer,
    result: {}
  }),
  computed: {
    people: {
      get() {
        return this.randomizer.people;
      },
      set(v) {
        this.randomizer.people = v;
      }
    }
  },
  watch: {
    people() {
      this.result = {};
    }
  },
  methods: {
    addPerson() {
      if (this.newPersonName) {
        this.people.push(this.newPersonName);
        this.newPersonName = null;
      }
    },
    randomize() {
      this.result = giftRandomizer.matchAll();
    }
  }
};
</script>
