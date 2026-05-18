import "../styles/Contact.css"

const InputField = ({fieldName, fieldPlaceholder}) => {
  return (
    <div className="inputfield-div">
      {/* <label className="input-label" for="textField">{fieldName}</label> */}
      <input className="input-field" id="textField" type="text" placeholder={fieldPlaceholder} />
    </div>
  )
}

export default InputField;