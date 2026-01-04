
// Managing paths
const router = () => {
  const routes = [
    { path: '/', view: () => console.log('Route /') },
    { path: '/video', view: () => console.log('Route Video') },
    { path: '/post', view: () => console.log('Route Post') }
  ]
  // 
  const matchRoutes = routes.map((item) => {
    return {
      route: item,
      isMatch: location.pathname === item.path
    }
  })

  console.log(matchRoutes)
}


// load this listener after loading the DOM completely
document.addEventListener('DOMContentLoaded', (e) => {
  router()
})

