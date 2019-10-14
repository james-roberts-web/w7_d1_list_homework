import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      items: [
        {task:"do the shopping", priority:"high" ,status:false},
        {task:"wash the car", priority:"high", status:true},
        {task:"mow the lawn",priority:"everyday", status:false},
        {task:"take the bin out", priority:"high", status:false}
      ],
      newItem:"",
      prio:""
    },
    methods: {
      saveNewItem: function(){
        this.items.push({task: this.newItem, priority:this.prio, status:false});
        this.newItem = "";
      },
      doItem: function(index) {
        this.items[index].status = true;
      }
    }
  });
});
