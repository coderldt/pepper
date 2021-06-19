<template>
  <div class="p-radio-group">
    <template v-if="type === 'default'">
      <p-radio v-for="(item, index) in data" :key="index" v-model="getValue" :disabled="disabled" :keyName="item[keyName]">{{ item[labelName] }}</p-radio>
    </template>
    <template v-else-if="type === 'button'">
      <p-radio-button v-for="(item, index) in data" :key="index" v-model="getValue" :disabled="disabled" :keyName="item[keyName]" :size="size">{{ item[labelName] }}</p-radio-button>
    </template>
  </div>
</template>

<script>
import PRadioButton from '../../radio/src/RadioButton.vue'
export default {
  name: 'PRadioGroup',
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    keyName: {
      type: String,
      default: 'key'
    },
    labelName: {
      type: String,
      default: 'value'
    },
    value: {
      type: [String, Number],
      default: '',
      required: true
    },
    type: {
      type: String,
      default: 'default',
      validator: (val) => ['default', 'button'].includes(val) // 默认样式会传入''
    },
    size: {
      type: String,
      default: 'm',
      validator: val => ['s', 'm', 'l'].includes(val)
    },
    disabled: Boolean
  },
  components: {
    PRadioButton
  },
  computed: {
    getValue: {
      get () {
        return this.value
      },
      set (val) {
        const item = this.data.find(i => i[this.keyName] === val)
        this.$emit('input', val)
        this.$emit('change', item)
      }
    }
  }
}
</script>
