import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// Add Item
const addItem = async (itemData) => {
  const response = await axios.post(`${BACKEND_URL}/api/items/add`, itemData);
  return response.data;
};

// Get All Items
const getItems = async () => {
  const response = await axios.get(`${BACKEND_URL}/api/items`);
  return response.data;
};

// Delete Items
const deleteItem = async (id) => {
  const response = await axios.delete(`${BACKEND_URL}/api/items/${id}`);
  return response.data;
};

// Update Item
const updateItem = async (itemData) => {
  const response = await axios.patch(
    `${BACKEND_URL}/api/items/update`,
    itemData
  );
  return response.data;
};

const itemService = {
  addItem,
  getItems,
  deleteItem,
  updateItem,
};

export default itemService;
