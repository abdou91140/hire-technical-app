<template>
    <div>
        <h3>Liste de pages</h3>
        <div class="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
            <Item v-for="item in items" :key="item.slug" :item="item" />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Item from '@/components/list/item'

export default {
  components: { Item },
  computed: {
    ...mapState('item', ['items'])
  }
}
</script>