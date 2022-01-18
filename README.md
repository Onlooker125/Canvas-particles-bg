# **particles-bg**

## 安装

---

Npm

```jsx
npm i particles-bg-vue
```

Yarn

```jsx
yarn add particles-bg-vue
```

## 使用

---

main.js全局引入

```jsx
import VueParticlesBg from "particles-bg-vue";
Vue.use(VueParticlesBg);
```

在组件中引入

```jsx
<particles-bg type="lines" :bg="true" />
...

import { ParticlesBg } from "particles-bg-vue";
export default {
  name: "App",
  components: {
    ParticlesBg
  }
};
```

## 属性

---

**type - 是粒子动画的类型**

```jsx
"color"     //颜色
"ball"      //球
"lines"     //线条
"thick"     //粗
"circle"    //原型
"cobweb"    //蜘蛛网
"polygon"   //多边形
"square"    //正方形
"tadpole"   //蝌蚪
"fountain"  //喷泉
"random"    //随机
"custom"    //自定义
```

**num - 每次发射的粒子数，一般不设置**

**bg - 如果将 bg 值设置为 `true`**

```jsx
bg={true} />

position: "absolute",
zIndex: -1,
top: 0,
left: 
```

如果将 bg 值设置为 `object`

```jsx
bg={{
  position: "absolute",
  zIndex: 999,
  width: 200
}} />
```

当然你也可以设置class`particles-bg-canvas-self`来修改样式。

```jsx
.particles-bg-canvas-self{
  background: #000;
  ...
}
```