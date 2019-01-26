import styled from '@emotion/styled';
import posed from 'react-pose';
import { mobileScreens } from '../screens';

const ModalImage = posed(styled.img`
  width: 100%;
  position: relative;
  height: 100%;
  object-fit: cover;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  border-bottom: 4px solid #000;
  ${mobileScreens.xs} {
    height: auto;
  }
  ${mobileScreens.md} {
    height: 100%;
    border: none;
  }
`)({
  unhovered: {
    filter: 'blur(0px)',
    opacity: 1
  },
  hovered: {
    filter: 'blur(5px)',
    opacity: 0.5
  }
});
console.log(ModalImage);
export default ModalImage;
