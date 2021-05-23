import styled from "styled-components";

export const Musics = styled.div`
  justify-content: center;
  align-items: center;
  background: #242528;
  width: 30rem;
  border-radius: 0.5rem;
  margin: 0 auto;
  overflow: hidden;
  animation: fade-in-bottom 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @keyframes fade-in-bottom {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  h2 {
    padding: 1rem;
  }
  div {
    background: #242528;
    display: flex;
    flex-direction: column;

    label {
      display: block;
      margin: 2rem;
      margin-bottom: 1rem;
      color: rgba(229, 238, 255, 0.6);
    }
    input {
      width: 25rem;
      margin: 0 0.5rem 0 2rem;
      padding: 0.5rem;
      display: block;
      background: transparent;
      border: none;
      border-bottom: 1px solid rgba(246, 245, 255, 0.1);
      color: #ffffff;
      :focus {
        outline: none;
      }
    }
    button {
      display: flex;
      margin: 2rem auto;
      color: #0ff;
      padding: 1rem;
      background-color: rgba(229, 238, 255, 0.2);
      border-radius: 0.8rem;
      border: none;
      font-size: 1rem;
      :hover {
        background: rgba(229, 238, 255, 0.1);
      }
    }
  }
`;
export const ListMusic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom: 1rem;
  }
  div {
    background: #242528;
    width: 80vw;
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
    border-radius: 0.8rem;
    margin: 1rem;
    align-items: center;
    overflow: hidden;
    audio {
      width: 20vw;
      height: 3vh;
    }
    p {
      padding: 1rem;
      span {
        display: block;
        font-size: 1.3rem;
      }
    }
    button {
      margin: 0 1rem;
      color: white;
      background: transparent;
      border: none;
    }
  }
`;
