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
      <div className="listings">
        {items.map(item => {
          return (
            <div key={item?.title} className="itemCards">
              <div className="item-title">
              <h1>{item?.title}</h1>
              </div>
              <img src={item?.imgURL} alt={item?.title} />
              <div className="img-desc">
              <h2>{item?.description}</h2>
              </div>
              <div className="hidden-location">
                <p id="hoverShow1">Zip-Code: {item?.location}</p>
                <p id="hoverShow1"> $ {item?.price}</p>
              </div>
              <Link to={`/items/${item?._id}`}>Details</Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
