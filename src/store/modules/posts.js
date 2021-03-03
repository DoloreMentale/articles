import { axios } from '../../boot/axios'

export default {
  actions: {
    getPosts: context => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(r => {
          if (!localStorage.getItem('posts')) {
            context.commit('setPosts', r.data)
            context.commit('saveHistoryChange')
          } else {
            context.commit('getPostsFromLocalStorage')
          }
        })
        .catch(e => console.log(e))
    },

    addPostToFavorites: (context, post) => {
      context.commit('addPostToFavorites', post)
      context.commit('saveHistoryChange', {
        type: 'added',
        post
      })
      context.commit('savePostsToLocalStorage')
    },

    removePostFromFavorites: (context, post) => {
      context.commit('removePostFromFavorites', post)
      context.commit('saveHistoryChange', {
        type: 'removed',
        post
      })
      context.commit('savePostsToLocalStorage')
    }
  },

  mutations: {
    setPosts: (state, posts) => {
      state.posts = posts
    },

    addPostToFavorites: (state, post) => {
      state.favoritePosts.push(post)
      state.posts.splice(state.posts.indexOf(post), 1)
    },

    removePostFromFavorites: (state, post) => {
      state.posts.push(post)
      state.favoritePosts.splice(state.favoritePosts.indexOf(post), 1)
    },

    saveHistoryChange: (state, {
      type,
      post
    }) => {
      const change = {
        type,
        post,
        timestamp: new Date().toLocaleString()
      }

      state.changesHistory.push(change)
    },

    reverseHistoryChangesArray: state => state.changesHistory.reverse(),

    savePostsToLocalStorage: state => {
      localStorage.setItem('posts', JSON.stringify(state.posts))
      localStorage.setItem('favoritePosts', JSON.stringify(state.favoritePosts))
      localStorage.setItem('changesHistory', JSON.stringify(state.changesHistory))
    },

    getPostsFromLocalStorage: state => {
      state.posts = JSON.parse(localStorage.getItem('posts'))
      state.favoritePosts = JSON.parse(localStorage.getItem('favoritePosts'))
      state.changesHistory = JSON.parse(localStorage.getItem('changesHistory'))
    }
  },

  state: {
    posts: [],
    favoritePosts: [],
    changesHistory: []
  },

  getters: {
    posts: state => state.posts,
    favoritePosts: state => state.favoritePosts,
    changesHistory: state => state.changesHistory
  }
}
