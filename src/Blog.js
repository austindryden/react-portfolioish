import React from 'react';
import { Link, useParams, useRouteMatch } from "react-router-dom";
const blogPosts = [
    "Not a post at all",
    "FIRST POST!",
    "SECOND PIST!",
    "THIRD POST!"
];

export default function Blog(){
    const params = useParams();
    console.log(params.blogId);
    const match = useRouteMatch();
    console.table(match);
    return(
        <div>
            <ul>
                {blogPosts.map((p, i) => (
                    <li><Link to={String(i)}>{p}</Link></li>
                ))}
            </ul>
                <p>
                {blogPosts[params.blogId]}
            </p>
        </div>
    );
}