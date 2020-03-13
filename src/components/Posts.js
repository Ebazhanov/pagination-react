import React from "react";

const Posts = ({post, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return <ul className="list-group mb-4">
        {posts.map(post => (
            <li key={post.id} className="list-group-item"/>
        ))}
    </ul>
};

export default Posts
