import ceList from './home/ce-list.vue'
import aheader from './home/header.vue'
import BreadCrumb from './common/bread-crumb.vue'
import { quillEditor } from 'vue-quill-editor' // 引入了quill组件
import CoverImage from './publish/cover-image'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  install (Vue) {
    Vue.component('a-lista', ceList) // 全局注册
    Vue.component('a-header', aheader) // 全局注册
    Vue.component('bread-crumb', BreadCrumb)
    Vue.component('quill-editor', quillEditor) // 全局注册富文本编辑器
    Vue.component('cover-image', CoverImage) // 注册一个封面组件
  }
}
