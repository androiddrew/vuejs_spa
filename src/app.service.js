import axios from 'axios'

axios.defaults.baseURL = 'https://api.fullstackweekly.com'

// To avoid adding the token to every request we make to a service we can
// instead use an interceptor
axios.interceptors.request.use(function (config) {
  // added for when the code is running on a server for serverside rendering
  if (typeof window === 'undefined') {
    return config
  }
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

const appService = {
  getPosts (categoryId) {
    // I guess we can do some string format like operations here
    // This is a promise so once it is resolved we will receive the response
    return new Promise((resolve) => {
      axios.get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`)
        .then(response => {
          resolve(response.data)
        })
    })
  }, // getPosts
  getProfile () {
    return new Promise((resolve) => {
      axios.get('/services/profile.php' // ,
        /*
        {
          headers: {
            'Authorization': `Bearer ${window.localStorage.getItem('token')}`
          }
        }
        */
      )
        .then(response => {
          resolve(response.data)
        })
    })
  }, // getProfile
  login (credentials) { // credemtials will be a javascript object
    // returns a new promise
    return new Promise((resolve, reject) => {
      axios.post('/services/auth.php', credentials)
        .then(response => {
          resolve(response.data)
        }).catch(response => {
          reject(response.status)
        })
    })
  } // login
}

export default appService
