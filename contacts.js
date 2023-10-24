const fs = require('fs');
const path = require('path')

const contactPath = path.join(__dirname, "db", "contacts.json");

function contactList() {
    fs.readFile(contactPath, 'utf-8', (err, data) => {
        if (err) {
            console.error("Error read contacts:", err)
            return;
        }
    })
}
try {
    const contacts = JSON.parse(data);
    console.log("Contacts:");
    fs.readFile(contacts, index)=> {
        console.log(`${index}. Name:${contacts.name}, Eamil:${contacts.email}, Phone:${contacts.phone}`);
    }
}
catch (error) {
    console.error("Error:", error);
    return;
}