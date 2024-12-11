import styled from "styled-components";

import PropTypes from "prop-types";

const StyledFooter = styled.footer`
    height: 72px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #04244F;
    margin-top: 48px;

    span {
        color: #FFFFFF;
        font-size: 1.25rem;
        margin-right: 24px;
    }
`;

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0px 18px 24px;
    width: 163px;
`;

const StyledLink = styled.a`
    img {
        width: 32.31px;
        height: 35px;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <StyledContainer>
                <StyledLink href="https://www.facebook.com/javier.montes.2177">
                    <img src="social/facebook.png" alt="facebook" />
                </StyledLink>
                <StyledLink href="https://x.com/JavMC21">
                    <img src="social/twitter.png" alt="twitter" />
                </StyledLink>
                <StyledLink href="https://www.instagram.com">
                    <img src="social/instagram.png" alt="instagram" />
                </StyledLink>
            </StyledContainer>
            <span>Desarrollado por Javier Montes</span>
        </StyledFooter>
    )
};

Footer.propTypes = {
    searchText: PropTypes.string,
    setSearchText: PropTypes.func,
};

export default Footer;