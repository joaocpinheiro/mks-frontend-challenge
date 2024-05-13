import styled from 'styled-components'

export const Skeleton = styled.div`
  width: 217px;
  height: 285px;
  background-color: #f0f0f0;
  animation: pulse 1s infinite alternate;
  margin-top: 18px;
  margin-right: auto;
  margin-left: auto;

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`
