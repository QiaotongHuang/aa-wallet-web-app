import React from "react";
import { ReactComponent as WalletIcon } from '@/assets/svg/wallet.svg'

import { useNavigate } from "react-router-dom";
import './index.less';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
import kaijuzhengming from "../../assets/img/kaijuzhengming 2.png"
import hezuoguanxi from "../../assets/img/hezuoguanxi 2.png"
import fenxiang from "../../assets/img/fenxiang 6.png"
import shejiaowangluo from "../../assets/img/shejiao-wangluo 2.png"
import chengxinhezuowoshou from "../../assets/img/chengxinhezuowoshou 2.png"
import exit from "../../assets/img/exit.png"
import user from "../../assets/img/user.png"

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Home() {
    const classes = useStyles();
    
    const navigate = useNavigate(); 

    const toPassPage = () => {
        navigate('/home')
    }

    return (
        <div className="home-container">
            <div className="user">
                <img className="user-icon" src={user} alt="" />
                <div className="user-info">
                    <p className="alia">{'Username'}</p>
                    <p className="user-address">{'Ox00000'}</p>
                </div>
                <div className="user-icon">
                    <img src={exit} alt="" onClick={toPassPage}/>
                </div>
            </div>

            <div className="account">
                <span className="text">{'Account Balance'}</span>
                <span className="amount">$ 0.00</span>        
            </div>

            <div className="type">
                    <div className="balance">
                        <span>{'BTC'}</span>
                        <span>{'$0.00'}</span>
                    </div>
                    <div className="balance">
                        <span>{'ETH'}</span>
                        <span>{'$0.00'}</span>
                    </div>
                    <div className="balance">
                        <span>{'USDC'}</span>
                        <span>{'$0.00'}</span>
                    </div>
            </div>
            
            <div className="transaction">
                <span className="text">Transaction</span>
                <div className="type">
                    <div className="all">
                        <span>All</span>
                    </div>
                    <div className="all">
                        <span>Sent</span>
                    </div>
                    <div className="all">
                        <span>Received</span>
                    </div>
                </div>
            </div>

            <div className="records">
                <span>None</span>
            </div>
        </div>
    )
}