import styled from "styled-components";
import tags from "./tags.json";
import PropTypes from "prop-types";

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    gap: 24px;
    margin-top: 56px;
`;

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;

const Tag = styled.button`
    font-size: 1.5rem;
    color: #FFFFFF;
    background:rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid ${ props => props.isSelected ? "#C98CF1" : "transparent"};
    &:hover {
        border-color: #C98CF1;
    }
`;

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`;

const Tags = ( { chosenTag, setChosenTag } ) => {
    return (
        <TagsContainer>
            <TagTitulo>Buscar por tags:</TagTitulo>
            <Div>
                {
                    tags.map((tag) => {
                        return (
                            <Tag 
                                key={tag.id} 
                                onClick={() => setChosenTag(tag.id)}
                                isSelected={tag.id === chosenTag}
                            >
                                {tag.titulo}
                            </Tag>
                        )
                    })
                }
            </Div>
        </TagsContainer>
    )
}

Tags.propTypes = {
    chosenTag: PropTypes.number,
    setChosenTag: PropTypes.func,
}

export default Tags;