import React, { useState } from 'react'
import styled from 'styled-components'

const TextError = styled.div`
  color : red ;
`


function SigninForm() {
  const [ stateUser ,setStateUser ] = useState('')
  const [ statePass ,setStatePass ] = useState('')

  const [ errorUser , setErrorUser ] = useState('')
  const [ errorPass , setErrorPass ] = useState('')

  const handleChangeUser = (event) => {
    setStateUser(event.target.value)
  }
  const handleChangePass = (event) => {
    setStatePass(event.target.value)
  }

  const handelSubmit = (event) => {
      if ( stateUser.length <= 8 ){
        setErrorUser('usernamer size must greater than 8')
        
      }
      else {
        setErrorUser('')
      }
      if ( statePass.length <= 8 ){
        setErrorPass('password size must greater than 8')
      }
      else {
          alert("Complate")
          setErrorPass('')
      }

  }

  return (
    <div>
      UserName 
      <input type="text" onChange={handleChangeUser} placeholder='eg. John007uhuhu'/><br />
      <TextError>{errorUser}</TextError> <br />
      Password
      <input type="password" onChange={handleChangePass} placeholder='eg. SmithDogeCnxxxe' /><br />
      <TextError>{errorPass}</TextError> <br />
      <button onClick={handelSubmit} >Submit</button>
      

    </div>
  )
}

export default SigninForm;
