import { useState, useEffect } from 'react'
import { getItems } from '../../Services/items'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
import './Listing.css'


export default function Listing(props) {

  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getItems()
      setItems(allItems)
    }
    fetchItems()
  }, [])

  return (
    <Layout user={props.user}>
      <h1>Items</h1>
      <div className="listings">
        {items.map(item => {
          return (
            <div key={item?.title} className="itemCards">
              <Link to={`/items/${item?._id}`} style={{ textDecoration: 'none', color:'black' }}>
              <div className="item-title">
              <h1>{item?.title}</h1>
              </div>
              <img src={item?.imgURL} alt={item?.title} />
              <div className="img-desc">
              <p>"{item?.description}"</p>
              <div id="loc-details">
                <p id="hoverShow1" className="fas fa-map-marker-alt"> {item?.location}</p>
                <p id="hoverShow1"> $ {item?.price}</p>
              </div>
              </div>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
