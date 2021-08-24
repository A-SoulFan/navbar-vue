<template>
    <div id="navBar">
        <div id="navBarInnerWrapper">
            <img src="../assets/Logo.svg" id="logo" alt="logo"/>
            <div id="navBarIndices">
                <span class="navBarIndex">用户讨论</span>
                <span class="navBarIndex">内容整理</span>
                <span class="navBarIndex">实用工具</span>
                <span class="navBarIndex">新人指南</span>
                <span></span>
            </div>
            <div id="navBarButtons">
                <div class="navBarButtonWrapper">
                    <img class="navBarButton" src="../assets/search.svg" alt="search"/>
                </div>
                <div class="navBarButtonWrapper">
                    <img class="navBarButton" src="../assets/user.svg" alt="user"/>
                </div>
                <div id="navBarMobileMenuWrapper" class="navBarButtonWrapper">
                    <img id="navBarMobileMenu" class="navBarButton" src="../assets/menu.svg" alt="menu"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navBar",
    props: ['happy']
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

      }

      #navBarMobileMenuWrapper {
        display: none;
        @media (max-width: 1000px) {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          cursor: pointer;
        }
      }
    }

  }
}
</style>