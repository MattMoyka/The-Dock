import Layout from "../../components/Layout/Layout";
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getItem } from '../../Services/items'
import './Details.css'


export default function Details(props) {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getItem(id)
      setItem(item)
    }
    fetchItem()
  }, [id])

  return (
    <div >
      <Layout user={props.user}>
      </Layout>
      <div className="detailsparent-div">
        <div className="info-div">
        <div className="top-detail">
        <p id="location-detail" className="fas fa-map-marker-alt">{item?.location}</p>
        </div>
          <h1 className="h1-details">{item?.title}</h1>
         <p className="price-detail"> ${item?.price}/HR</p>
          <div className="description-div">
          <p className="description-tag">Item Description </p>
            <p className="desc-details">{item?.description}</p>
          </div>
   <div className="the-buttons">
          <button className="rent-button" onClick={() => alert('congrats on the purchase')}>RENT NOW</button>
          <Link  className="far fa-edit fa-2x" to={`/edit/${item?._id}`}></Link>
     </div>
        </div>
        <div className="details-image">
          <img className="image-detail" src={item?.imgURL} alt={item?.title} />
      </div>
      </div>
      </div>
   
  )
}
