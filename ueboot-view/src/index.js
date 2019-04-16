import Log from './utils/Log'
import UTree from './components/tree/UTree.vue'
import UTreeSelect from './components/tree-select/UTreeSelect.vue'
import UFormGrid from './components/form-grid/UFormGrid.vue'
import UForm from './components/form/UForm.vue'
import WebSocket from './utils/WebSocket'
import axios from 'axios'
import Utils from './utils/Utils'
import Config from './config/Config'
import PageMain from './pages/shiro/Main'
import PageLogin from './pages/shiro/Login'
import PageShiroUser from './pages/shiro/User'
import PageShiroResources from './pages/shiro/Resources'
import PageShiroRole from './pages/shiro/Role'

const ueboot = {
  UTree,
  UFormGrid,
  UTreeSelect,
  Log,
  WebSocket,
  UForm,
  Utils,
  Config,
  PageLogin,
  PageMain,
  PageShiroUser,
  PageShiroResources,
  PageShiroRole
}

const install = function (Vue, opts = {}) {
  Object.keys(ueboot).forEach((key) => {
    Vue.component(key, ueboot[key])
  })
  Vue.prototype.$log = Log
  Vue.prototype.$utils = Utils
  Vue.prototype.$axios = axios
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  UTree,
  UFormGrid,
  UTreeSelect,
  Log,
  WebSocket,
  UForm,
  Utils,
  Config,
  PageLogin,
  PageMain,
  PageShiroUser,
  PageShiroResources,
  PageShiroRole
}
