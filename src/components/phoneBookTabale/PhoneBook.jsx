import React, { Component } from 'react';
import styles from "./PhoneBooks.module.css";
import Row from "./Row"


export default class PhoneBook extends Component {

  state = {
    showModal: false,
    removaUserId: null
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  userReadyToRemove = (id) => {
    this.toggleModal()
    this.setState({ removaUserId: id });
  }

  deleteUser = () => {
    this.props.userRemoveHandler(this.state.removaUserId)
    this.toggleModal()
  }
  render() {

    const { rows } = this.props
    return (
      <>
        <div className={styles.container}>
          <div onClick={this.props.togglePage} className={`${styles.btn} ${styles.from_bottom}`}>Add contact</div>
          <div className={styles.table_wrapper}>
            <table className={styles.fl_table}>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Namee</th>
                  <th>Family</th>
                  <th>Email</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>

                {rows.map((row) => <Row editUser={this.props.editUser} key={row.id} {...row} onRemove={() => this.userReadyToRemove(row.id)} togglePage={this.props.togglePage} />)}

              </tbody>
            </table>
          </div>

        </div>
        {this.state.showModal && (
          <div className={styles.modal}>
            <div className={styles.modal__content}>
              <h1> Are you sure!?</h1>


              <button className={styles.btn2} onClick={this.deleteUser}>Yes</button>


              <div onClick={() => this.toggleModal()} className={styles.modal__close}> &times;</div>
            </div>
          </div>)}

      </>
    )
  }
}

