import React from "react"

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2><span>{title || 'default title'}</span></h2>
    </div>
  )
}

export default Title
