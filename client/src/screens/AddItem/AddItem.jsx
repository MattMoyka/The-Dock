import Layout from "../../components/Layout/Layout";
import { createItem } from "../../Services/items";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import "./AddItem.css";
import Image from '../../components/Image/Image'

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
    if (item.imgURL !== "")
    {
      const created = await createItem(item); ;
    setCreated({ created});
    } else {
      alert("Please upload picture")
     }
    
  };
  if (isCreated) {
    return <Redirect to={`/items`} />;
  }
// console.log(item)
  return (
    <div>
      <Layout user={props.user}>
        <div className="addItem">
          <form className="create-form" onSubmit={handleSubmit} >
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
                  placeholder="Zip Code"
                  value={item.location}
                  name="location"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="secondLine">
              {/* <input
                className="input-imgURL"
                placeholder="Image URL"
                value={item.imgURL}
                name="imgURL"
                required
                onChange={handleChange}
              /> */}
              <Image item={item} setItem={setItem} />
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
