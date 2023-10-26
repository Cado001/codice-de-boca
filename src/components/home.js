import { useState } from "react"


function SingleMenuComponent(props){
    console.log('props ->' , props)
    return(
    <h3>Hi I'm single component</h3>
    )
}


export default function Home (){
const [menuItems,  setMenuItems]= useState ('hotdog','burger')


  // 1. fetch data 
 //  2. get array of object

 //  3. render each object
//   3.1 creates a state variable
//   3.2 put inside state variable the array of objects
//   3.3 display eachitem in dom 
//   3.4 Map over the array of objects
//   3.5 return each  item so that it displays on the browser
 console.log('menuItems ->', menuItems)
    
const handleButtonClick = () => {
    console.log('hey class from a function')
    
    fetch('https://codice-boca.web.app/menu')
    .then(res => (res.json()))   // contacing the API
    .then(data =>setMenuItems(data)) // Get clean data 
    .catch(x => console.err(x))
       

    
}

    return(
        <>
        <h2>I'm Home component</h2>
        <button onClick={() => {handleButtonClick('hey class😎')}}>Get Data</button>
        {menuItems && 
        menuItems.map(singleItem => {
            console.log('singleItem ->', singleItem)

            // singleItem.price = 16.99

            return (
            <div>
            <SingleMenuComponent title={singleItem.title} />
            <h2>{singleItem.title}</h2>
            <p>{singleItem.description}</p>
            </div>
            )
        })}
        </>
    )
}