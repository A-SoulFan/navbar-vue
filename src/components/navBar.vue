<template>
    <div id="navBar">
        <div id="navBarInnerWrapper">
            <img src="../assets/Logo.svg" id="logo" alt="logo"/>
            <div id="navBarIndices">
                <span @click="nabBarIndexClickHandler(navBarIndexName.name)"
                      :key="navBarIndexName.name" v-for="navBarIndexName in navBarIndicesName"
                      class="navBarIndex">{{ navBarIndexName.name }}</span>
            </div>
            <div id="navBarButtons">
                <div id="navBarSearchWrapper" class="navBarButtonWrapper">
                    <img id="navBarSearch" class="navBarButton" src="../assets/search.svg" alt="search"/>
                </div>
                <div class="navBarButtonWrapper">
                    <img class="navBarButton" src="../assets/user.svg" alt="user"/>
                </div>
                <div :style="navBarMobileMenuBGStyle" @touchstart="navBarMobileMenuTouched=true"
                     @touchend="navBarMobileMenuTouched=false"
                     @click="mobileMenuDisplay = !mobileMenuDisplay" id="navBarMobileMenuWrapper"
                     class="navBarButtonWrapper">
                    <img id="navBarMobileMenu" class="navBarButton" src="../assets/menu.svg" alt="menu"/>
                </div>
            </div>
        </div>
        <mobile-menu v-if="mobileMenuDisplay"></mobile-menu>
        <p-c-secondary-bar v-if="secondaryBarActivated" :activated-bar="activatedBarName"></p-c-secondary-bar>
    </div>
</template>

<script>
import mobileMenu from "./mobileMenu";
import PCSecondaryBar from "./PCSecondaryBar";

export default {
    name: "navBar",
    components: {
        mobileMenu,
        PCSecondaryBar
    },
    data() {
        return {
            mobileMenuDisplay: false,
            navBarMobileMenuTouched: false,
            navBarMobileMenuBGStyle: "background-color:white;",
            navBarIndicesName: [
                {
                    name: "用户讨论",
                },
                {
                    name: "内容整理",
                },
                {
                    name: "实用工具",
                },
                {
                    name: "新人指南",
                }
            ],
            activatedBarName: "",
            secondaryBarActivated: false
        }
    },
    watch: {
        navBarMobileMenuTouched() {
            if (this.$data.navBarMobileMenuTouched) {
                this.$data.navBarMobileMenuBGStyle = "background-color:#D1D5DB;"
            } else {
                this.$data.navBarMobileMenuBGStyle = "background-color:white;"
            }
        }
    },
    methods: {
        nabBarIndexClickHandler(indexName) {
            if (this.$data.secondaryBarActivated === false) {
                this.$data.secondaryBarActivated = true;
                this.$data.activatedBarName = indexName
            } else if (this.$data.activatedBarName === indexName) {
                this.$data.secondaryBarActivated = false;
            } else {
                this.$data.activatedBarName = indexName;
            }
        }
    }

}
</script>

<style scoped lang="less">
@primary-color: white;
#navBar {
  width: 100vw;
  height: 72px;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1000px) {
    height: 48px;
  }

  #navBarInnerWrapper {
    height: 100%;
    width: 1230px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1270px) {
      width: 950px;
    }
    @media (max-width: 1000px) {
      width: 90vw;
    }

    #logo {
      height: 50%;
    }

    #navBarIndices {
      @media (max-width: 1000px) {
        display: none;
      }

      .navBarIndex {
        margin: 0 10px 0 10px;
        cursor: pointer;
        color: grey;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        &:hover {
          color: black;
        }
      }
    }

    #navBarButtons {
      height: 100%;
      display: flex;
      align-items: center;

      .navBarButtonWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 25px;
        margin: 0 10px 0 10px;
        cursor: pointer;
        height: 50px;
        width: 50px;
        @media (max-width: 1000px) {
          height: 40px;
          width: 40px;
          display: none;
          border-radius: 20px;
        }

        &:hover {
          background-color: #D1D5DB;
        }


        .navBarButton {
          height: 28.8px;
          @media (max-width: 1000px) {
            display: none;
            height: 19.2px;
          }
        }

        #navBarMobileMenu {
          display: none;
          @media (max-width: 1000px) {
            display: block;
            margin: 0;
          }
        }

        #navBarSearch {
          height: 28.8px;
          @media (max-width: 1000px) {
            height: 19.2px;
            display: block !important;
          }
        }

      }

      .mobileWrapper {
        @media (max-width: 1000px) {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 5px;
          cursor: pointer;
        }
      }

      #navBarMobileMenuWrapper {
        display: none;
          .mobileWrapper();
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      #navBarSearchWrapper {
        display: flex;
          .mobileWrapper();
      }
    }

  }
}
</style>