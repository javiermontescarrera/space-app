import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "../Gallery/Image";
import IconButton from "../IconButton";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const StyledDialog = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: none;
    width: 1156px;
    display: flex;
    justify-content: center;
    align-items: center;
    figure {
        border: 1px solid #fafafa;
    }
    form {
        button {
            position: absolute;
            top: 20px;
            right: 70px;
        }
    }
`;

const ModalZoom = ({photo, whenClose, whenFavoriteSwitch}) => {

    return (
        <>
            {
                photo &&
                <>
                    <Overlay />
                    <StyledDialog open={!!photo} onClose={whenClose}>
                        <Image 
                            photo={ photo } 
                            expanded 
                            whenZoomRequested={() => {}}
                            whenFavoriteSwitch= { whenFavoriteSwitch }
                        />
                        <form method="dialog">
                            <IconButton formMethod="dialog">
                                <img 
                                    src="/icons/cerrar.png"
                                    alt="cerrar"
                                />
                            </IconButton>
                        </form>
                    </StyledDialog>
                </>
            }
        </>
    );
};

ModalZoom.propTypes = {
    photo: PropTypes.json,
    whenClose: PropTypes.func,
    whenFavoriteSwitch: PropTypes.func,
};

export default ModalZoom;