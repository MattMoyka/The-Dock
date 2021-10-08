import Item from "../models/item.js";

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id).populate("userId");
    if (item) {
      return res.json(item);
    }
    res.status(404).json({ message: "Item not found!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateItem = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(item);
};

export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Item.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Item deleted");
    }
    throw new Error("Item not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
