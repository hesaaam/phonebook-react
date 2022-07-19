import React, { Component } from 'react'
import styles from "./Input.module.css";


export default class Input extends Component {
  render() {
    return (
      <>
        <div className={`${styles.input_container} ${styles.ic1} ${this.props.ic && styles.ic2}`}>
          <input id={this.props.InputId} className={styles.input}
           type={this.props.type} placeholder=" " onChange={this.props.handelChange} value={this.props.value} />

          {this.props.children}

          <div className={`${styles.cut} ${this.props.shortCut && styles.cut_short}`}></div>
          <label htmlFor={this.props.InputId} className={styles.placeholder}>{this.props.label}</label>
        </div>

      </>
    )
  }
}
