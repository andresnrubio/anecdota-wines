import React from 'react'

const CardsSelector = () => {

    // * {
    //   box-sizing: border-box;
    // }
    
    // body {
    //   font-family: 'Muli', sans-serif;
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    //   height: 100vh;
    //   overflow: hidden;
    //   margin: 0;
    // }
    
    // .container {
    //   display: flex;
    //   width: 90vw;
    // }
    
    // .panel {
    //   background-size: cover;
    //   background-position: center;
    //   background-repeat: no-repeat;
    //   height: 80vh;
    //   border-radius: 50px;
    //   color: #fff;
    //   cursor: pointer;
    //   flex: 0.5;
    //   margin: 10px;
    //   position: relative;
    //   -webkit-transition: all 700ms ease-in;
    // }
    
    // .panel h3 {
    //   font-size: 24px;
    //   position: absolute;
    //   bottom: 20px;
    //   left: 20px;
    //   margin: 0;
    //   opacity: 0;
    // }
    
    // .panel.active {
    //   flex: 5;
    // }
    
    // .panel.active h3 {
    //   opacity: 1;
    //   transition: opacity 0.3s ease-in 0.4s;
    // }
    
    // @media (max-width: 480px) {
    //   .container {
    //     width: 100vw;
    //   }
    
    //   .panel:nth-of-type(4),
    //   .panel:nth-of-type(5) {
    //     display: none;
    //   }
    // }

// const panels = document.querySelectorAll('.panel')

// panels.forEach(panel => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses()
//         panel.classList.add('active')
//     })
// })

// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }
  return (
    <div>
        <div classname="container">
            <div classname="panel active">
                <h3>Explore The World</h3>
            </div>
            <div classname="panel">
                <h3>Wild Forest</h3>
            </div>
            <div classname="panel" >
                <h3>Sunny Beach</h3>
            </div>
            <div classname="panel">
                <h3>City on Winter</h3>
            </div>
            <div classname="panel">
                <h3>Mountains - Clouds</h3>
            </div>
        </div>
    </div>
  )
}

export default CardsSelector
