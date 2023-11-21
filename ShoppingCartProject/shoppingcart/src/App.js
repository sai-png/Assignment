// src/ShoppingCart.js
import React, { useReducer } from 'react';
import './index.css'; // Import the CSS file

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case 'REMOVE_ITEM':
      const updatedCart = state.cart.filter(item => item.id !== action.payload.id);
      return { ...state, cart: updatedCart };

    default:
      return state;
  }
};

const items = [
  { id: 1, name: 'Choclate', price: 45 },
  { id: 2, name: 'Biscuits', price: 10 },
  { id: 3, name: 'Banana', price: 15 },
  { id: 4, name: 'Apple', price: 35 },
  { id: 5, name: 'Namkeen', price: 10 },
  { id: 6, name: 'Papaya', price: 40 },
];

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCart = item => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItemFromCart = item => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  return (
    <div className="container">
      <h1 className="animated-heading">🛒 Shopping Cart</h1>

      <div className="items-container">
        {items.map(item => (
          <div key={item.id} className="item-box">
            <div className="item-info">
              <p>{item.name}</p>
              <p>${item.price}</p>
              <button className="add-to-cart" onClick={() => addItemToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="shopping-cart">
        <h2>Your Cart</h2>
        <ul>
          {state.cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} - Quantity: {item.quantity}{' '}
              <button className="remove-from-cart" onClick={() => removeItemFromCart(item)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCart;
