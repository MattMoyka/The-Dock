import Layout from "../../components/Layout/Layout";
import { createItem } from "../../Services/items";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import "./AddItem.css";

export default function AddItem(props) {
  const [item, setItem] = useState({
    title: "",
    category: "",
    price: "",
    imgURL: "",
    description: "",
    location: "",
  });
  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem({
      ...item,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createItem(item);
    setCreated({ created });
  };
  if (isCreated) {
    return <Redirect to={`/items`} />;
  }

  return (
    <div>
      <Layout user={props.user}>
        <div className="addItem">
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
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
}
