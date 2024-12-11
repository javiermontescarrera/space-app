import styled from "styled-components";

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const StyledListItem = styled.li`
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    gap: 1rem;

    color: ${
        props => props.$active ? "#7B78E5" : "#D9D9D9"
    };

    font-family: ${ 
        props => props.$active ? "GandhiSansBold" : "GandhiSansRegular" 
    };
`;

const NavigationItem = ({ children, activeIcon, inactiveIcon, active=false }) => {
    return (
        <StyledListItem $active={active}>
            <img src={active ? activeIcon : inactiveIcon} />
            {children}
        </StyledListItem>
    );
};

export default NavigationItem;