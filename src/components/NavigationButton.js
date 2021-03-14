import styled from 'styled-components';

const NavigationButton = styled.button`
  box-shadow: 0px 0px 16px #9E9E9E;
  cursor: pointer;
  animation: fade-in 5s 1;
  opacity: 12%;
  color: #513f57;
  position: fixed;
  width: 100%;
  bottom: 12px;
  margin: auto;
  padding: 5px;

  :hover {
    box-shadow: 0px 0px 24px #9E9E9E;
    opacity: 42%;
    font-weight: 900;
  }

  :focus {
    outline: none;
    box-shadow: 0px 0px 24px #9E9E9E;
    opacity: 42%;
    font-weight: 900;
  }

  @keyframes fade-in {
    0% {
      opacity: 0%
    }
    100% {
      opacity: 12%
    }
  }
`;

export default NavigationButton;