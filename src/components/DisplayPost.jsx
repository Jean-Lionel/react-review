import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DisplayPost() {
    const [posts, setposts] = useState([])
    const [check, setCheckd] = useState(1)


    useEffect(() => {
        postsApi();
        console.log("Called displayPost");
    }, [check]);
    const postsApi = async () => {
        const responses = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setposts(responses.data);
    }

  return (
      <div>
          <h1>Posts</h1>
          <button
          onClick={() => setCheckd(check + 1)}
          >HINDURA </button>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
    </div>
  )
}

export default DisplayPost