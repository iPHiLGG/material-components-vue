import Checkbox from './Checkbox.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-checkbox', Checkbox)
  }
}
export default plugin

initPlugin(plugin)
