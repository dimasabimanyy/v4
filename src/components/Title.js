import React from "react"

const Title = ({ title, dataAos, aosDuration }) => {
  return (
    <div className="section-title" data-aos={dataAos} data-aos-duration={aosDuration}>
      <h2><span>{title || 'default title'}</span></h2>
    </div>
  )
}

export default Title
