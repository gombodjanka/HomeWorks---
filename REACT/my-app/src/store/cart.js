import { create } from 'zustand'

export const useCart = create((set) => ({
  cart: [],
  addItem: (item) => set((state) => ({ cart:[ ...state.cart, item ]})),
  removeItem: (itemName) => set((state) => {
    const index = state.cart.findIndex(item => item.name === itemName);
    if (index !== -1) {
      const newCart = [...state.cart];
      newCart.splice(index,1);
      return {
        cart: newCart}
    };
    return state;
  }),
}))