import styled from "styled-components";
import PropTypes from "prop-types";
import IconButton from "../../IconButton";

const StyledFigure = styled.figure`
    width: ${(props) => (props.$expanded ? "90%" : "370px")};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0px 0px;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: #FFFFFF;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: "GandhiSansBold";
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 1rem;
        }
    }
`

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Image = ({ photo, expanded= false, whenZoomRequested, whenFavoriteSwitch }) => {

    const favoriteIcon = photo.favorita ? "/icons/favorito-activo.png" : "/icons/favorito.png";

    return (
        <StyledFigure $expanded={expanded}>
            <img src={photo.path} alt={photo.titulo} />
            <figcaption>
                <h3>{photo.titulo}</h3>
                <StyledFooter>
                    <h4>{photo.fuente}</h4>
                    <IconButton>
                        <img 
                            src={ favoriteIcon }
                            alt="favorito" 
                            onClick={() => whenFavoriteSwitch(photo)}
                        />
                    </IconButton>
                    {   
                        !expanded &&
                        <IconButton 
                            aria-hidden="true" 
                            onClick={() => whenZoomRequested(photo)}
                        >
                            <img src="/icons/expandir.png" alt="expandir"/>
                        </IconButton>
                    }
                </StyledFooter>
            </figcaption>
        </StyledFigure>
    );
};

Image.propTypes = {
    photo: PropTypes.json,
    expanded: PropTypes.bool,
    whenZoomRequested: PropTypes.func,
    whenFavoriteSwitch: PropTypes.func,
};

export default Image;