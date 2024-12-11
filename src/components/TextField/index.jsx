import styled from "styled-components";
import search from './search.png'

import PropTypes from "prop-types";

const StyledContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const Input = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`;

const MagnifierIcon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px !important;
    height: 38px;
`;

const TextField = ({ searchText, setSearchText }) => {
    return (
        <StyledContainer>
            <Input 
                type="text" 
                placeholder="Buscar..." 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            /> 
            <MagnifierIcon src={search} alt="magnifier-icon" />
        </StyledContainer>
    )
}

TextField.propTypes = {
    searchText: PropTypes.string,
    setSearchText: PropTypes.func,
}

export default TextField;