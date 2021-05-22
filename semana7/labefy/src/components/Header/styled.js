import styled from "styled-components";

export const Logo = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 3.5rem;
  margin: 5rem 0;
  animation: tracking-in-contract-bck 1s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  @keyframes tracking-in-contract-bck {
    0% {
      letter-spacing: 1em;
      transform: translateZ(400px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;
