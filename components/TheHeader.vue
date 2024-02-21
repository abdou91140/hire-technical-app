<template>
    <div>
        <header class="sticky-header">
            <div class="text-bold text-bigger text-right">
                <h3>{{ items.length }} pages</h3>
            </div>
        </header>
    </div>
</template>
  
<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('item', ['items']),
    }
};
</script>
  
<style >
.sticky-header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 15px;
}
</style>
  