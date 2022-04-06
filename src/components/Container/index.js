import React from 'react'

const Container = (props) => {
    const {children} = props
  return (
    <div class="container">
      {children}
    </div>
  )
}

export default Container