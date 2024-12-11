import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const SideBar = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    <NavigationItem 
                        activeIcon="icons/home-active.png"
                        inactiveIcon="icons/home-inactive.png"
                        active
                    >
                        Home
                    </NavigationItem>
                    <NavigationItem 
                        activeIcon="icons/most-visited-active.png"
                        inactiveIcon="icons/most-visited-inactive.png"
                    >
                        Más visitados
                    </NavigationItem>
                    <NavigationItem
                        activeIcon="icons/me-gusta-activo.png"
                        inactiveIcon="icons/me-gusta-inactivo.png"
                    >
                        Más Me Gusta
                    </NavigationItem>
                    <NavigationItem
                        activeIcon="icons/nuevas-activo.png"
                        inactiveIcon="icons/nuevas-inactivo.png"
                    >
                        Nuevas
                    </NavigationItem>
                    <NavigationItem
                        activeIcon="icons/sorprendeme-activo.png"
                        inactiveIcon="icons/sorprendeme-inactivo.png"
                    >
                        Sorpréndame
                    </NavigationItem>
                </StyledList>
            </nav>
        </aside>
    )
}

export default SideBar;