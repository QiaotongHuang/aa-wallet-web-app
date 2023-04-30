import React from "react";
import './index.less';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import success from "../../assets/img/success.png";

export default function Home() {
    const navigate = useNavigate(); 
    const toSimpleTransPage = () => {
        navigate('/simpleTrans')
    }

    return (
        <div className="home-container">
            <div className="home-welcome">
                <NavigateBefore onClick={toSimpleTransPage}/>
                <div className="welcome-text" >Simple Transfer</div>
            </div>

            <div className="sent-container">
                <div className="item">
                <img className="sent"  src={success} alt=""/>
                <span className="text">Sent successfully!</span>
                </div>
            </div>
        </div>
    )
}