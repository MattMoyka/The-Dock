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
              <Link to={`/items/${item?._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="item-title">
                </div>
                <img src={item?.imgURL} className='listing-img' alt={item?.title} />
                <div className="img-desc">
                  <h2 className='title-text'>{item?.title}</h2>
                  {/* <p>"{item?.description}"</p> */}
                  <div id="loc-details">
                    <h3 id="hoverShow1" className="fas fa-map-marker-alt"> {item?.location} | $ {item?.price}</h3>
                    {/* <p id="hoverShow1"> $ {item?.price}</p> */}
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
