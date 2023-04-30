import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import './index.less'

import Row, { RowFixed } from '../Row'
import wallet from "../../assets/img/wallet.png"
import application from "../../assets/img/application.png"
import account from "../../assets/img/account.png"

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

const HeaderLinks = styled(Row)`
  padding: 1rem 0 1rem 1rem;
  justify-content: center;
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
    activeClassName
})`
    ${({ theme }) => theme.flexRowNoWrap}
    align-items: left;
    border-radius: 3rem;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.text2};
    font-size: 1rem;
    width: fit-content;
    margin: 0 12px;
    font-weight: 500;
  
    /* &.${activeClassName} {
      border-radius: 12px;
      font-weight: 600;
      color: ${({ theme }) => theme.text1};
    } */
  
    :hover,
    :focus {
    
    }
  `

const HeaderRow = styled(RowFixed)`
    width: 100%;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

export default function Footer() {
    return (
        <>
            <HeaderWrapper>
                <HeaderLinks>
                    <div className="footer">
                        <div className="button-wrapper">
                            <StyledNavLink to={'/home'} >
                                <div className="button">
                                    <img src={wallet} alt="" className="image"></img>
                                    <p className='span'>Wallet</p>
                                </div>
                            </StyledNavLink>
                            <StyledNavLink to={'/applications'} >
                                <div className="button">
                                    <img src={application} alt="" className="image"></img>
                                    <p className='span'>Applications</p>
                                </div>
                            </StyledNavLink>
                            <StyledNavLink id={`stake-nav-link`} to={'/uni'}>
                                <div className="button">
                                    <img src={account} alt="" className="image"></img>
                                    <p className='span'>Account</p>
                                </div>
                            </StyledNavLink>
                        </div>
                    </div>
                </HeaderLinks>
            </HeaderWrapper>
        </>
    )
}
