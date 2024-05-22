import csvtojson from "csvtojson";
import fs from "fs"


const uploadCsvFile = async (req : any, res : any) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'CSV file not provided' });
        }

        const jsonArray = await csvtojson().fromFile(req.file.path);

        // Delete the file after reading
        fs.unlink(req.file.path, (err) => {
            if (err) {
                console.error('Failed to delete the file:', err);
            } else {
                console.log('File deleted successfully');
            }
        });

        res.json(jsonArray);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to convert CSV to JSON' });
    }
};

export {
    uploadCsvFile
}