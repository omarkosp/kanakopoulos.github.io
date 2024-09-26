const { Storage } = require('@google-cloud/storage');

// Replace with your actual project ID
const storage = new Storage({
    projectId: 'kanakopoulos', // Your actual Project ID
    keyFilename: 'key.json', // The path to your JSON key file, assuming it's in the root
});

// Function to upload a file
async function uploadFile(fileName) {
    try {
        await storage.bucket('photoskanakopoulos').upload(fileName);
        console.log(`${fileName} uploaded to photoskanakopoulos.`);
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}

// Call the upload function with the correct file path
uploadFile('path/to/your/local/file.txt'); // Replace with your actual file path
