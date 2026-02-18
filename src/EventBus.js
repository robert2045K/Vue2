import Vue from 'vue';
let vm = new Vue ({
    data: {
        supNum:30,
        oppNum:30
    },
    methods:{
        change(type) {
            if (type==='sup'){
                this.supNum++;
                return;
            }
            this.oppNum++;
        }
    }
});
vm.$on("change", vm.change)
export default vm;