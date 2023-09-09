import './posts.css';
export default function Comment({ comment }) {
    const {name, email, body} = comment
    return (
        <div className='posts'>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Comment: {body}</p>
        </div>
    )
}