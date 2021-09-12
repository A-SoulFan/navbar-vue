# asf-navbar

## Usage

通过包管理器安装:

```bash
# Installation with npm
npm install asf-navbar -D
# or with yarn
yarn add asf-navbar -D
```

在项目中使用:

```typescriptreact
// --------------- For Pure HTML (目前版本不支持) ----------------
// 用 `<script>` 标签引入项目文件夹中 index.js 与 vue 文件夹
// 即可在 html 中写入 `<asf-navbar></asf-navbar>` 

// --------------- For Vue ---------------------------------------
// 在 `components` 内添加 `asfNavbar` 
// 即可在 template 中写入 `<asf-navbar></asf-navbar>` 
<template>
  <div id="app">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import { VueNavBar } from 'asf-navbar'

export default {
  name: 'App',
  components: {
    'nav-bar': VueNavBar,
  },
}
</script>


// --------------- For React -------------------------------------
import { ReactNavBar } from 'asf-navbar';

export default () => {
  return (
    <div>
      <ReactNavBar />
    </div>
  )
}
```

## 开发

```shell
# 运行前安装
yarn install

# 调试
yarn serve:vue    # 查看 vue 组件
yarn serve:react  # 查看 react 组件

# 打包
yarn build        # 构建项目

# 代码检测
yarn lint

# 发布至 npm
yarn release:publish
```

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

* 提交前会自动启动 Git Hook 调用 `husky` + `yarn lint`，若检测到有任何语法错误或 typo 会阻止提交。
* 为避免全局配置中的邮箱或姓名带有盒信息，请修改全局 Git 配置或在具体项目根目录下使用以下命令修改 Git 提交信息

    ```shell
    git config user.name "xxxx"
    git config user.email "xxxxx@xx.xx"
    ```

## 代码规范

* 变量命名优先遵循eslint+babel自带规范,若无提示,默认使用驼峰命名法(camelCase)
* **请不要随意格式化他人的文件**
* 在引入非官方依赖前需要联系负责人确认
* 新人提交的代码需要进行code review
