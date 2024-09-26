// Initialize the Google Cloud Storage client
const { Storage } = require('@google-cloud/storage');

// Create a client
const storage = new Storage({
    projectId: 'YOUR_PROJECT_ID', // Replace with your project ID
    keyFilename: 'PATH_TO_YOUR_JSON_KEY_FILE', // The path to your downloaded JSON key file
});

// Function to upload a file to Google Cloud Storage
async function uploadFile(fileName) {
    await storage.bucket('YOUR_BUCKET_NAME').upload(fileName);
    console.log(`${fileName} uploaded to ${YOUR_BUCKET_NAME}.`);
}
