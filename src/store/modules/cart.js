const state = {
  items: []
};

const getters = {
  itemCount: state => itemId => {
    const item = state.items.find(item => item.id === itemId);
    return item ? item.count : 0;
  },
  totalSum(state, getter, rootState, rootGetters) {
    console.log(
      state.items.map(item => rootGetters["catalog/item"](item.id).price)
    );
    return state.items.length === 0
      ? 0
      : state.items
          .map(item => rootGetters["catalog/item"](item.id).price * item.count)
          .reduce((arg, price) => arg + price);
  }
};

const mutations = {
  addItem(state, { itemId, count }) {
    const item = state.items.find(item => item.id === itemId);

    if (item) item.count += count;
    else state.items.push({ id: itemId, count });
  },
  updateCount(state, { itemId, count }) {
    const item = state.items.find(item => item.id === itemId);

    if (item)
      if (count === 0)
        state.items = state.items.filter(item => item.id !== itemId);
      else item.count = count;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
