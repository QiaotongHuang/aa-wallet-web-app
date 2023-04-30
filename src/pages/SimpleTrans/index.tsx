import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import './index.less'
import { Button, Paper } from '@material-ui/core';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import tencent from "../../assets/img/tencent.jpg";
import exit from "../../assets/img/exit.png";
import transfer from "../../assets/img/transfer.png";
import conditional from "../../assets/img/conditional.png";

export default function Home() {
    const navigate = useNavigate(); 
    const toResultPage = () => {
        navigate('/transResult')
    }
    const toTransPage = () => {
        navigate('/transfer')
    }

    const [textValue, setTextValue] = useState<string>("");
    const onTextChange = (e: any) => setTextValue(e.target.value);
    const handleSubmit = () => console.log(textValue);
    const handleReset = () => setTextValue("");

    return (
        <div className="home-container">
            <div className="home-welcome">
                <NavigateBefore onClick={toTransPage} />
                <div className="welcome-text">Simple Transfer</div>
            </div>

            <div className="login-form">
                <TextField
                    onChange={onTextChange}
                    value={textValue}
                    label={"Send to"}
                />
                <TextField
                    onChange={onTextChange}
                    value={textValue}
                    label={"Asset"}
                />
                <TextField
                    onChange={onTextChange}
                    value={textValue}
                    label={"Amount"}
                />
                <TextField
                    onChange={onTextChange}
                    value={textValue}
                    label={"Gas Fee"}
                />
                {/* <Button onClick={handleSubmit}>confirm</Button> */}
                <Button onClick={toResultPage}>confirm</Button>

            </div>
        </div>
    )
}