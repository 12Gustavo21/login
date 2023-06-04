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
    background-color: #F7FAFC;
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
    border-bottom: 0.1rem solid #CACACA;
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
    padding-left: .5rem;
    display: flex;

    div {
        width: 100%;
        height: 100%;
    }

    span{
        width: 100%;
        height: 100%;

        &::before {
            content: "";
            display: block;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background-color: #3F3D56;
        }
    }
`;

export const Menu = styled.div`
    width: 20%;
    height: 70%;
    padding-right: .5rem;
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
            background-color: #3F3D56;
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
                background-color: #E4E4E4;
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
    justify-content: space-around;
    align-items: flex-end;
    flex-direction: column;
    gap: 2rem;
`;

export const Person = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 3rem;

    figure {
        width: 5rem;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        background-color: #F0F0F0;
        border-radius: 100%;
        padding: .6rem;
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

    section {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;

    }

    p {
        font: 400 1em/1.25em 'Merriweather', sans-serif;
        color: #1A202C;
    }

    h1 {
        font: 700 1.5em/2em 'Merriweather', sans-serif;
        color: #1A202C;
    }

    @media (width <= 1115px) {
        section {
            width: 90%;
        }
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
    }

    div label {
        width: 100%;
        height: 30%;
        font: 400 1em/1.2em 'Lato', sans-serif;
        color: #1A202C;
    }

    div input {
        width: 100%;
        height: 60%;
        border: 0.05rem solid #E8E8E8;
        border-radius: 0.4rem;
        font: 400 0.9em/1em 'Merriweather', sans-serif;
        color: #1A202C;
        padding-left: 1rem;
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
    gap: .5rem;

    label, #remember {
        cursor: pointer;
    }
    
    label {
        font: 400 .9em/1em 'Lato', sans-serif;
        color: #1A202C;
    }
    
    #remember {
        width: 1rem;
        height: 1rem;
        caret-color: #04C45C;
        background: #F7FAFC;
        border: 0.05rem solid #E8E8E8;
    }
`;

export const ForgetPassword = styled.section`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
        font: 400 .9em/1em 'Lato', sans-serif;
        color: #2B6CB0;
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
        height: 40%;
        border: none;
        border-radius: 0.4rem;
        font: 700 1em/1.2em 'Lato', sans-serif;
        color: #F2F2F2F2;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.25);
    }
`;

export const EnterButton = styled.button`
    background-color:  #04C45C;
    
    &:hover {
        background-color: #04B556;
    }

    &:active {
        background-color: #04A24F;
    }
`;

export const GoogleButton = styled.button`
    background-color: #1A202C;
    gap: 1rem;

    &:hover {
        background-color: #2D3748;
    }

    &:active {
        background-color: #1E293B;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font: 400 .9em/1em 'Lato', sans-serif;

    p {
        color: #1A202C;
    }

    a {
        color: #2B6CB0;
        text-decoration: none;
    }
`;