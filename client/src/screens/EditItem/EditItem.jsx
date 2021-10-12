import { useState, useEffect } from "react";
import { getItem, updateItem, deleteItem } from "../../Services/items";
import { useParams, Redirect, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./EditItem.css";

export default function EditItem(props) {
  const [item, setItem] = useState({
    title: "",
    category: "",
    price: "",
    imgURL: "",
    description: "",
    location: "",
  });
  const [isUpdated, setUpdated] = useState(false);

  let { id } = useParams();
  useEffect(() => {
    const fetchItem = async () => {
      const item = await getItem(id);
      setItem(item);
    };
    fetchItem();
  }, [id]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem({
      ...item,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateItem(id, item);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/items/${id}`} />;
  }

  return (
    <div>
      <Layout user={props.user}>
        <div className="editItem">
          <form className="create-form" onSubmit={handleSubmit}>
            <div className="top-line">
              <div>
                <h4>Title</h4>
                <input
                  className="input-title"
                  placeholder="Title"
                  value={item.title}
                  name="title"
                  required
                  autoFocus
                  onChange={handleChange}
                />
              </div>
              <div>
                <h4>Category</h4>
                <input
                  className="input-category"
                  placeholder="Category"
                  value={item.category}
                  name="category"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <h4>Price</h4>
                <input
                  className="input-price"
                  placeholder="Price"
                  value={item.price}
                  name="price"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <h4>Location</h4>
                <input
                  className="input-location"
                  placeholder="Location"
                  value={item.location}
                  name="location"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="secondLine">
              <h4>Image URL</h4>
              <input
                className="input-imgURL"
                placeholder="Image URL"
                value={item.imgURL}
                name="imgURL"
                required
                onChange={handleChange}
              />
            </div>
            <div className="thirdLine">
              <h4>Description</h4>
              <textarea
                className="input-description"
                placeholder="Description"
                value={item.description}
                name="description"
                required
                onChange={handleChange}
              />
            </div>
            <div className="buttons">
              <button type="submit" className="submit-button">
                Edit Item
              </button>
              <Link to="/items">
                <button
                  className="submit-button"
                  className="delete-button"
                  onClick={() => deleteItem(item?._id)}
                >
                  Delete Item
                </button>
              </Link>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
}
