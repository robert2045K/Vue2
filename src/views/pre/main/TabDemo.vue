<template>
   <div class="tab-box">
     <div class="options" @click="change">
       <!--:index是自定义属性-->
       <button v-for="(item,index) in list"
               :key="index"
               @click="change"
               :class="{active:activeIndex === index}"
               :index="index"
       >
         {{item.content}}
       </button>
     </div>

     <!--普通写法-->
     <!--<div v-for="(item,index) in list"
          :key="index"
          v-show="activeIndex === index"
          class="content">{{item.content}}</div> -->

     <!--组件写法-->
     <!--<TabNews v-show="activeIndex === 0"></TabNews>
     <TabMusic v-show="activeIndex === 1"></TabMusic>
     <TabMovie v-show="activeIndex === 2"></TabMovie>-->

     <!--
        :is写法, 只演染一个，其他不渲染，跟v-if类似的渲染方式。频繁渲染不太好。
        Vue内置的组件component，
        基于is指定一个组件名。
     -->
     <component :is="list[activeIndex].component"></component>
   </div>
</template>

<script>
import TabNews from "@/views/pre/main/tabs/TabNews.vue";
import TabMusic from "@/views/pre/main/tabs/TabMusic.vue";
import TabMovie from "@/views/pre/main/tabs/TabMovie.vue";

export default {
  name: "TabDemo",
  components: {
    TabNews,
    TabMusic,
    TabMovie
  },
  data(){
    return {
      activeIndex:0, //默认激活第一个
      list: [
          {
            title: "新闻",
            content: "新闻内容",
            component: "TabNews", //指定渲染哪一个组件， 这里只是一个变量存了一个组件名
          },
          {
            title: "音乐",
            content: "音乐内容",
            component: "TabMusic", //指定渲染哪一个组件
          },
          {
            title: "影视",
            content: "影视内容",
            component: "TabMovie", //指定渲染哪一个组件
          }
      ]
    }
  },
  methods: {
    //事件委托
    change(e) {
       let target = e.target;
       let index = 0;

       if(target.tagName === "BUTTON"){
         index = +target.getAttribute("index"); //+号是把字符串转成数字。
         this.activeIndex = index;
         console.log('111====', target.tagName, this.activeIndex)
       }
    }
  }
}
</script>

<style lang="less" scoped>
.tab-box {
  .options {
    button {
      &.active{
        color: red; //按钮激活为红色。
      }
    }
  }
}
</style>