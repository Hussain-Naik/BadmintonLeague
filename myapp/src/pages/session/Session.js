import React from 'react'
import { useSessionContext } from '../../context/SessionContext'

const Session = () => {
  const sessionContext = useSessionContext()
  return (
    <div>
      <p>Session details</p>
    </div>
  )
}

export default Session
