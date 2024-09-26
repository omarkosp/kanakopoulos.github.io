const { Storage } = require('@google-cloud/storage');

// Create a client
const storage = new Storage({
    projectId: 'kanakopoulos', // Your actual Project ID
    keyFilename: 'key.json',    // The path to your JSON key file
});

// Function to upload a file
async function uploadFile(fileName) {
    console.log(`Attempting to upload: ${fileName}`); // Log the file being uploaded
    try {
        await storage.bucket('photoskanakopoulos').upload(fileName);
        console.log(`${fileName} uploaded to photoskanakopoulos.`);
    } catch (error) {
        console.error('Error uploading file:', error); // Log the error if upload fails
    }
}

// Call the upload function with the correct file path
uploadFile('path/to/your/local/file.txt'); // Replace with your actual file path
