import { useState } from 'react'
import './Image.css'

export default function Image(props) {
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState('')
  const { item, setItem, prevImg } = props;


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
    setImage(file.secure_url)
    setItem({
      ...item,
      [name]: file?.secure_url,
    })
    console.log(item)
    setLoading(false)

  }
  console.log(prevImg)
  return (
    <div className='image-upload'>
      <h4>Upload Image</h4>
      <input className='input-image' type='file' name='file' placeholder="Upload an image"
        onChange={uploadImage} value={item.imgUrl} name="imgURL"  />
      <div className='image-section'>
        {loading ? <h3>Loading.......</h3> : null}
        {prevImg === undefined ? <img className='image-act' src={image}   /> : <img className='image-act' src={prevImg} />}
      </div>
    </div>
  )
}
