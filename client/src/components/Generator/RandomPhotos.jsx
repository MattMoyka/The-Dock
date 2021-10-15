import { useState, useEffect } from 'react'
import { getItems } from '../../Services/items'
import { Link } from 'react-router-dom'

export default function RandomPhotos() {
    const [items, setItems] = useState([])
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [three, setThree] = useState("");
    const [four, setFour] = useState("")

    useEffect(() => {
        const fetchItems = async () => {
          const allItems = await getItems()
          setItems(allItems)
        }
        fetchItems()
      }, [])

      console.log(one)

    const RandomNumber = () => {
        
        // add side effect to component
        // useEffect(() => {
          // create interval
        //   const interval = setInterval(
            // set number every 5s
                let varOne = (Math.floor(Math.random() * items.length/3));
                let varTwo = (Math.floor(Math.random() * (items.length * 2 / 3 - items.length / 3) + (items.length / 3)));
                let varThree = (Math.floor(Math.random() * (items.length - items.length * 2 / 3) + (items.length * 2 / 3)));
                let varFour = (Math.random() * 2 / 2)


                setOne(varOne !== one ? varOne : varOne + 1);
                setTwo(varTwo !== two ? varTwo : varTwo + 1);
                setThree(varThree !== three ? varThree : varThree - 1);
                setFour(varFour);


          // clean up interval on unmount
        // }, []);
      
      };
      useEffect(()=> {  
          setTimeout(RandomNumber, 6000)
      }, [four]);

      console.log(one)
      console.log(two)

    return (
        <>
            <div className="Rendered"> 
                <div className="block">
                    <Link to={`/items/${items[one]?._id}`}>
                    <img src={items[one]?.imgURL} id="aniPic" />
                    </Link>
                </div>
                <div className="block">
                    <Link to={`/items/${items[two]?._id}`}>
                    <img src={items[two]?.imgURL} id="aniPic" />
                    </Link>
                </div>
                <div className="block">
                    <Link to={`/items/${items[three]?._id}`}>
                    <img src={items[three]?.imgURL} id="aniPic" />
                    </Link>
                </div>
            </div>
        </>
    )
}