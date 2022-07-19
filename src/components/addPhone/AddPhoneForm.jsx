import React, { Component } from 'react'
import styles from "./AddPhoneForm.module.css";
import Input from './Input'


export default class AddPhoneForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstNameData:this.props.editUser ? this.props.editUser.name : '',
      lastNameData: this.props.editUser ? this.props.editUser.family : '',
      emailData: this.props.editUser ? this.props.editUser.email : '',

      submitted: false,

      allValid: false
    }
  }
  // -----------------------------
  submitHandler = (event) => {
    event.preventDefault()
    this.setState({ submitted: true })


    const { firstNameData, lastNameData, emailData } = this.state


    if (firstNameData.length !== 0 && lastNameData.length !== 0 && emailData.length !== 0) {

      this.setState({ allValid: true })
      setTimeout(() => {
        this.setState({ allValid: false })
      }, 3000);

      if (this.props.editUser) {
        this.props.editRow({
          id: this.props.editUser.id,
          name: firstNameData,
          family: lastNameData,
          email: emailData,
  
  
        });
      }else{

        this.props.addRow({
          name: firstNameData,
          family: lastNameData,
          email: emailData,
  
  
        });
      }
      this.setState({
        firstNameData: '',
        lastNameData: '',
        emailData: '',
      })
      this.props.togglePage()
    }
  }

  changeValdation = (field, event) => {
    console.log(field);
    this.setState({ [field]: event.target.value })
  };
  // ======================================================
  render() {
    const { firstNameData, lastNameData, emailData, submitted, allValid } = this.state
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.submitHandler} autoComplete="off">
          {submitted && allValid && (

            <div className={styles.success_message}>Success!</div>
          )}
          <div className={styles.title}>{this.props.editUser ? "Edit Contact" : "Add contact"}</div>
          <Input label="First Name" InputId="firstName" type="text" shortCut={false} ic={false} value={firstNameData}
            handelChange={(event) => this.changeValdation("firstNameData", event)}>

            {submitted && firstNameData.length === 0 && (

              <span id={styles.first_name_error}>Please enter the first name</span>

            )}

          </Input>
          <Input label="Last Name" InputId="lastName" type="text" shortCut={false} ic={true} value={lastNameData}
            handelChange={(event) => this.changeValdation("lastNameData", event)}>

            {submitted && lastNameData.length === 0 && (

              <span id={styles.last_name_error}>Please enter the last name</span>
            )}

          </Input>
          <Input label="Email" InputId="email" type="email" shortCut={true} ic={true} value={emailData}
            handelChange={(event) => this.changeValdation("emailData", event)}>

            {submitted && emailData.length === 0 && (

              <span id={styles.email_error}>Please enter the email address</span>
            )}
          </Input>
          <button  className={styles.submit}>submit</button>
        </form>
      </div>

    )
  }
}

