import React from 'react'
// import "./css-transformation.css"
import styled from 'styled-components'
import '../sass/css-transformation.scss'

const Container = styled.div`
    font-size: 20px;
    border-radius: 5px;
    position: absolute;
    width: 100vh;
    z-index: 10000;

`
const Wrappper = styled(Container)`
    display: flex;
    padding: 10rem;
    justify-content: center;
    align-items: center;

    a:visited {
      color: initial;
      text-decoration: none;
    }

    button.btn {
      outline: none;
      border: 1px solid #555;
      padding: 2rem 5rem;
    }
`

function CssTransformation() {
  return (<>
      {/* SASS */}
      {/* <div className="container">
        <div className="wrapper">
           <a href="//google.com">google</a>
           <button className="btn">click me</button>
        </div>
       </div> */}
    <Container>
      <Wrappper>
        <a href="//google.com">google</a>
        <button className="btn">click me</button>
      </Wrappper>
    </Container>
    </>
  )
}

export default CssTransformation;
