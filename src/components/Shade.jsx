import styled from '@emotion/styled';
import posed from 'react-pose';

const Shade = posed(styled.div`
  position: fixed;
  background: #000a;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  filter: blur(5px);
  z-index: 999;
`)({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});
export default Shade;
