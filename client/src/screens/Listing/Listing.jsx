import { useState, useEffect } from 'react'
import { getItems } from '../../Services/items'
import Layout from '../../components/Layout/Layout'
import Search from '../../components/Search/Search'
import Sort from '../../components/Sort/Sort'
import { Link } from 'react-router-dom'
import './Listing.css'
import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort'


export default function Listing(props) {

  const [items, setItems] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('name-ascending')

  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getItems()
      setItems(allItems)
      setSearchResult(allItems)
    }
    fetchItems()
  }, [])

  const handleSort = (type) => {
    if (type !== '' && type !== undefined) {
      setSortType(type)
    }
    switch (type) {
      case 'name-ascending':
        setSearchResult(AZ(searchResult))
        break
      case 'name-descending':
        setSearchResult(ZA(searchResult))
        break
      case 'price-ascending':
        setSearchResult(lowestFirst(searchResult))
        break
      case 'price-descending':
        setSearchResult(highestFirst(searchResult))
        break
      default:
        break
    }
  }

  if (applySort) {
    handleSort(sortType)
    setApplySort(false)
  }

  const handleSearch = (event) => {
    const results = items.filter((item) =>
      item.title.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setSearchResult(results)
    setApplySort(true)

  }
  const handleSubmit = (event) => event.preventDefault()

  return (
    <Layout user={props.user}>
      <Search  onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div className="listing-title">
      <h1 className='page-title'>Rent An Item</h1>
      <div className="listings">
        {searchResult.map(item => {
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
