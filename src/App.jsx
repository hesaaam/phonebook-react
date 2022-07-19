import React, { Component } from 'react'
import AddPhoneForm from './components/addPhone/AddPhoneForm'
import PhoneBook from './components/phoneBookTabale/PhoneBook'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rows: [{
        id: 1,
        name: 'Amir',
        family: 'Ahmadi',
        email: 'ahmadi-ds@gmail.com',
      },
      {
        id: 2,
        name: 'Ali',
        family: 'Rezaei',
        email: 'rezaei-ds@gmail.com',
      },
      {
        id: 3,
        name: 'Farhad',
        family: 'Tohidi',
        email: 'tohidi-ds@gmail.com',
      }, {
        id: 4,
        name: 'Kurosh',
        family: 'Bahmani',
        email: 'bahmani-ds@gmail.com',
      }
      ],
      showTabale: true,
      editUser: null,

    }

  }

  addRow = (row) => {
    let newId = this.state.rows.length + 1;
    row.id = newId;
    this.setState({ rows: [...this.state.rows, row] }, () => console.log(this.state.rows))

  }
  editRow = (row) => {
    console.log(row);
    let newRows = [...this.state.rows]
    console.log(newRows);
    let idx = newRows.findIndex(user => user.id === row.id);
    newRows.splice(idx, 1, row);
    this.setState({ rows: newRows, editUser: null });

  }

  deleteRow = (userID) => {
    console.log(userID);
    let newRows = [...this.state.rows]
    console.log(newRows);
    let idx = newRows.findIndex(row => row.id === userID);
    newRows.splice(idx, 1);
    this.setState({ rows: newRows });

  }
  // -----------------------------
  togglePage = () => {
    this.setState({ showTabale: !this.state.showTabale });
  }
  addUserForEdit = (user) => {
    console.log(user);
    this.setState({ editUser: user });
  }
  render() {
    return (

      <>
        {this.state.showTabale
          ? <PhoneBook rows={this.state.rows} userRemoveHandler={this.deleteRow} togglePage={this.togglePage} editUser={this.addUserForEdit} />
          : <AddPhoneForm addRow={this.addRow} togglePage={this.togglePage} editUser={this.state.editUser} editRow={this.editRow} />
        }

      </>
    )
  }
}
