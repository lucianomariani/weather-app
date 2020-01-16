import React from 'react'

const WheatherDetails = (props) => {
  return (
      <div>
        <p>{props.details.description} </p>
        <p>{props.details.temperature} </p>
      </div>
  )
}
export default WheatherDetails