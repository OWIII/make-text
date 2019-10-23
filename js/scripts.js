let app = new Vue({
  el: '.wrapper',
  data: {
    inputText: ''
  },
  computed: {
    countOfsymbols: function() {
      return this.inputText.length;
    },
    countOfSymbolsWithoutSpace: function() {
      return this.inputText.split(' ').join('').length;
    },
    countOfWords: function() {
      return this.inputText.split(/[^\s]+/).length - 1;
    }
  },
  methods: {
    CopyText() {
      var textaria = document.querySelector('.textaria');
      textaria.select();
      document.execCommand('copy');
    },
    DeleteText() {
      var textaria = document.querySelector('.textaria');
      textaria.value = '';
      this.inputText = '';
    }
  }
});