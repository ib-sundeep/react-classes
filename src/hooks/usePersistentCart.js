import { useEffect } from "react";
import { useSelector } from "react-redux";

export function usePersistentCart() {
  const items = useSelector(state => state.cart.items);

  useEffect(() => {
    localStorage.setItem(
      'cart_state',
      JSON.stringify(items)
    );
  }, [items]);
}
