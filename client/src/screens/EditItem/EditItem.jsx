import { useState, useEffect } from "react";
import { getItem, updateItem, deleteItem } from "../../Services/items";
import { useParams, Redirect, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./EditItem.css";
import Image from '../../components/Image/Image'

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
console.log(item)
  return (
    <div>
      <Layout user={props.user}>
        <div className="editItem">
          <form className="create-form-edit" onSubmit={handleSubmit}>
            <div className="top-line-edit">
              <div>
                <h4>Title</h4>
                <input
                  className="input-title-edit"
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
                <select value={item.category}
                  name="category"
                  onChange={handleChange}
                  className="input-category">
                  <option value="Category">Choose a Category</option>
                  <option className ="drop-down" value="Sports">Sports </option>
                  <option className ="drop-down"value="Outdoor">Outdoor </option>
                  <option value="Holiday">Holiday </option>
                  <option value="Furniture">Furniture </option>
                  <option value="Services">Services </option>
                  <option value="Tools">Tools</option>
        </select>
              </div>
              <div className="break"></div>
              <div>
                <h4>Price</h4>
                <input
                  className="input-price-edit"
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
                  className="input-location-edit"
                  placeholder="Location"
                  value={item.location}
                  name="location"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="secondLine-edit">
              {/* <h4>Image URL</h4>
              <input
                className="input-imgURL-edit"
                placeholder="Image URL"
                value={item.imgURL}
                name="imgURL"
                required
                onChange={handleChange}
              /> */}
              <Image item={item} setItem={setItem} prevImg={item.imgURL} />
            </div>
            <div className="thirdLine-edit">
              <h4>Description</h4>
              <textarea
                className="input-description-edit"
                placeholder="Description"
                value={item.description}
                name="description"
                required
                onChange={handleChange}
              />
            </div>
            <div className="buttons-edit">
              <button type="submit" className="submit-button-edit">
                Edit Item
              </button>
              <Link to="/items">
                <button
                  className={("submit-button-edit", "delete-button-edit")}
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
