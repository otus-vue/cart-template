const state = {
  items: [
    {
      id: 1,
      title: "Item #1",
      price: 14.56
    },
    {
      id: 2,
      title: "Item #2",
      price: 87
    }
  ]
};

const getters = {
  item: state => itemId => {
    const item = state.items.find(item => item.id === itemId);
    return item;
  }
};

export default {
  namespaced: true,
  state,
  getters
};
