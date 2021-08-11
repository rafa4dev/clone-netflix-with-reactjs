import React from 'react';
import * as S from './styled';

const Header = ({ black }) => {
    return (
        <S.HeaderContainer className={black ? 'black' : ''}>
            <S.HeaderLogo>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Logo do Netflix" />
                </a>
            </S.HeaderLogo>
            <S.HeaderUser>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                </a>
            </S.HeaderUser>
        </S.HeaderContainer>
    );
}

export default Header;