import { mobileScreens } from '../screens';
import posed from 'react-pose';
import styled from '@emotion/styled';

export const CardContainer = posed(styled.div`
  ${mobileScreens.sm} {
    margin: 0 auto;
    width: 60%;
  }
`)({
  visible: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  hidden: {
    delay: 300
  }
});
