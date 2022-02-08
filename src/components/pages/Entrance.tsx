

import useSound from "use-sound"
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";


import { OpeningDoor } from "../atoms/animations/openingDoor"
import doorOpeningSound from '../../soundSource/door_opening.mp3'
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

export const Entrance = () => {

  const [isOpen, switchIsOpen] = useState(false)
  const [play] = useSound(doorOpeningSound)

  const onClickEnter = () => {
    play()
    switchIsOpen(false)

    //1秒後に/homeに画面遷移
    setTimeout(() => {
      //最初入る時だけ/kazutoshiyamaguchi_homepageを付け加える
      window.location.href = '/kazutoshiyamaguchi_homepage/home';
    }, 1000);

  }


  useEffect(() => switchIsOpen(true), [])

  return (
    <>
      <TransitionStyle >

        <div className="modal-wrapper">
          <CSSTransition
            classNames="modal"
            in={isOpen}
            timeout={4000}
            unmountOnExit>
            <ModalStyle>
              <Box>
                <OpeningDoor onClick={onClickEnter} text="tap to enter" />

              </Box>
            </ModalStyle>

          </CSSTransition>
        </div>
        <CSSTransition
          classNames="overlay"
          in={isOpen}
          timeout={4000}
          unmountOnExit>
          <OverlayStyle />
        </CSSTransition>
      </TransitionStyle>
    </>
  );
}
const TransitionStyle = styled.div`

.open{
  cursor: pointer;
  font-size: 40px;  
  font-weight: bold;
}

.modal-wrapper{
  position: absolute;
  margin-top:200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  .modal-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  .modal-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.3s, transform 1s;
  }

  .modal-exit {
    opacity: 1;
  }

  .modal-exit-active {
    opacity: 0;
    transition: opacity 0.3s, transform 2s;
    transform: scale(0.9);
  }
}

.overlay-enter {
  opacity: 0;
}

.overlay-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 0.3s, transform 2s;
}

.overlay-exit {
  opacity: 1;
}

.overlay-exit-active {
  opacity: 0;
  transition: opacity 0.3s, transform 2s;
}
`;

// モーダルのスタイル
const ModalStyle = styled.div`
padding: 100px;
background-color: #ffffff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.content{
  font-size: 40px;
  font-weight: bold;
}

.close{
  cursor: pointer;
  margin: 50px 0 0;
}
`

// オーバーレイのスタイル
const OverlayStyle = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: fixed;
z-index: -1;
top: 0;
left: 0;
width: 100%;
height: 100%;

`;



