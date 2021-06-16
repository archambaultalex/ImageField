Nova.booting((Vue, router, store) => {
  Vue.component('index-base64-image', require('./components/IndexField'))
  Vue.component('detail-base64-image', require('./components/DetailField'))
  Vue.component('form-base64-image', require('./components/FormField'))
})
