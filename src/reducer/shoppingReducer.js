import { TYPES } from "../actions/actions";

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.READ_STATE: {
            return {
                ...state,
                products: action.payload.products,
                cart: action.payload.cart,
            };
        }

        case TYPES.ADD_TO_CART: {
            // Encuentra el producto en la lista de productos
            const newItem = state.products.find(product => product.id === action.payload);

            if (!newItem) return state; // Verificación adicional en caso de ID incorrecto

            const itemInCart = state.cart.find(item => item.id === newItem.id);

            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === newItem.id
                            ? {
                                ...item,
                                quantity: item.quantity + 1,
                            }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }],
                };
        }

        case TYPES.REMOVE_ONE_PRODUCT: {
            const itemToDelete = state.cart.find(item => item.id === action.payload);

            if (!itemToDelete) return state; // Verificación adicional

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === itemToDelete.id
                            ? {
                                ...item,
                                quantity: item.quantity - 1,
                            }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: state.cart.filter(item => item.id !== itemToDelete.id),
                };
        }

        case TYPES.REMOVE_ALL_PRODUCTS: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        }

        case TYPES.CLEAR_CART: {
            return {
                ...state,
                cart: [],
            };
        }

        default:
            return state;
    }
}
