import styled from "styled-components";

export const Body = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95vh;
  animation: enterAnime 0.3s forwards;

  @keyframes enterAnime {
    from {
      opacity: 0;
      transform: translate3d(-35px, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const Form = styled.form`
  width: min(40%, 560px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 95px;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.25));

  button,
  input {
    color: #fff;
    font-size: 1.6rem;
    padding: 12px 16px;
    border: none;
    background: none;
    outline: none;
    border: 2px solid #fff;
  }

  input {
    width: 100%;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border-right: none;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
  }

  button {
    border-left: none;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    width: min(60%, 300px);

    input {
      font-size: 1.4rem;
      width: 100%;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    button {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    button img {
      width: 24px;
    }
  }
`;

export const CityTemp = styled.div`
  width: min(85%, 1060px);
  margin: 0 auto;
  position: relative;
  top: -25%;
  display: flex;
  flex-direction: column;

  p {
    letter-spacing: 0.2rem;
    font-size: 1.8rem;
    color: #fff;
  }

  span {
    font-size: 5rem;
    line-height: 1;
    font-weight: 800;
    color: #fff;
  }

  .condition {
    font-size: 1.6rem;
  }
`;

export const DetailsContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  width: min(40%, 560px);
  margin: 0 auto;
  border-radius: 6px;

  @media screen and (max-width: 767px) {
    width: min(50%, 300px);
    padding: 0 10px;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  color: #fff;
  gap: 10px;

  .details_item {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .details_item span {
    font-size: 1.8rem;
    font-weight: 500;
  }

  .details_item p {
    font-size: 1.6rem;
    font-weight: 300;
  }

  @media screen and (max-width: 767px) {
    padding: 1rem;
    overflow-y: scroll;
    .details_item span {
      font-size: 1.2rem;
      font-weight: 500;
    }

    .details_item p {
      font-size: 1.2rem;
      font-weight: 300;
    }
  }
`;

export const ModalError = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 500;
    color: #fff;
  }

  a {
    font-size: 1.6rem;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    display: block;
    background: #1e1e1f;
    padding: 12px 24px;
    margin-top: 20px;
    border-radius: 3px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  a:hover {
    color: #d2d2d2;
    transform: scale(1.05);
  }
`;
