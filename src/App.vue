<template>
    <div id="app">
        <nav-bar happy="okok"></nav-bar>
    </div>

</template>

<script>
import navBar from "@/components/navBar";

export default {
    name: 'App',
    components: {
        navBar
    },
    data() {
        return {
            conf: {
                elementaryBar: "实用工具",
                secondaryBars: [
                    {name: "枝网查重", link: "https://www.baidu.com"},
                    {name: "成分姬", link: "https://www.baidu.com"},
                    {name: "表情包", link: "https://www.baidu.com"},
                    {name: "方言词典", link: "https://www.baidu.com"},
                    {name: "今天溜什么", link: "https://www.baidu.com"},
                ]
            }

        }
    }
}
</script>

<style>

</style>
