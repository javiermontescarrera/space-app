import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Populars from "./Populars";
import Image from "./Image";
import PropTypes from "prop-types";

const GalleryContainer = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 34px;
`;

const FlowingSection = styled.section`
    flex-grow: 1;
`;

const ImagesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    gap: 24px;
`;


const Gallery = ({ 
    photos= [], 
    popularPhotos= [],
    chosenTag,
    setChosenTag,
    whenPhotoSelected,
    whenFavoriteSwitch,
}) => {
    return (
        <>
            <Tags chosenTag= { chosenTag } setChosenTag= { setChosenTag }/>
            <GalleryContainer>
                <FlowingSection>
                    <Title>Navegue por la galería</Title>
                    <ImagesContainer>
                        {
                            photos.map((photo) => {
                                return (
                                    <Image 
                                        whenZoomRequested= { whenPhotoSelected }
                                        whenFavoriteSwitch= { whenFavoriteSwitch }
                                        key= { photo.id }
                                        photo= { photo }
                                    />
                                );}
                            )
                        }
                    </ImagesContainer>
                </FlowingSection>
                <Populars popularPhotos={popularPhotos}/>
            </GalleryContainer>
        </>
    )
};

Gallery.propTypes = {
    photos: PropTypes.array,
    popularPhotos: PropTypes.array,
    chosenTag: PropTypes.object,
    setChosenTag: PropTypes.func,
    whenPhotoSelected: PropTypes.func,
    whenFavoriteSwitch: PropTypes.func,
};

export default Gallery;