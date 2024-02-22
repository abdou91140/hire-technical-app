<template>
    <div>
        <h2 class="text-center">Test technique Tipeee</h2>
        <section class="pt-36 grid grid-cols-1 justify-center justify-items-center">
            <AddItem />
            <List />
        </section>
    </div>
</template>

<script>
import AddItem from '@/components/list/addItem'
import List from '@/components/list/list'

export default {
    layout: 'DefaultLayout', components: { AddItem, List }
}
</script>

<style scoped>
h2 {
    background-image: linear-gradient(90deg, #86b3e4, #6f8fe7);
    color: white;
    padding: 80px;
}
</style>