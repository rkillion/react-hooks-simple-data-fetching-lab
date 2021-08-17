import { useEffect, useState } from "react"
// create your App component here
export default function App(){
    const [imageURL,setImageURL] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random").then(r=>r.json()).then(data=>{setImageURL(data.message)});
    }, [])

    if (!imageURL) {
        return <p>Loading...</p>
    } else {
        return <img 
        src={imageURL}
        alt="A Random Dog"
        />
    }
}