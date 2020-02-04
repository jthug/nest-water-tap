import React from "react"
import "./head.scss"
function Head(){
    return <div className="head">
        {/* <div className="div-left">
            
        </div> */}
        <img className="div-left" src="/assets/ic_tap.png" alt=""/>
        <div className="div-right">

            <div className="faqs-bg"/>
            <a className="faqs" href="www.baidu.com">FAQs</a>
    
        </div>
        
    </div>
}

export default Head