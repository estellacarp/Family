module.exports = {
    get (url, params, options) {
      return window.axios.get(url, params, options)
            .then(function (res) {
                return res.data
            })
            .catch(function (erro) {
                return handleError(erro)
            })
    },

    post (url, body, options) {
        return window.axios.post(url, body, options)
            .then(function (res) {
                return res.data
            })
            .catch(function (erro) {
                return handleError(erro)
            })
    },

    put (url, body) {
        return window.axios.put(url, body)
            .then(function (res) {
                return res.data
            })
            .catch(function (erro) {
                return handleError(erro)
            })
    },

    patch (url, body) {
        return window.axios.patch(url, body)
            .then(function (res) {
                return res.data
            })
            .catch(function (erro) {
                return handleError(erro)
            })
    },

    delete (url, params) {
        return window.axios.delete(url, body)
            .then(function (res) {
                return res.data
            })
            .catch(function (erro) {
                return handleError(erro)
            })
    }
}

const handleError = (error) => {
    var message
    switch (error.status) {
      case 401:
        /*Auth.logout().then(() => {
          window.VueInstance.$router.push(`/auth?return=${window.location.pathname}`)
        })*/
        return {
          error: true,
          code: error.status,
          message: 'Please login.'
        }
      case 500:
        message = ['500 ERROR: Please contact support.']
        window.Vue.toast('500 ERROR: Please contact support.', { error: true })
        break
      case 404:
        message = ['The requested data was not found.']
        break
      case 400:
        message = error.body
        window.Vue.toast(error.body, { error: true })
        break
      case 422:
        message = error.body
        if (typeof message === 'string') {
          window.Vue.toast(message, { error: true, dismiss: false })
        } else if (typeof message === 'object') {
          window.Vue.toast(message[Object.keys(message)[0]], { error: true, dismiss: false })
        } else {
          window.Vue.toast('Check your input and try again.', { error: true, dismiss: false })
        }
        break
      default:
        message = error.body
    }
    return {
      error: true,
      code: error.status,
      message: message
    }
  }
  