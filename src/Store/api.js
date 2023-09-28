const API_URL =
  "https://crudcrud.com/api/b20f44dcf204444c9cea74a903ad4093/userId";

const addToCartAPI = async (userUniqueId, cartData) => {
  console.log(userUniqueId, cartData);
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userUniqueId, items: cartData }),
    });

    if (!response.ok) {
      throw new Error("Failed to add items to the cart.");
    }
  } catch (error) {
    alert(error);
    throw error;
  }
};
export const getCartAPI = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      throw new Error("Failed to retrieve cart items.");
    }

    const cartData = await response.json();
    const allItems = cartData.reduce((items, cartEntry) => {
      return items.concat(cartEntry.items || []);
    }, []);

    return allItems;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default addToCartAPI;
