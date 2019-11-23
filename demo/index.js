import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: (createEl) => createEl(App)
}).$mount('#app');

// const people = ['Maciek', 'Marina', 'Wortol', 'Anka', 'Włoszka', 'Kaśka'];

// const randomizer = new GiftPeopleRandomizer(people);

// const result = randomizer.matchAll();

// let backdrop = document.getElementById('backdrop');

// const toggleDrawer = (drawerId) => {
//   const drawer = document.getElementById(drawerId);
//   const isDrawerOpen = drawer.classList.contains('open');
//   backdrop.classList[isDrawerOpen ? 'remove' : 'add']('visible');
//   drawer.classList[isDrawerOpen ? 'remove' : 'add']('open');
// };

// const drawerInit = () => {
//   const drawerOpeners = document.querySelectorAll('[data-drawer-open]');
//   const drawerClosers = document.querySelectorAll('[data-drawer-close]');
//   drawerOpeners.forEach((opener) => {
//     opener.addEventListener('click', () => {
//       toggleDrawer(opener.dataset.drawerOpen);
//     });
//   });
//   drawerClosers.forEach((closer) => {
//     closer.addEventListener('click', () => {
//       toggleDrawer(closer.dataset.drawerClose);
//     });
//   });
// };

// const listsInit = () => {
//   const lists = document.querySelectorAll('[data-people-list]');
//   lists.forEach((list) => {
//     const editable = list.dataset.peopleList === 'editable';
//     render(
//       listItems(['a', 'b'], {
//         removeCallback: () => {}
//       }),
//       list
//     );
//   });
//   console.log(lists);
// };

// const init = () => {
//   drawerInit();
//   listsInit();
// };

// init();
