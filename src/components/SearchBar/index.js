import React from 'react'
import InputField from 'elements/InputField'
import Button from 'elements/Button'

class SearchBar extends React.Component {

render() {
  const {handleChange, handleSubmit, value} = this.props
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField value={value}  handleChange={handleChange} />
        <Button button_type="submit"/>
      </form>
    </div>
  )
}}
export default SearchBar
