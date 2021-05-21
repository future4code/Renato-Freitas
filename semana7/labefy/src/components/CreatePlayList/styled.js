import styled from "styled-components";

export const ContainerPlayList = styled.div`
  justify-content: center;
  align-items: center;
  background: #242528;
  width: 30rem;
  height: 25rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
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

  p {
    margin: 2rem;
    font-size: 1.5rem;
  }
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
`;
