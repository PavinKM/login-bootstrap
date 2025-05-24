import { useState,useEffect } from "react";
import { Link } from "react-router-dom"

function Home(){

    const [posts, setPosts] = useState(null);

    useEffect(() => {

        const controller = new AbortController() //clean-Up function
        const signal = controller.signal  //clean-Up function

        fetch('http://localhost:3000/posts' ,{signal})  //http://localhost:3000/posts  //clean-Up function

        .then(response =>{
            return response.json()
        })
        .then((data) => {
            console.log(data)
            setPosts(data)
        })
        .catch(err => {  //error handling
            console.log(err)
        })

        //clean-Up function
        return () => {
            console.log("Unmounted, Cleaning up")
            controller.abort()
        }

    },[])  //[] -> dependencies list

    return(
            <div className="container">
                <Link to="/login">Login</Link>
            <div className="row justify-content-center m-3">
                {posts && posts.map(post => {
                    return (
                        <div key={post.id} className="card m-3" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.content}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            </div>
    );
}

export default Home