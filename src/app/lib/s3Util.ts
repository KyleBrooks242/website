import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { cache } from 'react';
const client = new S3Client();
const bucketName = process.env['S3_BUCKET_NAME'];
const resumeKey = 'personal-website/Brooks_Kyle_Full_Resume_2025.pdf'

// export const getPosts = cache(async (): Promise<Array<any>> => {
export const getResume = cache(async () => {

    let pdfBlob;

    try {
        console.log("getResume: Executing GetObjectCommand...");
        const command: GetObjectCommand = new GetObjectCommand({
            Bucket: bucketName || "",
            Key: resumeKey
        })

        const response: any = await client.send(command)
        
        if (response.Body) {
            // Convert Node.js Readable stream into a Buffer
            const chunks = [];
            for await (const chunk of response.Body) {
              chunks.push(chunk);
            }
      
            // Combine chunks into a single Blob
            const buffer = Buffer.concat(chunks);
            pdfBlob = new Blob([buffer], { type: "application/pdf" });

        }
    }
    catch (error: any) {
        console.log('getResume: Error fetching PDF!')
        console.log(error);
    }

    return pdfBlob;
});