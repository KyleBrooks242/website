
import React from "react";
import { Comment } from "@/components/Comment";
import { getCommentsForPost } from "../lib/dynamoDBUtil";
import { BlogComment } from "../interfaces";


interface Props {
    slug: string
}

//Implement state here to cache comments? 

export default async function Comments(props: Props) {

    const comments: Array<BlogComment> = await getCommentsForPost(props.slug);

    const formatComments = () => {

        return comments.map((comment: BlogComment) => {

            return (
                <Comment 
                    key={`${comment.slug}-${comment.dateAdded}`} 
                    author={comment.author} 
                    comment={comment.comment}
                    dateAdded={comment.dateAdded} 
                />
            )
        })
    }



    return (
        <div>
            <h1 className='h1 align-self-center'>Comments</h1>
            {formatComments()}
        </div>
    )
}