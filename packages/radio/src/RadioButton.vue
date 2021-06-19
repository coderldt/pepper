<template>
  <div 
    class="p-radio-button"
    :class="
      [
        disabled ? 'p-radio-button-disabled' : ''
      ]
    "
  >
    <p-button :type="value === keyName ? 'blue' : ''" :size="size" :disabled="disabled" @click="onRadioChange"><slot></slot></p-button>
    <!-- <label>
      <input type="radio" :checked="value === keyName" :disabled="disabled" @change="onRadioChange">
      <span class="label">
        <slot></slot>
      </span>
    </label> -->
  </div>
</template>

<script>
export default {
  name: 'PRadioButton',
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
