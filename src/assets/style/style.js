import styled from "styled-components";

export const Body = styled.body`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IlustrationAside = styled.aside`
    width: 50%;
    height: 100%;
    background-color: #F7FAFC;
    display: grid;
    place-items: center;
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
        padding: 0.5rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }
`;

export const MainAside = styled.aside`
    width: 50%;
    height: 100%;
    display: grid;
    place-items: center;
`;