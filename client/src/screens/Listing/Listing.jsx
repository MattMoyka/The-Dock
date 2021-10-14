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
      <div className="listing-title">
      <h1 className='page-title'>Select An Item</h1>
      <div className="listings">
        {items.map(item => {
          return (
            <div key={item?.title} className="itemCards">
              <Link to={`/items/${item?._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <img src={item?.imgURL} className='listing-img' alt={item?.title} />
                <div className="img-desc">
                  <h2 className='title-text'>{item?.title}</h2>
                  <div className='info-pos'>
                    <h3 className="fas fa-map-marker-alt desc-font"> {item?.location}</h3>
                    <h3 className='desc-font'> $ {item?.price}/hr</h3>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
        </div>
    </Layout>
  )
}
