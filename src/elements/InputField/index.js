import React from 'react'

const InputField = (props) => {
  return (
      <input type="text" placeholder="Your City..." onChange={props.handleChange} value={props.value}/>
  )
}
export default InputField