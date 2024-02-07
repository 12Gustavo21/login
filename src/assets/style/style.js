import styled from "styled-components";

export const Content = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IlustrationAside = styled.aside`
  width: 50%;
  height: 100vh;
  background-color: #f7fafc;
  display: grid;
  place-items: center;

  @media (width <= 768px) {
    display: none;
  }
`;

export const Ilustration = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const IlustrationContent = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IlustrationHeader = styled.section`
  width: 60%;
  height: 5%;
  border-bottom: 0.1rem solid #cacaca;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (width <= 1024px) {
    width: 90%;
  }
`;

export const Dots = styled.div`
  width: 22%;
  height: 40%;
  padding-left: 0.5rem;
  display: flex;

  div {
    width: 100%;
    height: 100%;
  }

  span {
    width: 100%;
    height: 100%;

    &::before {
      content: "";
      display: block;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #3f3d56;
    }
  }
`;

export const Menu = styled.div`
  width: 20%;
  height: 70%;
  padding-right: 0.5rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  span {
    width: 45%;
    height: 100%;

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 0.25rem;
      border-radius: 0.3rem;
      background-color: #3f3d56;
    }
  }
`;

export const LinesBox = styled.section`
  width: 100%;
  height: 15%;
  padding-top: 2rem;

  div {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  div span {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(1)::before {
      content: "";
      width: 55%;
    }

    &:nth-child(2)::before {
      content: "";
      width: 85%;
    }

    &::before {
      content: "";
      display: block;
      height: 0.85rem;
      border-radius: 0.3rem;
      background-color: #e4e4e4;
    }
  }

  @media (width <= 1024px) {
    div span {
      width: 50%;
    }
  }
`;

export const Persons = styled.section`
  width: 100%;
  height: 30%;
`;

export const PersonBox = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Person = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  row-gap: 1rem;

  figure {
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    background-color: #f0f0f0;
    border-radius: 100%;
    padding: 0.6rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  figure:nth-child(2) img {
    width: 110%;
    height: 110%;
  }

  @media (width <= 1024px) {
    width: 100%;
  }
`;

export const MainAside = styled.aside`
  width: 50%;
  height: 100vh;
  display: grid;
  place-items: center;

  @media (width <= 768px) {
    width: 100%;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  section {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  p {
    font: 500 1.25rem/1.375rem "Merriweather", sans-serif;
    color: #1a202c;
  }

  h1 {
    font: 600 2rem/2.1875rem "Merriweather", sans-serif;
    color: #1a202c;
  }

  @media (width <= 1115px) {
    section {
      width: 90%;
    }
  }

  @media (width <= 768px) {
    justify-content: flex-start;
    padding: 2rem 0;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;

  @media (width <= 768px) {
    padding: 0 0 2rem 0;
    height: 150%;
  }
`;

export const MainContent = styled.section`
  width: 50%;
  height: 100%;

  @media (width <= 1115px) {
    width: 90%;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (width <= 768px) {
    gap: 0;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  div label {
    width: 100%;
    height: 30%;
    font: 600 1.125rem/2.1875rem "Archivo", sans-serif;
    color: #1a202c;
  }

  div input {
    width: 100%;
    height: 60%;
    max-height: 4rem;
    border: 0.05rem solid #e8e8e8;
    border-radius: 0.4rem;
    font: 400 1rem/1.0625rem "Merriweather", sans-serif;
    color: #1a202c;
    outline: none;
    padding-left: 1rem;
  }

  @media (width <= 768px) {
    div {
      height: 40%;
    }
  }
`;

export const RememberContainer = styled.section`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Remember = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RadioBox = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  label,
  #remember {
    cursor: pointer;
  }

  label {
    font: 500 1rem/1.0625rem "Archivo", sans-serif;
    color: #1a202c;
  }

  #remember {
    width: 1rem;
    height: 1rem;
  }
`;

export const ForgetPassword = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    font: 500 1rem/1.0625rem "Archivo", sans-serif;
    color: #1e9e6a;
    text-decoration: none;
  }
`;

export const ButtonBox = styled.section`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  button {
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 0.4rem;
    font: 600 1rem/1.375rem "Archivo", sans-serif;
    color: #f2f2f2f2;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease;
  }

  @media (width <= 768px) {
    height: 20%;
    justify-content: center;
    gap: 1rem;
  }
`;

export const EnterButton = styled.button`
  background-color: #1e9e6a;

  &:hover {
    background-color: #0d8050;
  }

  &:active {
    background-color: #1e9e6a;
  }
`;

export const GoogleButton = styled.button`
  background-color: #1a202c;
  gap: 1rem;

  &:hover {
    background-color: #2d3748;
  }

  &:active {
    background-color: #1e293b;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font: 500 1rem/1.36rem "Archivo", sans-serif;

  p {
    color: #1a202c;
  }

  a {
    color: #1e9e6a;
    text-decoration: none;
  }

  @media (width <= 768px) {
    height: 100%;
    align-items: center;
  }
`;
