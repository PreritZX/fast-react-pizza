import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
      Remove Pizza
    </Button>
  );
}

export default DeleteItem;
