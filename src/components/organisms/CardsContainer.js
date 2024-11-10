import Card from "../molecules/Card";
import { shoppingInitialState } from "@/reducer/shoppingInitialState";
import styles from "@/styles/CardsContainer.module.css";

const CardContainer = ({addToCart}) => {
const productos = shoppingInitialState.products;

    return (
    <>
    <div className={styles.container}>
        <div>
            <div className={styles.card}>
             {
              productos.map(producto => <Card key={producto.id} producto={producto} addToCart={addToCart}/>)
             }
            </div>
        </div>    
    </div> 
    </>
    )
}
export default CardContainer;