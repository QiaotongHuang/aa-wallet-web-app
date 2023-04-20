import React from "react";
import { ReactComponent as WalletIcon } from '@/assets/svg/wallet.svg'
import './index.less'
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate } from "react-router-dom";
import fenxiang from "../../assets/img/fenxiang 6.png"


export default function Home() {
    const navigate = useNavigate(); 
    const toTencentPage = () => {
        navigate('/tencentLogin')
    }
    return (
        <div className="home-container">
            <div className="home-welcome">
                <NavigateBefore />
                <div className="welcome-text" >Password</div>
            </div>

            <div className="contract-text">
            Choose an account register/login application:
            </div>

            <div className="login-btn-container">
                <div className="login-btn-item" onClick={toTencentPage}>
                    <div className="btn-item-before">
                      <img className="btn-item-img" src={fenxiang} alt="" />
                      <span className="btn-item-text">Tencent</span>
                    </div>
                    <NavigateNext/>
                </div>

                <div className="login-btn-item">
                    <div className="btn-item-before">
                      <img className="btn-item-img" src={fenxiang} alt="" />
                      <span className="btn-item-text">Microsoft</span>
                    </div>
                    <NavigateNext/>
                </div>

                <div className="login-btn-item">
                    <div className="btn-item-before">
                      <img className="btn-item-img" src={fenxiang} alt="" />
                      <span className="btn-item-text">Bytedance</span>
                    </div>
                    <NavigateNext/>
                </div>

                <div className="login-btn-item">
                    <div className="btn-item-before">
                      <img className="btn-item-img" src={fenxiang} alt="" />
                      <span className="btn-item-text">Github</span>
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