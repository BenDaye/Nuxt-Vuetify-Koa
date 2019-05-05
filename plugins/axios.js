export default function({ $axios, store }) {
  $axios.onRequest(config => {
    console.info(config)
    console.log('Making request to ' + config.url)
  })
  $axios.onResponse(response => {
    console.log('​response', response)
    const { data } = response
    if (data.sid) {
      $axios.setHeaders('Cookie', `jeesite.session.id=${data.sid}`)
    }
    return data
  })
  $axios.onError(err => {
    const { status, statusText } = err.response
    store.dispatch('notice/handleNotice', {
      visible: true,
      type: 'error',
      title: '错误',
      content: `${status}-${statusText}`,
      icon: 'remove_circle'
    })
  })
}
