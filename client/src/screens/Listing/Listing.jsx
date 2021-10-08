import { useState, useEffect } from 'react'
import { getItems } from '../../services/items'
import Layout from '../../components/Layout/Layout'


export default function Listing() {

  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getItems()
      setItems(allItems)
    }
    fetchItems()
  }, [])

  return (
    <Layout>
      <div>
        {items.map(item => {
          return (
            <div key={item?.title}>
              <h1>{item?.title}</h1>
              <img src={item?.imgURL} alt={item?.title} />
              <h2>{item?.description}</h2>
              <div>
                <p>{item?.location}</p>
                <p>{item?.price}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
