import React from "react"
import "./foot.scss"
function Foot(){
    return <div className="foot">
        <div className="left-text">
            <span className="span-title">免责声明</span>
            <span className="span-text">Nest 智能合约水龙头由 Nest 爱好者发起，仅供推广 Nest 分布式价格预言机使用</span>
            <span className="span-text">用户在使用 Nest 智能合约水龙头过程中所出现的任何风险均由用户自行承担，与 Nest 爱好者无关</span>
            <span className="span-text">如不认同该声明，请立刻停止操作，关闭 Nest 只能合约水龙头网站，多谢理解和支持</span>
        </div>
        <img className="qr-code" src="/assets/ic_qrcode.png"/>
        
    </div>
}
export default Foot