import Layout from '../../components/Layout/Layout'
import { createItem } from "../../Services/items"
import { useState } from "react"
import {Redirect} from 'react-router-dom'

export default function AddItem() {
  const [item, setItem] = useState({
    title: '', category: '', price: '', imgURL:'', description:'', location:''
  })
  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setItem({
      ...item,
      [name]: value,
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createItem(item)
    setCreated({ created })
  }
  if (isCreated) {
    return <Redirect to={`/items`} />
  }

  return (
    <div>
      <Layout />
      <form className='create-form'onSubmit={handleSubmit}>
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
      <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </div>
  )
}
