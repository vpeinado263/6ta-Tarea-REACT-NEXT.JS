import styles from "@/styles/CardItem.module.css";

const CartItem = ({ item, deleteFromCart }) => {
    const { id, price, quantity, img, title } = item;

    return (
        <>
        <div className={styles.container}>
             <div className={styles.carditem}>
            <h4 className={styles.carditemname}>{title}</h4>
            <h5 className={styles.carditemprice}>$ {price} x {quantity} = ${price * quantity}</h5>
            <img className={styles.img} src={img} alt={title}/>
            <div className={styles.carditembuttons}>
                <button onClick={() => deleteFromCart(id)} className={styles.carditembutton}>Eliminar uno</button>
                <button onClick={() => deleteFromCart(id, true)} className={styles.carditembutton}>Eliminar todos</button>
            </div>
            </div>
        </div>
       </>
    );
};

export default CartItem;
