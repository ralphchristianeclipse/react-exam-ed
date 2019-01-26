import styled from '@emotion/styled';
const FlexContainer = styled.div`
  display: flex;
  flex-direction ${props => props.direction || 'row'};
  flex-wrap ${props => props.wrap || 'nowrap'};
  justify-content: ${props => props.justifyContent || 'initial'};
  align-content: ${props => props.alignContent || 'initial'};
`;

export default FlexContainer;
