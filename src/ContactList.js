import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact'

//questo è il modo sbagliato
// export const ContactList = (props) => (
//     <div>
//         <ul>
//             <li>{props.contacts[0]}</li>
//             <li>{props.contacts[1]}</li>
//             <li>{props.contacts[2]}</li>
//         </ul> 
//     </div>
// )

export const ContactList = ({contacts}) => {
    const elements = []
    contacts.forEach(({firstName,lastName,gender})=> {
        elements.push(
           <Contact key={`${firstName} ${lastName}`} firstName={firstName} lastName={lastName} gender={gender}/> 
        )
    });
    return (
        <div>
            <ul>
            {elements}
            </ul>
        </div>
    )
}

ContactList.propTypes = {
    contacts : PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ContactList;