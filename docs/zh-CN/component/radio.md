# Radio 单选按钮

### 基础用法
> 在选项很少，有限的情况下使用，选项较多的情况请使用select组件。

``` html
  <template>
    <p-radio v-model="fruit" keyName="apple">苹果</p-radio>
    <p-radio v-model="fruit" keyName="banana">香蕉</p-radio>
  </template>

  <script>
    export default {
      data () {
        return {
          fruit: 'apple'
        };
      }
    }
  </script>
```
<template>
  <p-radio v-model="fruit" keyName="apple">苹果</p-radio>
  <p-radio v-model="fruit" keyName="banana">香蕉</p-radio>
</template>


### 禁用状态
> 设置单选按钮的可点击状态
``` html
  <template>
    <p-radio v-model="ball" keyName="football">足球</p-radio>
    <p-radio v-model="ball" keyName="basketball">篮球</p-radio>
    <p-radio v-model="ball" disabled keyName="volleyball">排球 (禁用)</p-radio>
  </template>

  <script>
  export default {
    data () {
      return {
        ball: 'football'
      };
    }
  }
</script>
```
<template>
  <p-radio v-model="ball" keyName="football">足球</p-radio>
  <p-radio v-model="ball" keyName="basketball">篮球</p-radio>
  <p-radio v-model="ball" disabled keyName="volleyball">排球 (禁用)</p-radio>
</template>

### 大小
> 设置单选按钮的大小尺寸
``` html
  <template>
    <p-radio v-model="vegetables" size="s" keyName="potato">土豆 (s)</p-radio>
    <p-radio v-model="vegetables" keyName="cabbage">白菜 (m)</p-radio>
    <p-radio v-model="vegetables" size="l" keyName="carrot">胡萝卜 (l)</p-radio>
  </template>

  <script>
  export default {
    data () {
      return {
        vegetables: 'potato'
      };
    }
  }
</script>
```
<template>
  <p-radio v-model="vegetables" size="s" keyName="potato">土豆 (s)</p-radio>
  <p-radio v-model="vegetables" keyName="cabbage">白菜 (m)</p-radio>
  <p-radio v-model="vegetables" size="l" keyName="carrot">胡萝卜 (l)</p-radio>
</template>

### 按钮组
> 通过data将数据传入
``` html
  <template>
    <p-radio-group :data="animalGroup" v-model="animal"></p-radio-group>
  </template>

  <script>
    export default {
      data () {
        return {
          animalGroup: [
            { key: 'monkey', value: '猴子' },
            { key: 'rabbit', value: '兔子' },
            { key: 'lion', value: '狮子' },
            { key: 'elephant', value: '大象' },
          ],
          animal: 'monkey',
        };
      }
    }
  </script>
```
<template>
  <template>
    <p-radio-group :data="animalGroup" v-model="animal"></p-radio-group>
  </template>
</template>

### 自定义数据字段（key，value）
> 在不同的情况下数据的字段不一，可以通过指定keyName和labelName指定数组中的字段，默认为key和value

``` html
  <template>
    <p-radio-group :data="foodGroup" keyName="code" labelName="label" v-model="food"></p-radio-group>
  </template>

  <script>
    export default {
      data () {
        return {
          foodGroup: [
            { code: 'hotDog', label: '热狗' },
            { code: 'noodles', label: '面条' },
            { code: 'rice', label: '米饭' },
            { code: 'chicken', label: '鸡肉' },
          ],
          food: 'noodles'
        };
      }
    }
  </script>
```
<template>
  <p-radio-group :data="foodGroup" keyName="code" labelName="label" v-model="food"></p-radio-group>
</template>

### 修改按钮组展示方式
> 设置type，控制按钮组的样式

``` html
  <template>
    <p-radio-group type="button" :data="foodGroup" keyName="code" labelName="label" v-model="foodButton" ></p-radio-group>
  </template>

  <script>
    export default {
      data () {
        return {
          foodGroup: [
            { code: 'hotDog', label: '热狗' },
            { code: 'noodles', label: '面条' },
            { code: 'rice', label: '米饭' },
            { code: 'chicken', label: '鸡肉' },
          ],
          foodButton: 'noodles'
        };
      }
    }
  </script>
```
<template>
  <p-radio-group type="button" :data="foodGroup" keyName="code" labelName="label" v-model="foodButton" ></p-radio-group>
</template>


### 按钮组大小
> 

``` html
  <template>
    <p-radio-group type="button" size="s" :data="foodsGroup" labelName="label" v-model="foods" ></p-radio-group>
    <p-radio-group type="button" size="m" :data="foodsGroup" labelName="label" v-model="foods" ></p-radio-group>
    <p-radio-group type="button" size="l" :data="foodsGroup" labelName="label" v-model="foods" ></p-radio-group>
  </template>

  <script>
    export default {
      data () {
        return {
          foodsGroup: [
            { key: 'hotDog', label: '热狗' },
            { key: 'noodles', label: '面条' },
            { key: 'rice', label: '米饭' },
            { key: 'chicken', label: '鸡肉' },
          ],
          foods: 'noodles'
        };
      }
    }
  </script>
```
<template>
  <p-radio-group type="button" size="s" :data="foodsGroup" labelName="label" v-model="foods"></p-radio-group>
  <p-radio-group type="button" size="m" :data="foodsGroup" labelName="label" v-model="foods" ></p-radio-group>
  <p-radio-group type="button" size="l" :data="foodsGroup" labelName="label" v-model="foods" ></p-radio-group>
</template>


<script>
  export default {
    data () {
      return {
        fruit: 'apple',
        ball: 'football',
        vegetables: 'potato',
        animalGroup: [
          { key: 'monkey', value: '猴子' },
          { key: 'rabbit', value: '兔子' },
          { key: 'lion', value: '狮子' },
          { key: 'elephant', value: '大象' },
        ],
        animal: 'monkey',

        foodGroup: [
          { code: 'hotDog', label: '热狗' },
          { code: 'noodles', label: '面条' },
          { code: 'rice', label: '米饭' },
          { code: 'chicken', label: '鸡肉' },
        ],
        food: 'noodles',
        foodType: 'chicken',
        foodButton: 'noodles',

        foodsGroup: [
          { key: 'hotDog', label: '热狗' },
          { key: 'noodles', label: '面条' },
          { key: 'rice', label: '米饭' },
          { key: 'chicken', label: '鸡肉' },
        ],
        foods: 'noodles'
      };
    }
  }
</script>

### Radio参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model     | 绑定值   | string / number  |   -            |    -    |
| keyName     | 单选框的key值 (与value 相同 则为已选中)  | string / number   |   - |  -    |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| size     | 尺寸   | string  |   s / m / l            |    m    |

### Radio事件
| 事件      | 说明    | 返回数据      |
|---------- |-------- |---------- |
| input     | 绑定值变更时触发   | 当前绑定的 value / v-model 值  |

### RadioGroup参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model     | 绑定值   | string / number  |   -            |    -    |
| data     | 按钮组绑定的数据   | array  |   -            |    [ ]    |
| keyName     | 按钮对应数组中的key字段  | string / number   |   - |  -    |
| labelName     | 按钮对应数组中的value字段  | string / number   |   - |  -    |
| disabled  | 是否禁用状态    | boolean   |   - | false   |
| size     | 尺寸   | string  |   s / m / l            |    m    |

### RadioGroup事件
| 事件      | 说明    | 返回数据      |
|---------- |-------- |---------- |
| input     | 绑定值变更时触发   | 当前绑定的 value / v-model 值  |
| change     | 绑定值变更时触发   | 当前绑定的值的对象  |