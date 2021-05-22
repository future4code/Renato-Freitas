import styled from "styled-components";

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3rem;
    padding: 1rem;
  }
  div {
    width: 70vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    animation: scale-in-ver-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    @keyframes scale-in-ver-bottom {
      0% {
        transform: scaleY(0);
        transform-origin: 0% 100%;
        opacity: 1;
      }
      100% {
        transform: scaleY(1);
        transform-origin: 0% 100%;
        opacity: 1;
      }
    }
    p {
      background: #242528;
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      border-radius: 0.5rem;
      font-size: 1.6rem;
      button {
        margin: 0 1rem;
        color: white;
        background: transparent;
        border: none;
      }
    }
  }
`;
