import { useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearsCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      Cart
      <button
        className="border border-black bg-yellow-50 p-4 m-4"
        onClick={clearsCart}
      >
        Clear cart
      </button>
      <div className="w-6/12 m-auto">
        <Itemlist inf={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
