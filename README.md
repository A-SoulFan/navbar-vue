# asf-navbar-vue

## 使用

通过包管理器安装:

```bash
# Installation with npm
npm install asf-navbar-vue -D
# or with yarn
yarn add asf-navbar-vue -D
```

在项目中使用:

```typescript
// --------------- For Pure HTML ---------------------------------
// 用`<script>`标签引入项目文件夹中index.js与vue文件夹
// 即可在html中写入`<asf-navbar></asf-navbar>`

// --------------- For Vue ---------------------------------------
import { VueNavBar } from 'asf-navbar';
// 在`components`内添加`VueNavbar`
// 即可在template中写入`<vue-navbar></vue-navbar>`

// --------------- For React -------------------------------------
import { ReactNavBar } from 'asf-navbar';

export default () => {
  return (
    <div>
      <ReactNavBar/>
    </div>
  )
}
```
### VUE DEMO
```vue
<template>
  <div class="parent-element">
    <!-- bind your configurations -->
    <nav-bar :config="conf" :proj="'实用工具'" :activate-call-back="callback" ></nav-bar>
  </div>
</template>
<script>
import asfNavbar from 'asf-navbar';
  export default {
    components:{
        asfNavbar
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
          ]
        }
      }
    },
    methods:{
        callback(str){
            window.open(str);
            console.log(str);
        }
    }
  }
</script>
```


## 开发

```bash
# 运行前安装
yarn install

# 调试
yarn serve        # this is a shorthand of `yarn serve:vue`
yarn serve:vue    # debug vue component
yarn serve:react  # debug react component

# 打包
yarn build        # build for production mode, see `src/entries/main.ts`

# 代码检测
yarn lint

# 查看生产环境编译设置
yarn inspect
```

## API
|  参数   | 说明  |  类型  |  默认值  |
|  ----  | ----  | ----  |   ----  |
|`config`| 导航栏设置 | `Object`|   -   |
| `proj` | 项目名 | `String`|    - |
| `activate-call-back` | 子菜单点击后触发的回调函数 | `Function`|  `function openInNewTab(str){window.open(str)}` |


## 项目地址
[https://gitee.com/asoul-fan/asf-navbar-vue](https://gitee.com/asoul-fan/asf-navbar)

## 环境
* 使用 [Node.js 14.17.5](http://nodejs.cn/download/current/) 官网**LTS**版本

## Commit时备注
* 增加从未有过的**功能**，即新增**功能性**提交：`<feat>: +提交说明`
* 不改变**功能**，即新增**非功能性**提交： `<refactor>: +提交说明`
* 优化之前的代码，即更新**功能性**提交： `<update>: +提交说明`
* 提交说明可以使用**中文**

## 分支规范
多分支开发遵从 [GITFLOW](https://datasift.github.io/gitflow/IntroducingGitFlow.html#:~:text=GitFlow%20is%20a%20branching%20model,and%20scaling%20the%20development%20team.) 规范

## GIT提交规范
* 提交前会自动启动Git Hook调用husky + `yarn lint`,若检测到有任何语法错误或typo会阻止提交。

* 为避免全局配置中的邮箱或姓名带有盒信息，请修改全局Git配置或在具体项目根目录下使用以下命令修改Git提交信息

* `git config user.name "xxxx"` ` git config user.email "xxxxx@xx.xx"`

## 代码规范
* 变量命名优先遵循eslint+babel自带规范,若无提示,默认使用驼峰命名法(camelCase)
* **请不要随意格式化他人的文件**
* 在引入非官方依赖前需要联系负责人确认
* 新人提交的代码需要进行code review
