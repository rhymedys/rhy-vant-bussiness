# MagicCube 魔方

### 引入

```javascript
import Vue from 'vue';
import { MagicCube } from 'vant';

Vue.use(MagicCube);
```

## 代码演示

### 基础用法

```html
<vantbussiness-magic-cube
  :list="base.list"
  :template-type="base.templateType"
  :pic-dis="base.picDis"
  :edge-dis="base.edgeDis"
/>
```

```js
export default {
  data() {
    return {
      base: {
        templateType: '1*2',
        list: [
          {
            src:
              'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            link: 'https://baidu.com'
          },
          {
            src: 'https://img.yzcdn.cn/vant/cat.jpeg',
            link: 'https://baidu.com'
          },
          {
            src: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
            link: 'https://baidu.com'
          },
          {
            src:
              'https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=3656342777,3322351644&fm=190&app=71&f=JPEG?w=121&h=75&s=F8E2B144C3F49E6E10C5E10B0000E081',
            link: 'https://taobao.com'
          }
        ],
        picDis: 4,
        edgeDis: 6
      }
    };
  }
};
```

## API

### Props

| 参数         | 说明                                   | 类型                                 | 默认值 | 版本 |
| ------------ | -------------------------------------- | ------------------------------------ | ------ | ---- |
| templateType | 模版类型                               | _1\*2\|1\*3\|1\*4\|2\*2\|1L2R\|1T2B_ |        | -    |
| list         | 图片列表,数量一定等于魔方内图片的数量. | _ListObj_                            |        | -    |
| picDis       | 图片间隔                               | _number \| undefiend_                |        | -    |
| edgeDis      | 页面边距                               | _number \| undefiend_                |        | -    |

```js
备注：
1\*2: 1 行 2 个
1\*3: 1 行 3 个
1\*4: 1 行 4 个
2\*2: 2 行 2 个
1L2R: 1 左 2 右
1T2B: 1 上 2 下
```

### ListObj Data Structure

| key  | Description | Type                  |
| ---- | ----------- | --------------------- |
| src  | 图片地址    | _string_              |
| link | 跳转连接    | _string \| undefiend_ |
