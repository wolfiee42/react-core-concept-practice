import './posts.css';
export default function Post({post}){
    const {name, email, website} = post
    return (
        <div className='posts'>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
        </div>
    )
}