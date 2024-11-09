import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


const generateContacts = async (number) => {

    const contacts = await readContacts();

    if (typeof number !== 'number' || number <= 0) {
        console.error("Error: Specify the correct number of contacts.");
        return;
    }

    const newArrayContacts = Array.from({ length: number }, () => createFakeContact());
    
    contacts.push(...newArrayContacts);

    await writeContacts(contacts);
};

generateContacts(5);
