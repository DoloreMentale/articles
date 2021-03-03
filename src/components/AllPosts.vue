<template>
  <div class="row">
    <div class="col-12 col-sm-6">

      <q-input
        v-model="search"
        filled
        clearable
        type="search"
        label="Search posts by title"
        class="q-ma-md">
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-input>

      <q-list
        class="list q-ma-md"
        separator
      >
        <q-item-label header>All posts</q-item-label>

        <q-item
          v-ripple
          v-for="(post, index) in posts.filter(item => filterPostsList(item.title, search))"
          :key="index"
        >
          <q-item-section>
            <q-item-label>
              #{{ post.id }}. {{ post.title }}
            </q-item-label>
            <q-item-label caption>
              {{ post.body }}
            </q-item-label>
            <q-item-label overline>
              User ID: {{ post.userId }}
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn
              @click.prevent="addPostToFavorites(post)"
              round
              size="sm"
              class="q-ma-sm"
              icon="add"
              color="positive"
            >
              <q-tooltip>Add to favorites</q-tooltip>
            </q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="col-12 col-sm-6">
      <q-list
        separator
        class="list-favorite q-ma-md"
      >
        <q-item-label header>Favorite posts</q-item-label>

        <q-item
          v-ripple
          v-for="(post, index) in favoritePosts"
          :key="index"
        >
          <q-item-section>
            <q-item-label>
              #{{ post.id }}. {{ post.title }}
            </q-item-label>
            <q-item-label caption>
              {{ post.body }}
            </q-item-label>
            <q-item-label overline>
              User ID: {{ post.userId }}
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn
              @click.prevent="removePostFromFavorites(post)"
              round
              size="sm"
              class="q-ma-sm"
              icon="delete"
              color="negative"
            >
              <q-tooltip>Add to favorites</q-tooltip>
            </q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AllPosts',
  data: () => ({
    search: '',
    current: 3
  }),
  methods: {
    ...mapActions(['getPosts', 'addPostToFavorites', 'removePostFromFavorites']),
    filterPostsList: (title, search) => {
      if (!search) {
        return true
      } else {
        return title.toLowerCase().indexOf(search.toLowerCase()) !== -1
      }
    }
  },
  computed: {
    ...mapGetters(['posts', 'favoritePosts'])
  },
  mounted () {
    this.getPosts()
  }
}
</script>

<style scoped>
.list {
  max-height: 70vh;
  overflow: auto;
}

.list-favorite {
  max-height: 80vh;
  overflow: auto;
}
</style>
