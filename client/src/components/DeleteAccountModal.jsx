import React from 'react'

function DeleteAccountModal( {setShowModal} ) {
  return (
    <div>
        <p>The Delete Account Modal Window</p>
        <button onClick={() => setShowModal(0)}>Click</button>
    </div>
  )
}

export default DeleteAccountModal