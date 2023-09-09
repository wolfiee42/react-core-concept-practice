import { useEffect, useState } from "react"
import Comment from "./Comment"

export default function Comments() {
    const [comments, setComments] = useState([])
    useEffect(() => {
        CommenntsInfo()
    }, [])
    const CommenntsInfo = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json();
        setComments(data);
    }

    return (
        <div>
            <h4>Comments: {comments.length}</h4>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    )
}