import React from 'react'

const Contact = (props) => {

    const { contact, deleteContact } = props;

    const { name, popularity, pictureUrl, id, wonEmmy, wonOscar } = contact;

    return (
      <tr>
        <td><img src={pictureUrl} alt={name} /></td>
        <td>{name}</td>
        <td>{Math.round(popularity * 100)/100}</td>
        <td>{wonOscar ? '🏆' : " "}</td> 
        <td>{wonEmmy ? '🏆' : " "}</td>
        <td><button onClick={() => deleteContact(id)}>Delete</button></td>
      </tr>
    )

  }

export default Contact