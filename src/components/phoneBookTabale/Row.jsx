import React, { Component } from 'react';
import styles from "./PhoneBooks.module.css";

export default class Row extends Component {
  removeMethod = (id) =>{
    
    this.props.onRemove(id)
  }

  edit = () =>{
    console.log(this.props);
    this.props.editUser(this.props)
    this.props.togglePage()
  }

  render() {
    const{id, name, family, email} = this.props;
 
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{family}</td>
        <td>{email}</td>
        <td><button className={styles.button} onClick={()=>this.removeMethod(id)}>Delete</button></td>
        <td><button onClick={this.edit} className={styles.button}>Edit</button></td>
      </tr>
    )
  }
}
