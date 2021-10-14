import { useState } from 'react'

export default function Image(props) {
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState('')
  const { item, setItem } = props;


  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'thedockimages')

    setLoading(true)
    const res = await fetch('https://api.cloudinary.com/v1_1/dlon2ha1s/image/upload',
      {
        method: 'POST',
        body: data
      })

    const file = await res.json()
    const { name } = e.target
    setItem({
      ...item,
      [name]: file?.secure_url,
    })
    console.log(item)
    setLoading(false)

  }

  return (
    <div>
      <h3>Upload Image ...</h3>
      <input type='file' name='file' placeholder="Upload an image"
        onChange={uploadImage} value={item.imgUrl} name="imgURL" required />

      {
        loading ? (<h3>Loading...</h3>) : <img src={image} style={{ width: '300px' }} />
      }
    </div>
  )
}
