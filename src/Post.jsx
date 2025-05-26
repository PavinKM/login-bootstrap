import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Post(){

    const [post, setPost] = useState(null)
    const {id} = useParams()

        useEffect(()=>{
                 fetch('http://localhost:3000/posts/'+id)  

            .then(response =>{
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setPost(data)
            })
            .catch(err => {  //error handling
                console.log(err)
            })
        },[])

    return(
        <div>
            {post && <div>
                Post : {id}
                <h2>{post.title}</h2>
                <h2>{post.content}</h2>
            </div>
            }
        </div>
    )
}

export default Post