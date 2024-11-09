import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';


export const writeContacts = async (updatedContacts) => {
    try {
        if (!Array.isArray(updatedContacts)) {
        console.error("Error: The provided data is not an array.");
        return;
    }
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, undefined, 2));
    } catch (error) {
        console.error("Failed to write contacts:", error);
    }
};



