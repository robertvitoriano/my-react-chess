import styled from 'styled-components';


const getBackgroundColor = ({
  isColumnEven,
  rowPosition,

}) => {
  if (isColumnEven) {
    return rowPosition.number % 2 === 0 ? 'black' : 'white'
  }
  return rowPosition.number % 2 === 0 ? 'white' : 'black'
}

export const Container = styled.div`
 background-color: ${(props) => getBackgroundColor({
  isColumnEven: props.isColumnEven,
  rowPosition: props.rowPosition,
})};
 width: 90px;
 height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: 'relative';
`;

export const SelectionLayer = styled.div`
background-color: orange;
width: 90px;
 height: 90px;
 display: ${(props) => props.isPossibleMove ? 'block' : 'none'};
position:absolute ;
opacity: 50%;
`
