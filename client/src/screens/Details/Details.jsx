import Layout from "../../components/Layout/Layout";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getItem } from '../../Services/items'


export default function Details() {
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
    <div>
      <Layout>
        <div>
          <img src={item?.imgURL} alt={item?.title} />
          <div>
            <h1>{item?.title}</h1>
            <h2>{item?.location}</h2>
            <h2>{item?.description}</h2>
            <p>{item?.price}</p>
            <button onClick={() => alert('congrats on the purchase')}>Rent Now</button>
          </div>
        </div>
      </Layout>
    </div>
  )
}
