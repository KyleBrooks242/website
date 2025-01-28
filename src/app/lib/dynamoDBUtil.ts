import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ExecuteStatementCommand } from "@aws-sdk/lib-dynamodb";
import { BlogComment } from "../interfaces";
import { cache } from "react";


const documentClient = DynamoDBDocumentClient.from(new DynamoDBClient());
const tableName = process.env['BLOG_COMMENT_TABLE_NAME'] || "";

export const getCommentsForPost = cache(async (slug: string): Promise<Array<BlogComment>> => {

    const statement = `SELECT * FROM "${tableName}" WHERE Slug = ?`
    const command = new ExecuteStatementCommand({
        Statement: statement,
        Parameters: [slug]
    })


    // return ([
    //     {
    //         author: "Kyle Brooks",
    //         slug: "creating-website-with-next.js",
    //         dateAdded: 1738100180000,
    //         comment: "Kyle is the best dev I have ever seen!"
    //     },
    //     {
    //         author: "Diep Le",
    //         slug: "creating-website-with-next.js",
    //         dateAdded: 1738100179000,
    //         comment: "I think the UI could be better.."
    //     },
    //     {
    //         author: "Pedro Monier",
    //         slug: "creating-website-with-next.js",
    //         dateAdded: 1738096431000,
    //         comment: "Kyle is the best dev I have ever seen!"
    //     }
    // ])

    //TODO UNCOMMENT


    const response: any = await documentClient.send(command);

    return response.Items.map((item: any) => {
        return {
            author: item.Author,
            comment: item.Comment,
            slug: item.Slug,
            dateAdded: item.DateAdded
        }
    })

})

