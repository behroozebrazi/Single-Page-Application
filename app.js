
// Take url from anchor tag <a>, and place it in the browser's address bar (link)
const navTo = (newUrl) => {
  // history.pushState(state, title, url) -> update url (change history) in the browser's history
  // state: it's an object to keep previous history state before changing it to new state
  // title: it's DOM title
  // url: it's the new url to change the link (history state)
  history.pushState(null, null, newUrl)
  // after changing the history (address bar link) by history.pushState(), 
  // it updates matchRoutes with new location path
  router()
}

// Managing paths (url)
const router = () => {
  const routes = [
    { path: '/', view: () => console.log('Route /') },
    { path: '/video', view: () => console.log('Route Video') },
    { path: '/post', view: () => console.log('Route Post') }
  ]
  // check the current location
  const matchRoutes = routes.map(item => {
    return { route: item, isMatch: location.pathname === item.path }
  })
  // redirect the current location if it does not exist in matchRoutes
  let matchUrl = matchRoutes.find(item => item.isMatch)
  if (!matchUrl) // null
    matchUrl = { route: routes[0], isMatch: true }


  console.log(matchUrl.route.view())
}

// this listener is run when the link in the address bar is changed
// popstate: event of changing history
window.addEventListener('popstate', router)

// load this listener after loading the DOM completely
document.addEventListener('DOMContentLoaded', (e) => {
  // add event to all anchor tags <a>
  document.body.addEventListener('click', (event) => { // select all <a> tag
    if (event.target.matches('[data-link')) {
      event.preventDefault()                           // stop refreshing page
      navTo(event.target.href)                         // pass the anchor url to router()
    }
  })

  // update browser url
  router()
})

