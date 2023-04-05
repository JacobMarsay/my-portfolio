import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const HomeControlsContainer = styled.div `
    position: relative;
    button {
        position: fixed;
        top: 10%;
        right: 2%;
        padding: 1rem;
        border-radius: 50%;
        border:none;
        background: #252525;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 9997;
        &:hover, &:active{
            svg{
                color:#088f8f;
            }
        }
        &:hover {
           background: #252525 !important;
        }
        svg{
            color: rgb(190,190,190);
        }
    }
`

const HomeButton = () => {
    return(
        <HomeControlsContainer>
            <Link to="/">
                <button>
                    <FontAwesomeIcon icon={faHouse} size="2x"/>
                </button>
            </Link>
        </HomeControlsContainer>
    )
}

export default HomeButton;