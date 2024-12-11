import styled from "styled-components";
import TextField from "../TextField";

import PropTypes from "prop-types";

const StyledHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */

    img {
        width: 212px;
    };
`;
const Header = ({ searchText, setSearchText }) => {
    return (
        <StyledHeader>
            <img src="img/logo.png" alt="logo" />
            <TextField searchText = {searchText} setSearchText={setSearchText}/>
        </StyledHeader>
    )
};

Header.propTypes = {
    searchText: PropTypes.string,
    setSearchText: PropTypes.func,
};

export default Header;