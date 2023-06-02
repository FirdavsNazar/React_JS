import React, {useState, useEffect} from 'react'

const FetchingData = () => {

    const [posts, setPosts] = useState([]);
    const [ id, setId] = useState(1)

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((response) => setPosts(response) )
    }, [id])
  return (
    <div>
        <input type="text" value={id} onChange={(e)=> setId(e.target.value)} />
        <h5>{posts.title}</h5>
    </div>
  )
}

export default FetchingData