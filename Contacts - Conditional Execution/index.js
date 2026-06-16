let contacts = [{
    name: "Justine Invictus",
    phone: "0963 725 6656",
    email: "justine.invictus@example.com"
},
{
    name: "John Mark Courage",
    phone: "0922 255 5100",
    email: "john.mark.courage@example.com"
},
{
    name: "Mary Grace Pretty",
    phone: "0963 200 2005",
    email: "mary.grace.pretty@example.com"
}];

console.log(contacts);

let choice = prompt("Welcome to the Contact List App!\n\nPlease choose an option:\n(1) Show First Contact\n(2) Show Last Contact\n(3) Add New Contact\n(4) Exit");

if (choice === "1") {
    let firstContact = contacts[0];
    alert(`First Contact:\nName: ${firstContact.name}\nPhone: ${firstContact.phone}\nEmail: ${firstContact.email}`);
} else if (choice === "2") {
    let lastContact = contacts[contacts.length - 1];
    alert(`Last Contact:\nName: ${lastContact.name}\nPhone: ${lastContact.phone}\nEmail: ${lastContact.email}`);
} else if (choice === "3") {
    let newName = prompt("Enter name:");
    let newPhone = prompt("Enter phone:");
    let newEmail = prompt("Enter email:");
    if (newName && newPhone && newEmail) {
        contacts.push({ name: newName, phone: newPhone, email: newEmail });
        alert("New contact added successfully!");
        /* console.log(`Contact added:`, { name: newName, phone: newPhone, email: newEmail });
        console.log(contacts); */
    } else {
        alert("Missing data - contact NOT added.");
    }
} else if (choice === "4"||choice === null) {
    alert("Thank you for using the Contact List. Goodbye!");
} else {
    alert("Invalid choice. Please exit and try again.");
} 