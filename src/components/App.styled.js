import styled from 'styled-components';

const Card = styled.div`
    height: '100vh',
    fontSize: 40,                                                                        
    color: '#010101'
`;

const Title = styled.h2`
  font-size: 34px;
  text-shadow: #fc0 1px 0 10px;
`;
const InputName = styled.label`
  margin: 10px;
  padding: 4px;
  font-size: 24px;
  font-style: italic;
  text-shadow: #fa0 1px 0 10px;
`;

export { Card, Title, InputName };
