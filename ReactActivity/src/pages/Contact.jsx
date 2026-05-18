import InputField from '../components/InputField.jsx'
import "../styles/Contact.css"

const Contact = () => {
  return (
    <div className="contact-div">
      {/* Heading */}
      <h1>
        Connect with me!
      </h1>

      <p>Leave a message</p>

      <div className="contact-content-div">

        <div className="allinputs-div">

          <InputField fieldName="Name" fieldPlaceholder="Enter your name"/>
          <InputField fieldName="Email" fieldPlaceholder="Enter your email"/>
          <div className="inputfield-div">
            <label className="input-label" for="textField">Message</label>
            <textarea className="input-field" id="textField" row="100" type="text" placeholder="Begin typing your message..." />
          </div>

        </div>

        <input className="submit-button" type="button" value="Submit"/>
      </div>
    </div>
  )
}

export default Contact;