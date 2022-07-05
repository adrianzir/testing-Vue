var app = new Vue({
  el: "#app",
  data: {
    showNumb: 0,
  },
  methods: {
    goUp() {
      return this.showNumb++;
    },
    lower() {
      return this.showNumb--;
    },
    // duplicar() {
    //   return this.showNumb * 2;
    // },
    // triplicar() {
    //   return this.showNumb * 3;
    // },
  },
  computed: {},
});