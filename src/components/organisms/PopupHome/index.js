import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Icon from '../../atoms/Icon'

const animationOverlay = css`
  @keyframes closeOverlay {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    99% {
      opacity: 0;
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes openOverlay {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    1% {
      transform: scale(1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const Overlay = styled.div`
  ${animationOverlay};

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.redDarkerAlpha66};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.s24};
  z-index: 100;

  @media ${({ theme }) => theme.device.md} {
    padding: ${({ theme }) => theme.spacing.s48};
  }

  @media ${({ theme }) => theme.device.lg} {
    padding: ${({ theme }) => theme.spacing.s64};
  }

  ${(props) =>
    props.showPopup
      ? `
    transform-origin: 50% 20%;
    animation: .4s openOverlay ease;
    animation-fill-mode: forwards;
  `
      : `
    transform-origin: 50% 20%;
    animation: .4s closeOverlay ease;
    animation-fill-mode: forwards;
  `}
`

const animationContent = css`
  @keyframes close {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  }

  @keyframes open {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const PopupContent = styled.div`
  ${animationContent}
  position: relative;

  ${(props) =>
    props.showPopup
      ? `
    transform-origin: 50% 0;
    animation: .5s open ease;
    animation-fill-mode: forwards;
  `
      : `
    transform-origin: 50% 20%;
    animation: .4s close ease;
    animation-fill-mode: forwards;
  `}
`

const IconContainer = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.s16};
  right: ${({ theme }) => theme.spacing.s16};
`

const PopupHomeComponent = ({ src, alt }) => {
  const [showPopup, setShowPopup] = useState(true)

  const handleClickClose = (event) => {
    if (event.target.tagName.toLowerCase() === 'img') return

    setShowPopup(false)
  }

  const handleKeyPress = (event) => {
    if (event.keyCode !== 27) return

    setShowPopup(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <Overlay onClick={(e) => handleClickClose(e)} showPopup={showPopup}>
      <PopupContent showPopup={showPopup}>
        <img src={src} alt={alt} />
        <IconContainer>
          <Icon
            name="close"
            color="transparent"
            onClick={(e) => handleClickClose(e)}
          />
        </IconContainer>
      </PopupContent>
    </Overlay>
  )
}

export default PopupHomeComponent
