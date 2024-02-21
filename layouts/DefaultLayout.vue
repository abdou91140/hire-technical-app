<template>
    <div>
        <Header :items="items"/>
        <Nuxt />
    </div>
</template>
<script >
import Header from '@/components/TheHeader.vue'

export default {
  props: ['items'],
  components: { Header },

}
</script>