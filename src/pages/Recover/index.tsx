import React, { useState } from "react";
import { ReactComponent as WalletIcon } from '@/assets/svg/wallet.svg'
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { useNavigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import './index.less'
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Home() {
    const navigate = useNavigate(); 

    const toPasswordPage = () => {
        navigate('/password')
    }

    const toCreatePage = () => {
        navigate('/create')
    }

    const toLoginPage = () => {
        navigate('/TencentLogin')
    }
    const [textValue, setTextValue] = useState<string>("");
    const onTextChange = (e: any) => setTextValue(e.target.value);
    const handleSubmit = () => console.log(textValue);
    const handleReset = () => setTextValue("");
    return (
        <div className="home-container">
            <div className="home-welcome">
                <NavigateBefore onClick={toPasswordPage}/>
                <div className="welcome-text" >Recover</div>
            </div>

            <div className="login-form">
                <TextField
                    onChange={onTextChange}
                    value={textValue}
                    label={"Seed Phrase"} //optional
                />
                {/* <TextField
                    onChange={onTextChange}
                    value={textValue}
                    label={"Password"} //optional
                /> */}
                <Button onClick={handleSubmit}>Recover</Button>
            </div>
            {/* <div className="login-btn">
                <Button variant="outlined" endIcon={<NavigateNext />}>
                    Choose a way to login or register with any account applications
                </Button>
            </div> */}

            <div className="account-btn" onClick={toLoginPage}>
                <span>Login</span>
                <NavigateNext />
            </div>

            <div className="account-btn" onClick={toCreatePage}>
                <span>Create a new account</span>
                <NavigateNext />
            </div>
        </div>
    )
}