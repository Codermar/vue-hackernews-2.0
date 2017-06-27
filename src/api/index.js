// this is aliased in webpack config based on server/client build
import { createAPI } from 'create-api'

const logRequests = !!process.env.DEBUG_API

const api = createAPI({
  version: '/v0',
  config: {
    databaseURL: 'https://hacker-news.firebaseio.com'
  }
})

// warm the front page cache every 15 min
// make sure to do this only once across all requests
if (api.onServer) {
  warmCache()
}

function warmCache() {
  fetchItems((api.cachedIds.top || []).slice(0, 30))
  setTimeout(warmCache, 1000 * 60 * 15)
}

function fetch(child) {
  logRequests && console.log(`fetching ${child}...`)
  const cache = api.cachedItems
  if (cache && cache.has(child)) {
    logRequests && console.log(`cache hit for ${child}.`)
    return Promise.resolve(cache.get(child))
  } else {
    return new Promise((resolve, reject) => {
      api.child(child).once('value', snapshot => {
        const val = snapshot.val()
        // mark the timestamp when this item is cached
        if (val) val.__lastUpdated = Date.now()
        cache && cache.set(child, val)
        logRequests && console.log(`fetched ${child}.`)
        resolve(val)
      }, reject)
    })
  }
}

export function fetchIdsByType(type) {
  return api.cachedIds && api.cachedIds[type]
      ? Promise.resolve(api.cachedIds[type])
      : fetch(`${type}stories`)
}

export function fetchItem(id) {
  return fetch(`item/${id}`)
}

export function fetchItems(ids) {
  return Promise.all(ids.map(id => fetchItem(id)))
}

export function fetchUser(id) {
  return fetch(`user/${id}`)
}

export function watchList(type, cb) {
  let first = true
  const ref = api.child(`${type}stories`)
  const handler = snapshot => {
    if (first) {
      first = false
    } else {
      cb(snapshot.val())
    }
  }
  ref.on('value', handler)
  return () => {
    ref.off('value', handler)
  }
}

// puppeteer

export function fetchEscalatedPosts() {
  // return fetch(`http://localhost:10010/api/mockdata`)
  return Promise.resolve([
        {
          "id": "1450518",
          "title": "PU: Vivamus vitae maximus nisl, sit amet congue magna - Id: 1450518",
          "communityName": "iPod",
          "communityPath": "iPod/Software"
        },
        {
          "id": "3008612",
          "title": "KW: Lorem ipsum dolor sit amet - Id: 3008612",
          "communityName": "iTunes",
          "communityPath": "iTunes/News"
        },
        {
          "id": "3437776",
          "title": "PM: Pellentesque imperdiet pretium tortor. - Id: 3437776",
          "communityName": "iCloud",
          "communityPath": "iCloud/Usability"
        },
        {
          "id": "4953467",
          "title": "2: Lorem ipsum dolor sit amet - Id: 4953467",
          "communityName": "iCloud",
          "communityPath": "iCloud/News"
        },
        {
          "id": "7229966",
          "title": "AP: Aenean lectus elit. - Id: 7229966",
          "communityName": "iCloud",
          "communityPath": "iCloud/Software"
        },
        {
          "id": "8621685",
          "title": "AB: Cras metus. Sed aliquet risus a tortor. - Id: 8621685",
          "communityName": "Apple TV",
          "communityPath": "Apple TV/News"
        }
      ]
  )
}
