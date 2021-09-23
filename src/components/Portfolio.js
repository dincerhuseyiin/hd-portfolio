import React from "react";
import todolist from "../todolist.jpg";
import shopping from "../shopping.jpg";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

  // todolist
  const openPopupboxtodolist = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={todolist} alt="todolist Clone Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/dincerhuseyiin/todolist-bootstrap-w-react", "blank")}>https://github.com/dincerhuseyiin/todolist-bootstrap-w-react</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigtodolist = {
    titleBar: {
      enable: false,
      text: "TO-DO LIST Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }



  

  // Shopping
  const openPopupboxshopping = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={shopping} alt="Task Manager React and Redux Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
         <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/dincerhuseyiin/shopping-list", "_blank")}>https://github.com/dincerhuseyiin/shopping-list</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigshopping = {
    titleBar: {
      enable: false,
      text: "Shopping-List Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxtodolist}>
            <img className="portfolio-image" src={todolist} alt="todolist  Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
         
          {/* - */}
          
          <div className="portfolio-image-box" onClick={openPopupboxshopping}>
            <img className="portfolio-image" src={shopping} alt="Shopping..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigtodolist} />

      <PopupboxContainer {...popupboxConfigshopping} />
    </div>
  )
}

export default Portfolio;
