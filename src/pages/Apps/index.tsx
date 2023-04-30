import React from "react";
import { useNavigate } from "react-router-dom";
import './index.less';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
import access from "../../assets/img/access.png"
import automatic from "../../assets/img/automatic.png"
import community from "../../assets/img/community.png"
import defi from "../../assets/img/defi.png"
import game from "../../assets/img/game.png"
import login from "../../assets/img/login.png"
import news from "../../assets/img/news.png"
import p2p from "../../assets/img/p2p.png"
import security from "../../assets/img/security.png"
import social from "../../assets/img/social.png"
import tutorial from "../../assets/img/tutorial.png"
import transfer from "../../assets/img/transfer.png"




const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Home() {
    const classes = useStyles();
    
    const navigate = useNavigate(); 

    const toTransferPage = () => {
        navigate('/transfer')
    }
    const toLoginPage = () => {
        navigate('/applications')
    }

    return (
        <div className="home-container">
            <div className="welcome-text">
                <span>Apps</span>
            </div>
            
            <div className="app-container">
                <div className="app-item">
                    <span className="text">Account Interaction</span>
                </div>
            </div>

            <div className="items">
                    <div className="rows" onClick={toTransferPage}>
                        <div className="display">
                            <img className="img" src={transfer} alt=""/>
                            <span className="text">Transfer</span>
                        </div>
                    </div>
                    <div className="rows">
                        <div className="display">
                        <img className="img" src={automatic} alt=""/>
                        <span className="text">Automatic Interactions</span>
                        </div>
                    </div>
                    <div className="rows">
                        <div className="display">
                        <img className="img" src={p2p} alt=""/>
                        <span className="text">P2P Direct Trading</span>
                        </div>
                    </div>
            </div>

            <div className="app-container">
                <div className="app-item">
                    <span className="text">Account Management</span>
                </div>
            </div>

            <div className="items">
                    <div className="rows" onClick={toLoginPage}>
                    <div className="display">
                        <img className="img" src={login} alt=""/>
                        <span className="text">Login</span>
                    </div>
                    </div>
                    <div className="rows">
                    <div className="display">
                        <img className="img" src={access} alt=""/>
                        <span className="text">Access Control</span>
                    </div>
                    </div>
                    <div className="rows">
                    <div className="display">
                        <img className="img" src={security} alt=""/>
                        <span className="text">Security Privacy</span>
                    </div>
                    </div>
            </div>

            <div className="app-container">
                <div className="app-item">
                    <span className="text">Dapp User Client</span>
                </div>
            </div>

            <div className="items">
                    <div className="rows">
                        <div className="display">
                        <img className="img" src={defi} alt=""/>
                        <span className="text">DeFi</span>
                        </div>
                    </div>
                    <div className="rows">
                        <div className="display">
                        <img className="img" src={game} alt=""/>
                        <span className="text">GameFi</span>
                        </div>
                    </div>
                    <div className="rows">
                        <div className="display">
                        <img className="img" src={social} alt=""/>
                        <span className="text">Social</span>
                        </div>
                    </div>
            </div>

            <div className="app-container">
                <div className="app-item">
                    <span className="text">Wallet Native</span>
                </div>
            </div>

            <div className="items">
                    <div className="rows">
                        <div className="display">
                        <img className="img" src={tutorial} alt=""/>
                        <span className="text">Tutorial</span>
                        </div>
                    </div>
                    <div className="rows">
                        <div className="display">
                        <img className="img" src={news} alt=""/>
                        <span className="text">News</span>
                        </div>
                    </div>
                    <div className="rows">
                        <div className="display">
                        <img className="img" src={community} alt=""/>
                        <span className="text">Community</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}