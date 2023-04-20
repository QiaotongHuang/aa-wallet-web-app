import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import Row, { RowFixed } from '../Row'

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

export default function Header() {
    return (
        <>
            <HeaderWrapper>
                <HeaderRow>
                    <HeaderLinks>
                        <StyledNavLink to={'/home'}>
                            Wallet
                        </StyledNavLink>
                        <StyledNavLink to={'/applications'} >
                            Applications
                        </StyledNavLink>
                        <StyledNavLink id={`stake-nav-link`} to={'/uni'}>
                            Account
                        </StyledNavLink>
                    </HeaderLinks>
                </HeaderRow>
            </HeaderWrapper>

        </>
    )
}
