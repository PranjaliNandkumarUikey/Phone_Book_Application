function user(name, phoneNumber, email) {
    return {
        name: name,
        phoneNumber: phoneNumber,
        email: email
    };
}

let PhoneBook = {
    Contact: [],

    addNewContact: function(name, phoneNumber, email) {
        let newContact = user(name, phoneNumber, email);
        this.Contact.push(newContact);
        console.log(`${name} added to our contacts`);
    },

    searchContact: function(name) {
        let Person = this.Contact.find(function(contact) {
            return contact.name === name;
        });

        if (Person) {
            console.log(`Name: ${Person.name}\n Phone Number: ${Person.phoneNumber}\n Email: ${Person.email}`);
        } else {
            console.log(`"${name}" not found`);
        }
    },

    updateContact: function(name, number, emailid){
        let found = this.Contact.find(contact => contact.name === name);

        if(found){
            found.phoneNumber = number;
            found.email = emailid;
            console.log(`${name} updated`);
        }
        else{
            console.log(`${name} not found`);
        }
    },

    deleteContact: function(name) {
        let Cont = this.Contact.filter(contact => contact.name !== name);

        if(Cont.length === this.Contact.length){
            console.log(`"${name}" not found`);
        }
        else{
            this.Contact = Cont;
            console.log(`"${name}" deleted`);
        }
    }
};

PhoneBook.addNewContact("Pranjali", "8967452310", "pranjali@gmail.com");
PhoneBook.searchContact("Pranjali");
PhoneBook.updateContact("Pranjali", "8967452310", "pranjali@gmail.com");
PhoneBook.deleteContact("Pranjali");

PhoneBook.addNewContact("Piya", "9785436276", "Piya@gmail.com");
PhoneBook.searchContact("Piya");
PhoneBook.updateContact("Nitya", "9876543210", "john@example.com");
PhoneBook.deleteContact("Piya");

