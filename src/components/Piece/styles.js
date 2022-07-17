import styled from 'styled-components';

const getContainerBackground = ({
  isHover,
  isSelected
}) => {
  if (isSelected) {
    return '#00ff00';
  }
  if (isHover) {
    return 'orange';
  }
}

export const Container = styled.div`
 background-color: ${(props) => getContainerBackground({
  isHover: props.isHover,
  isSelected: props.isSelected
})};
 width: 100%;
 height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;