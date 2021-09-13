<template>
    <div id="mobileMenu">
        <div id="personalPart">
            <!-- <avatar username="walker2398"></avatar> -->
            <p id="personalText">登录/注册</p>
        </div>
        <div id="menu">
            <div :key="barName.elementaryBar" v-for="barName in this.barArray" class="menuBarWrapper">
                <div @click="barName.display=!barName.display" class="elementaryBar">
                    {{ barName.elementaryBar }}
                    <img style="cursor:pointer;height: 16px;" src="../assets/plus.svg" alt="plus"/></div>
                <div  v-if="barName.display" class="secondaryBarsWrapper">
                    <div class="secondaryBar" :key="secondaryBarName.name" @click="callback(secondaryBarName.link)"
                         v-for="secondaryBarName in barName.secondaryBars">
                        {{ secondaryBarName.name }}
                        <img style="position:absolute;height:16px;right: calc(5vw + 5px)" src="../assets/jump.svg" alt="jump"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Avatar from 'vue-avatar';

export default {
    name: "mobileMenu",
    props:{
        barArray:{
            type:Array,
            required:true
        },
        callback:{
            type:Function,
            required: true
        }
    },
    components: {
        // Avatar
    }
}
</script>

<style scoped lang="less">
#mobileMenu {
  display: flex;
  position: absolute;
  top: 48px;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
  z-index: 3;
  padding-bottom: 20px;
  #personalPart {
    display: flex;
    width: 90%;
    padding: 10px;
    justify-content: flex-start;
    align-items: center;

    #personalText {
      margin-left: 10px;
    }
  }

  .menuBarWrapper {
    display: flex;
    width: 90vw;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 64px;
    border-bottom: 1px solid grey;

    .elementaryBar {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin:10px 0 0 0;
    }

    .secondaryBarsWrapper {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding-bottom:20px;
      .secondaryBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        color: grey;
        margin-top: 20px;
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
