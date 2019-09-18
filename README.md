# meituan-app

## 基于vue实现的美团网

### 简介
- 模拟实现了美团网的首页，城市切换，以及简单的搜索提示功能

- 用到的vue技术栈有 vue-router，vuex和axios

### 个人心得

- 首先，个人觉得使用框架写项目和用原生写的区别还是很大的，原生js经常会和dom打交道，大量的操作是在获取dom元素，修改dom的属性以及如何渲染，写多了就会觉得非常麻烦。使用了框架之后呢，这种情况就大有改观了，开发项目基本上不用操作dom，那些繁琐的事全都交由框架帮我们做了，所以写项目的时候我们可以更加专注于我们的业务逻辑。不得不说现代MVVM框架的思想能给人很多启发，比如vue，对数据进行getter/setter化，通过数据劫持实现对依赖的收集，和数据变更时对所依赖组件的通知，以实现数据层到视图层的单向绑定，才使得框架逐步变得智能化。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
