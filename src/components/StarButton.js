import styled from 'styled-components';

const StarButton = styled.button`
  position: absolute;
  border-radius: 13px;
  box-shadow: 0px 0px 16px #9E9E9E;
  z-index: 2;
  cursor: pointer;
  animation: fade-in 5s 1;
  opacity: 66%;

  :hover {
    box-shadow: 0px 0px 24px #9E9E9E;
    opacity: 100%;
    font-size:20px
    border-radius: 20px;
  }

  :focus {
    outline: none;
    box-shadow: 0px 0px 32px #9E9E9E;
    opacity: 100%;
  }

  @keyframes fade-in {
    0% {
      opacity: 0%
    }
    100% {
      opacity: 66%
    }
  }
`;

export default StarButton;