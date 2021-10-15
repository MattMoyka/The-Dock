import { useState, useEffect } from 'react'
import { getItems } from '../../Services/items'

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
                setOne(Math.floor(Math.random() * items.length/3));
                setTwo(Math.floor(Math.random() * (items.length * 2 / 3 - items.length / 3) + (items.length / 3)));
                setThree(Math.floor(Math.random() * (items.length - items.length * 2 / 3) + (items.length * 2 / 3)))
                setFour(Math.random())
          // clean up interval on unmount
        // }, []);
      
      };
      useEffect(()=> {  
          setTimeout(RandomNumber, 5000)
      }, [four]);

      console.log(one)
      console.log(two)

    return (
        <>
            <div className="Rendered"> 
                <div>
                    <img src={items[one]?.imgURL} />
                </div>
                <div>
                    <img src={items[two]?.imgURL} />
                </div>
                <div>
                    <img src={items[three]?.imgURL} />
                </div>
            </div>
        </>
    )
}