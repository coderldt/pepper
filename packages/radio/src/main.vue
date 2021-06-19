<template>
  <div 
    class="p-radio"
    :class="
      [
        `p-radio-${size}`,
        disabled ? 'p-radio-disabled' : ''
      ]
    "
  >
    <label>
      <input type="radio" :checked="value === keyName" :disabled="disabled" @change="onRadioChange">
      <span class="label">
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'PRadio',
  props: {
    value: {
      type: [String, Number],
      default: '',
      required: true
    },
    keyName: {
      type: [String, Number],
      default: '',
      required: true
    },
    disabled: Boolean,
    size: {
      type: String,
      default: 'm',
      validator: (val) => ['s', 'm', 'l'].includes(val)
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onRadioChange () {
      this.$emit('input', this.keyName)
    }
  }
}
</script>
