import React from "react";
import './index.less';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import tencent from "../../assets/img/tencent.jpg";
import exit from "../../assets/img/exit.png";
import transfer from "../../assets/img/transfer.png";
import conditional from "../../assets/img/conditional.png";

export default function Home() {
    const navigate = useNavigate(); 
    const toSimpleTransPage = () => {
        navigate('/simpleTrans')
    }
    const toAppsPage = () => {
        navigate('/apps')
    }
    return (
        <div className="home-container">
            <div className="home-welcome">
                <NavigateBefore onClick={toAppsPage} />
                <div className="welcome-text" >Transfer</div>
            </div>

            <div className="login-btn-container">
                <div className="login-btn-item">
                    <div className="btn-item-before">
                        <img className="btn-item-img" src={exit} alt=""/>
                        <span className="btn-item-text">Simple transfer</span>
                    </div>
                    <NavigateNext onClick={toSimpleTransPage}/>
                </div>

                <div className="contract-text">
                Directly send a transaction to someone
                </div>

                <div className="login-btn-item">
                    <div className="btn-item-before">
                        <img className="btn-item-img" src={transfer} alt=""/>
                        <span className="btn-item-text">Batch transfer</span>
                    </div>
                    <NavigateNext/>
                </div>

                <div className="contract-text">
                Send multipul transactions to someone at a time
                </div>

                <div className="login-btn-item">
                    <div className="btn-item-before">
                        <img className="btn-item-img" src={conditional} alt=""/>
                        <span className="btn-item-text">Conditional transfer</span>
                    </div>
                    <NavigateNext/>
                </div>

                <div className="contract-text">
                Under certain conditions the transfer transaction will be launched automatically
                </div>
            </div>
        </div>
    )
}