import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      items: [
        {task:"do the shopping", status:false},
        {task:"wash the car", status:true},
        {task:"mow the lawn", status:false},
        {task:"take the bin out", status:false}
      ],
      newItem:""
    },
    methods: {
      saveNewItem: function(){
        this.items.push({task: this.newItem, status:false});
        this.newItem = "";
      },
      doItem: function(index) {
        this.items[index].status = true;
      }
    }
  });
});
