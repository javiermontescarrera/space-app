import propTypes from "prop-types";
import styled from "styled-components";
import Title from "../../Title";

const PhotosColumn = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;

    h2 {
        margin: 26.56px 0 0;
        text-align: center;
    }

    div {
        display: flex;
        flex-flow: row wrap;
        gap: 24px;
    }

    img {
        width: 212px;
        border-radius: 20px;
    }
`;

const StyledButton = styled.button`
    background-color: transparent;
    border: 2px solid #C98CF1;
    border-radius: 10px;
    color: #FFF;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 20px;
    text-align: center;
    padding: 12px 20px;
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    cursor: pointer;
`;

const Populars = ({ popularPhotos }) => {
    return (
        <PhotosColumn>
            <Title>Populares</Title>
            {
                popularPhotos.map((photo) => {
                    return (
                        <img key = { photo.id } src={ photo.path } alt={ photo.titulo } />
                    );}
                )
            }
            <StyledButton>Ver más</StyledButton>
        </PhotosColumn>
    )
};

Populars.propTypes = {
    popularPhotos: propTypes.array,
};

export default Populars;