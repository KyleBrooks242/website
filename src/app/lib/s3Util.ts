import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { cache } from 'react';
const client = new S3Client();
const bucketName = process.env['S3_BUCKET_NAME'];
const resumeKey = 'personal-website/Brooks_Kyle_Full_Resume_2025.pdf'

export const getResume = cache(async () => {

    let buffer;

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
            return buffer.toString('base64');
            // pdfBlob = new Blob([buffer], { type: "application/pdf" });
            // console.log(`Hey it's Blobby:`, pdfBlob);

        }
    }
    catch (error: any) {
        console.debug('getResume: Error fetching PDF!')
        console.debug(error);
    }

    return buffer;
});