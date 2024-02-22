export default {
  addItem({ commit }, item) {
    commit('addItem', item)
  },
  async createItem({ commit }, newItem) {
    const response = await fetch(process.env.baseAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
    const createdItem = await response.json()
    commit('addItem', createdItem)
  }
}
