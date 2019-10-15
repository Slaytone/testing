import React from 'react';
import ReactDOM from 'react-dom';
import Contact from "../contact/contact.js";
import "../contactList/contactList.css";


let contacts = [
    {
        id: 1,
        name: "Anton",
        number: "+3809612345678"
    },
    {
        id: 2,
        name: "Alexander",
        number: "+3806712345678"
    },
    {
        id: 3,
        name: "Olga",
        number: "+3809744345678"
    },
    {
        id: 4,
        name: "Slava",
        number: "+3806855345678"
    }
 ];

class ContactList extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            displayedContacts: contacts
        };
    }

    handleSearch(event) {
            var searchQuery = event.target.value.toLowerCase();
            var displayedContacts =
                contacts.filter( function(el){
                                    var searchValue = el.name.toLowerCase();
                                    return searchValue.indexOf(searchQuery) !== -1;
                                } );
            this.setState(
                {displayedContacts:displayedContacts}
            );
    };


     render() {
        return(
            <div>
                <input type="text" onChange={this.handleSearch.bind(this)}/>
                <ul>
                    {
                       this.state.displayedContacts.map(function(el) {
                            return <Contact
                                        key = {el.id}
                                        name = {el.name}
                                        number = {el.number}
                                    />
                       })
                    }
	            </ul>
            </div>
        )
    }
}

export default ContactList;


