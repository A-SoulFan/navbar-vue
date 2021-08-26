<template>
    <div id="PCSecondaryBar">
        <div id="navBarIndices">
            <span @click="openInNewTab(menuBar.link)"
                  :key="menuBar.name" v-for="menuBar in activatedBarObject.secondaryBars"
                  class="secondaryNavBarIndex">{{ menuBar.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "PCSecondaryBar",
    props: {
        activatedBar:{
            default:"  "
        }
    },
    data(){
        return{
            menuBars: [
                {
                    elementaryBar: "用户讨论",
                    secondaryBars: [
                        {name: "happy1", link: "https://www.baidu.com"}
                    ],
                    display:false
                },
                {
                    elementaryBar: "内容整理",
                    secondaryBars: [
                        {name: "happy2", link: "https://www.baidu.com"}
                    ],
                    display:false
                },
                {
                    elementaryBar: "实用工具",
                    secondaryBars: [
                        {name: "枝网查重", link: "https://www.baidu.com"},
                        {name: "成分姬", link: "https://www.baidu.com"},
                        {name: "表情包", link: "https://www.baidu.com"},
                        {name: "方言词典", link: "https://www.baidu.com"},
                        {name: "今天溜什么", link: "https://www.baidu.com"},
                        {name: "数据分析", link: "https://www.baidu.com"},
                    ],
                    display:false
                },
                {
                    elementaryBar: "新人指南",
                    secondaryBars: [
                        {name: "happy3", link: "https://www.baidu.com"}
                    ],
                    display:false
                },
                {
                    elementaryBar: "关于我们",
                    secondaryBars: [
                        {name: "happy2", link: "https://www.baidu.com"}
                    ],
                    display:false
                },
            ],
            activatedBarObject:{
                elementaryBar: "",
                secondaryBars: [
                    {name: "", link: ""}
                ],
                display:false
            },
        }
    },
    watch:{
        activatedBar:{
            immediate:true,
            handler:function (){
                for(let i = 0;i<this.$data.menuBars.length;i++){
                    if(this.$data.menuBars[i].elementaryBar === this.activatedBar){
                        this.$data.activatedBarObject = this.$data.menuBars[i];
                        return
                    }
                }
            }
        }

    },
    methods:{
        openInNewTab(url){
            window.open(url);
        }
    }
}
</script>

<style scoped lang="less">
#PCSecondaryBar {
  position: absolute;
  top: 72px;
  height:64px;
  background-color: white;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px #D1D5DB solid;
  .secondaryNavBarIndex{
    margin: 0 10px;
    color: grey;
    cursor: pointer;
    &:hover{
      color: black;
    }
  }
}
</style>