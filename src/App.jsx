import { useState, useEffect } from "react";

import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";

import banner from "./assets/banner.png";
import fotos from "./fotos.json";
import fotosPopulares from "./fotos-populares.json";

const GradientBackground = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, 
  #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(fotos);
  const [popularPhotos] = useState(fotosPopulares);
  const [chosenPhoto, setChosenPhoto] = useState(null);
  const [chosenTag, setChosenTag] = useState(0);
  const [searchText, setSearchText] = useState("");

  const whenFavoriteSwitch = (photo) => {
    setGalleryPhotos(
      galleryPhotos.map((gP) => {
        return { ...gP, favorita: (gP.id === photo.id) ? !gP.favorita : gP.favorita };
      })
    );
    if (photo.id === chosenPhoto?.id)
      setChosenPhoto({ ...chosenPhoto, favorita:!chosenPhoto.favorita })
  };

  useEffect(() => {
    let filteredPhotos = fotos;
    if (chosenTag != 0)
      filteredPhotos = fotos.filter((f) => f.tagId === chosenTag);
    
    const searchTextTrimmed = searchText.trim();
    if (searchTextTrimmed != "")
      filteredPhotos = filteredPhotos.filter((f) => f.titulo.includes(searchTextTrimmed));
    
    setGalleryPhotos(filteredPhotos);
  }, [ chosenTag, searchText ]);

  return (
    <>
      <GradientBackground>
        <GlobalStyles />
        <AppContainer>
          <Header setSearchText={setSearchText}/>
          <MainContainer>
            <SideBar />
            <Content>
              <Banner 
                text= "La galería más completa del espacio" 
                backgroundImage={banner}
              />
              <Gallery 
                photos= {galleryPhotos} 
                popularPhotos= {popularPhotos}
                chosenTag= {chosenTag}
                setChosenTag= { setChosenTag }
                whenPhotoSelected= { photo=> setChosenPhoto(photo) } 
                whenFavoriteSwitch= { whenFavoriteSwitch }
              />
            </Content>
          </MainContainer>
          <Footer />
        </AppContainer>
        <ModalZoom 
          photo={chosenPhoto}
          whenFavoriteSwitch= { whenFavoriteSwitch }
          whenClose={() => setChosenPhoto(null)}
        />
      </GradientBackground>
    </>
  )
}

export default App;
