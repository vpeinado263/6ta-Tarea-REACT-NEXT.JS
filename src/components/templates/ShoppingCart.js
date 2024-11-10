import { useReducer } from "react";
import { TYPES } from "../../actions/actions";
import { shoppingReducer } from "../../reducer/shoppingReducer";
import { shoppingInitialState } from "../../reducer/shoppingInitialState";
import CardContainer from "../organisms/CardsContainer";
import CartItem from "../molecules/CardItem";
import styles from "@/styles/ShoppingCart.module.css";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  // Destructurar
  const { cart } = state;

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <>
    <div className={styles.container}>
    <div className={styles.shoppingContainer}>
      <h2 className={styles.shoppingTitle}>Carrito de Compras</h2>
      <h3 className={styles.productsTitle}>Productos</h3>

      <div className={styles.gridResponsive}>
        <CardContainer addToCart={addToCart} />
      </div>

      <h3 className={styles.shoppingTitle}>Carrito</h3>

      <div className={styles.box}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem key={item.id} item={item} deleteFromCart={deleteFromCart} />
        ))
        ) : (
          <p className={styles.mensaje}>carrito vacío</p>
       )}
      </div>

      <button className={styles.clearButton} onClick={clearCart}>Limpiar carrito</button>
    </div>
    </div>
    </>
  );
};

export default ShoppingCart;

