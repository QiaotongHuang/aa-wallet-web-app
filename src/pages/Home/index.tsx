import React from "react";
import { ReactComponent as WalletIcon } from '@/assets/svg/wallet.svg'
import './index.less'
import { NavigateNext } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div className="home-container">
            <div className="home-welcome">
                <WalletIcon className="welcome-icon" />
                <div className="welcome-text" >Welcome!</div>
            </div>

            <div className="contract-text">
                Enjoy countless capable and decentralized third-party smart contract account applications here
            </div>

            <div className="login-btn">
                <span>Choose a way to login or register with any account applications</span>
                <NavigateNext />
            </div>
            {/* <div className="login-btn">
                <Button variant="outlined" endIcon={<NavigateNext />}>
                    Choose a way to login or register with any account applications
                </Button>
            </div> */}
            <div className="account-btn">
                <span>Look up available login methods of your account</span>
                <NavigateNext />
            </div>
        </div>
    )
}