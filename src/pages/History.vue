<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-12 col-sm-6">
        <q-list separator>
          <q-item-label header>
            All changes
          </q-item-label>

          <q-item
            v-for="(change, index) in changesHistory"
            :key="index"
            v-ripple
          >
            <q-item-section>
              <q-item-label
                :class="{'text-positive': change.type === 'added', 'text-negative': change.type === 'removed'}">
                <q-icon
                  :name="change.type === 'added' ? 'add' : 'remove'"/>
                This post have been {{ change.type }} at {{ change.timestamp }}
              </q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                #{{ change.post.id }}. {{ change.post.title }}
              </q-item-label>
              <q-item-label caption>
                {{ change.post.body }}
              </q-item-label>
              <q-item-label overline>
                User ID: {{ change.post.userId }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'History',
  methods: {
    ...mapMutations(['reverseHistoryChangesArray', 'getPostsFromLocalStorage'])
  },
  computed: {
    ...mapGetters(['changesHistory'])
  },
  mounted () {
    this.reverseHistoryChangesArray()
    this.getPostsFromLocalStorage()
  }
}
</script>

<style scoped>

</style>
