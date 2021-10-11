import { useState, useEffect } from "react"
import { getItem, updateItem } from "../../Services/items"
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'


export default function EditItem(props) {
  const [item, setItem] = useState({
    title: '', category: '', price: '', imgURL: '', description: '', location: ''
  })
  const [isUpdated, setUpdated] = useState(false)

  let { id } = useParams()
  useEffect(() => {
    const fetchItem = async () => {
      const item = await getItem(id)
      setItem(item)
    }
    fetchItem()
  }, [id])
  const handleChange = (event) => {
    const { name, value } = event.target
    setItem({
      ...item,
      [name]: value,
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateItem(id, item)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/items/${id}`} />
  }

  return (
    <div>
      <Layout user={props.user}>
        <form className='create-form' onSubmit={handleSubmit}>
          <input
            className='input-name'
            placeholder='Title'
            value={item.title}
            name='title'
            required
            autoFocus
            onChange={handleChange}
          />

          <input
            className='input-category'
            placeholder='Category'
            value={item.category}
            name='category'
            required
            onChange={handleChange}
          />
          <input
            className='input-price'
            placeholder='Price'
            value={item.price}
            name='price'
            required
            onChange={handleChange}
          />
          <input
            className='input-location'
            placeholder='Location'
            value={item.location}
            name='location'
            required
            onChange={handleChange}
          />
          <input
            className='input-imgURL'
            placeholder='Image URL'
            value={item.imgURL}
            name='imgURL'
            required
            onChange={handleChange}
          />
          <textarea
            className='input-description'
            placeholder='Description'
            value={item.description}
            name='description'
            required
            onChange={handleChange}
          />
          <button type='submit' className='edit-button'>
            Edit
          </button>
        </form>
      </Layout>
    </div>
  )
}
