## 生命周期
beforeCreate  created
beforeMount   mounted
beforeUpdate  updated
beforeDestroy destroyed


## Vue实例上的属性和方法
- vm.$data  获取所有响应式数据，是个对象
- vm.$el  挂载的根元素
- vm.$options  配置项
- vm.$refs.xx  获取真实的dom元素
- vm.nextTick  DOM渲染完成后调用
- vm.$watch  监听属性变化

## 组件化好处 好处
- 使用模块化思想
- 发挥代码复用性
- 便于团队协同开发
- 便于维护和管理

## 组件的使用
- 把自定义的标签认为是一个组件。w3c规定的标签不能作为组件，他有特殊含义
- 组件名字定义规范：1.首字母大写2.不能用中文3.多个字母之间用-连接，在js里写成驼峰式的也可以
