import React from 'react'

const Info = () => {
    return(
        <div className="Info" >
            <img className="info--img" src="https://pbs.twimg.com/profile_images/1517463560695205888/ZJUaY-wQ_400x400.jpg" 
            />
            <div className="info--section">
                <h2> Orincy Whyte </h2>
                <p className="info--text" style={{color: "#F3BF99"}} > Frontend Developer </p>
                <p className="info--text" style={{fontSize: ".6rem"}} > orincywhyte@gmail.com </p>
                <div className="info--btn--container" >
                <button className="info--btn one"> 
                   <i className="fa--info fa-solid fa-envelope"></i>
                    <p> Email </p>
                </button>
                <button className="info--btn two"> 
                    <i className="fa--info fa-brands fa-linkedin"></i>
                    <p> LinkedIn </p>
                </button>
                </div>
            </div>
        </div>
    )
}

export default Info