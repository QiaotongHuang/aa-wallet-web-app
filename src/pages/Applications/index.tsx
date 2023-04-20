import React from "react";
import { ReactComponent as WalletIcon } from '@/assets/svg/wallet.svg'

import { useNavigate } from "react-router-dom";
import './index.less'
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
import kaijuzhengming from "../../assets/img/kaijuzhengming 2.png"
import hezuoguanxi from "../../assets/img/hezuoguanxi 2.png"
import fenxiang from "../../assets/img/fenxiang 6.png"
import shejiaowangluo from "../../assets/img/shejiao-wangluo 2.png"
import chengxinhezuowoshou from "../../assets/img/chengxinhezuowoshou 2.png"


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Home() {
    const classes = useStyles();
    
    const navigate = useNavigate(); 

    const toPassPage = () => {
        navigate('/password')
    }

    return (
        <div className="home-container">
            <div className="home-welcome">
                <NavigateBefore />
                <div className="welcome-text" >Welcome!</div>
            </div>

            <div className="contract-text">
                Choose a way to login/register your account:
            </div>

            <div className="login-btn-container">
                <div className="login-btn-item" onClick={toPassPage}>
                    <div className="btn-item-before">
                      <img className="btn-item-img" src={kaijuzhengming} alt="" />
                      <span className="btn-item-text">Password</span>
                    </div>
                    <NavigateNext/>
                </div>

                <div className="login-btn-item">
                    <div className="btn-item-before">
                      <img className="btn-item-img" src={hezuoguanxi} alt="" />
                      <span className="btn-item-text">Email</span>
                    </div>
                    <NavigateNext/>
                </div>

                <div className="login-btn-item">
                    <div className="btn-item-before">
                      <img className="btn-item-img" src={shejiaowangluo} alt="" />
                      <span className="btn-item-text">SMS</span>
                    </div>
                    <NavigateNext/>
                </div>

                <div className="login-btn-item">
                    <div className="btn-item-before">
                      <img className="btn-item-img" src={fenxiang} alt="" />
                      <span className="btn-item-text">Facial recognition</span>
                    </div>
                    <NavigateNext/>
                </div>

                <div className="login-btn-item">
                    <div className="btn-item-before">
                      <img className="btn-item-img" src={chengxinhezuowoshou} alt="" />
                      <span className="btn-item-text">Social</span>
                    </div>
                    <NavigateNext/>
                </div>
            </div>
            {/* <div className="login-btn">
                <Button variant="outlined" endIcon={<NavigateNext />}>
                    Choose a way to login or register with any account applications
                </Button>
            </div> */}
            <div className="contract-text">
                You are free to register/login in any ways with any supporting account applications
            </div>
        </div>
    )
}