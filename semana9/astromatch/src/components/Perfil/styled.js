import styled from "styled-components";

export const Load = styled.div`
  height: 2rem;
  animation: rotate-in-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite
    both;
  @keyframes rotate-in-center {
    0% {
      transform: rotate(-360deg);
      opacity: 0;
    }
    100% {
      transform: rotate(0);
      opacity: 1;
    }
  }
`;
export const Load2 = styled.p`
  animation: tracking-out-expand 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    infinite both;
  @keyframes tracking-out-expand {
    0% {
      opacity: 1;
    }
    60% {
      opacity: 0.8;
    }
    100% {
      letter-spacing: 1em;
      opacity: 0;
    }
  }
`;
