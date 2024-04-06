import React, { useState } from 'react'

function ChangePasswordModal( {setShowModal} ) {
  return (
    <div>
        <p>The Change Password Modal Window</p>
        <button onClick={() => setShowModal(0)}>Click</button>
    </div>
    
  )
}

export default ChangePasswordModal