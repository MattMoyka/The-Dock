import Layout from "../../components/Layout/Layout";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItem } from "../../Services/items";
import "./Details.css";

export default function Details(props) {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getItem(id);
      setItem(item);
    };
    fetchItem();
  }, [id]);
  console.log(item)

  return (
    <div>
      <Layout user={props.user}>
        <div className="detailsparent-div">
          <div className="info-div">
            <h1 className="h1-details">{item?.title}</h1>
            <div className="top-detail">
              <p id="location-detail" className="fas fa-map-marker-alt">
                {item?.location}
              </p>
            </div>
            <p className="price-detail"> ${item?.price}/DAY</p>
            <div className="description-div">
              <p className="description-tag">Item Description </p>
              <p className="desc-details">{item?.description}</p>
            </div>
            <div className="user-profile">
              <div className="profile-name">
                <div className="owner"> Owner
                </div>
                <p className="far fa-user fa-2x"> </p>
                <p className="user-name">{item?.userId?.username} </p>
                <button className="fas fa-phone-alt fa-2x"
                  onClick={() => alert(`Call me: ${item.userId?.phone}`)}> </button>
                <button className="far fa-comment-dots fa-2x"
                  onClick={() => {
                    window.location.href = `mailto:${item.userId?.email}`; 
                  }}></button>
              </div>
            </div>
            <div className="the-buttons">
              <button
                className="rent-button"

                onClick={() => alert(`Thank you for renting with us!`)}>RENT NOW</button>
              <Link
                className="far fa-edit fa-2x edit-font"
                to={`/edit/${item?._id}`}> {" "}Edit
              </Link>
            </div>
          </div>
          <div className="details-image">
            <img
              className="image-detail"
              src={item?.imgURL}
              alt={item?.title}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
