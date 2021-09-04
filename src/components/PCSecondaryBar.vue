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
        barArray:{
            type:Array,
            required:true
        },
        activatedBar:{
            type:String
        }
    },
    data(){
        return{
            activatedBarObject:{
                elementaryBar: "",
                secondaryBars: [
                    {name: "", link: ""}
                ],
                display:false
            },
            menuBars:this.barArray
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
    },
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