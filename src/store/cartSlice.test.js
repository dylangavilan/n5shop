import cartReducer, {
    addToCart,
    handleOpen,
    addMore,
    lessOne,
    removeFromCart,
    clear,
  } from './cartSlice';
  
  describe('cartSlice', () => {
    const initialState = {
      items: [],
      isOpen: false,
    };
  
    it('add to Cart with the same id', () => {
      const newItem = { id: 1, name: 'Leche', amount: 5 };
      let actual = cartReducer(initialState, addToCart(newItem));
      expect(actual.items).toHaveLength(1);
      expect(actual.items[0]).toEqual({ ...newItem, quantity: 1 });
      actual = cartReducer(actual, addToCart(newItem));
      expect(actual.items).toHaveLength(1);
    });
    
    
  
    it('handleOpen', () => {
      const actual = cartReducer(initialState, handleOpen());
      expect(actual.isOpen).toEqual(true);
    });
  
    it('addOne', () => {
      const startState = {
        items: [{ id: 1, name: 'Leche', amount: 5, quantity: 1 }],
        isOpen: false,
      };
      const actual = cartReducer(startState, addMore(1));
      expect(actual.items[0].quantity).toEqual(2);
    });
    it('addOne', () => {
      const startState = {
        items: [{ id: 1, name: 'Leche', amount: 5, quantity: 1 }],
        isOpen: false,
      };
      const actual = cartReducer(startState, addMore(1));
      expect(actual.items[0].quantity).toEqual(2);
    });
  
    it('lessOne quantity', () => {
      const startState = {
        items: [{ id: 1, name: 'Leche', amount: 5, quantity: 2 }],
        isOpen: false,
      };
      const actual = cartReducer(startState, lessOne(1));
      expect(actual.items[0].quantity).toEqual(1);
    });
    it('lessOne when quantity is 0', () => {
      const startState = {
        items: [{ id: 1, name: 'Leche', amount: 5, quantity: 0 }],
        isOpen: false,
      };
      const actual = cartReducer(startState, lessOne(1));
      expect(actual.items[0].quantity).toEqual(0);
    });
  
    it('remobeById', () => {
      const startState = {
        items: [{ id: 1, name: 'Leche', amount: 5, quantity: 1 }, { id: 2, name: 'Arroz', amount: 5, quantity: 1 }],
        isOpen: false,
      };
      const actual = cartReducer(startState, removeFromCart(1));
      expect(actual.items).toHaveLength(1);
    });
  
    it('clear cart', () => {
      const startState = {
        items: [{ id: 1, name: 'Leche', amount: 5, quantity: 1 }],
        isOpen: false,
      };
      const actual = cartReducer(startState, clear());
      expect(actual.items).toHaveLength(0);
    });
  });
  