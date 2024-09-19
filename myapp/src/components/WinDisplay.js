import React from 'react'

const WinDisplay = ({result}) => {
  return (
    result === 1 
    ? <span className="pi pi-crown"></span>
    : <span className="pi pi-crown" style={{ color: 'transparent' }}></span>
  )
}

export default WinDisplay
