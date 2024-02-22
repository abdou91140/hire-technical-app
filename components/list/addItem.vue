<template>
    <form @submit.prevent="handleSubmit">
        <div class="my-36 text-center grid  grid-cols-1 gap-16">
            <h3>Ajouter une page</h3>
            <div>
                <label>Nom :</label>
                <input c id="name" v-model="fields.name" type="text" required />
            </div>
            <div>
                <label>Slug :</label>
                <input id="slug" v-model="fields.slug" type="text" required />
            </div>
            <div>
                <button class="btn" type="submit">Ajouter</button>
            </div>
        </div>
    </form>
</template>


<script>
export default {
    data() {
        return {
            fields: {
                name: null,
                slug: null
            }
        }
    },
    methods: {
      async  handleSubmit() {
            await this.$store.dispatch('item/createItem', { ...this.fields })
            this.fields.name = null
            this.fields.slug = null
        }
    }
}
</script>
  

<style scoped>
input:not([type="radio"]):not([type="checkbox"]) {
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    box-shadow: 1px 1px 0 0 #e8e8e8;
    color: #535657;
    font-size: 1rem;
    font-weight: 400;
    padding: 0.5rem;
    margin: auto;
    transition: all .1s ease;
}

input:not([type="radio"]):not([type="checkbox"]):focus {
    border-color: #4dc4d6;
    box-shadow: inset 0 0 0 3px #b6e5ec;
    outline: 0;
}

.btn {
    background-color: #16ba16;
    color: white;
    border-radius: 2px;
    font-size: 1.2rem;
    border-radius: 4px;
    padding: 6px;

}

form {
    background-color: #fff;
    box-shadow: 0 0 51px rgba(0, 0, 0, .1);
    border-radius: 10px;
    margin-bottom: 30px;
    text-align: center;
    width: 100%;
    max-width: 300px;
}
</style>