import styled from "styled-components";

export const Content = styled.div``;
export const Button1 = styled.button`
  &:focus {
    outline: 0;
  }

  &:hover {
    animation: rotate-30-ci 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @keyframes rotate-30-ci {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(-15deg);
      }
    }
  }
`;
export const Button2 = styled.button`
  &:focus {
    outline: 0;
  }

  &:hover {
    animation: rotate-30-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @keyframes rotate-30-cw {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(15deg);
      }
    }
  }
`;
