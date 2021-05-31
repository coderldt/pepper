/* Automatically generated by './build/bin/build-entry.js' */

import Button from '../packages/button/index.js';
import Input from '../packages/input/index.js';

const components = [
  Button,
  Input
]

const install = function(Vue) {

  components.forEach(component => {
    Vue.component(component.name, component);
  })

}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.1',
  install,
  Button,
  Input
}
