import React from 'react';
import PropTypes from 'prop-types';

export const Contact = ({firstName,lastName, gender}) => {
    
    return(
        <li 
        style={{color:gender === 'm'
                ? 'blue' 
                : 'red'}}
        >
        {firstName} {lastName}
        </li>
    )
}
Contact.propTypes = {
    firstName : PropTypes.string.isRequired,
    lastName : PropTypes.string.isRequired,
    gender : PropTypes.string.isRequired

 }
export default Contact;