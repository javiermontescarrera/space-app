import styled from "styled-components";

const Title = styled.h2`
    font-size: 2rem;
    color: #7B78E5;
    text-align: ${props => props.$align ? props.$alig : "left"};
`;

export default Title;