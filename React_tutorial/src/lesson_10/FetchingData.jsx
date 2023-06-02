import React, {useState, useEffect} from 'react'

const FetchingData = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((response) => setPosts(response) )
    }, [])
  return (
    <div>
        {
            posts.map((post) => {
                return(
                    <h2>{post.title}</h2>
                )
            })
        }
    </div>
  )
}

export default FetchingData