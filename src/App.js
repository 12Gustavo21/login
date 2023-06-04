import React, {useEffect} from "react";

//Images
import personOne from "./assets/img/person-one.svg";
import personTwo from "./assets/img/person-two.svg";
import personThree from "./assets/img/person-three.svg";
import personFour from "./assets/img/person-four.svg";
import personFive from "./assets/img/person-five.svg";
import personSix from "./assets/img/person-six.svg";
import GoogleIcon from "./assets/img/google-icon.svg";

//Styles
import { GlobalStyle } from "./assets/global/style";
import * as S from "./assets/style/style";

//Aos library
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const gallery = [
    {
      id: 1,
      img: personOne,
      alt: "Person One",
    },
    {
      id: 2,
      img: personTwo,
      alt: "Person Two",
    },
    {
      id: 3,
      img: personThree,
      alt: "Person Three",
    },
    {
      id: 4,
      img: personFour,
      alt: "Person Four",
    },
    {
      id: 5,
      img: personFive,
      alt: "Person Five",
    },
    {
      id: 6,
      img: personSix,
      alt: "Person Six",
    },
  ];

  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <S.Content>
      <S.IlustrationAside>
        <S.IlustrationContent data-aos="fade-right" data-aos-duration="2000">
          <S.IlustrationHeader>
            <S.Dots>
              <span></span>
              <span></span>
              <span></span>
            </S.Dots>
            <S.Menu>
              <span></span>
              <span></span>
              <span></span>
            </S.Menu>
          </S.IlustrationHeader>
          <S.LinesBox>
            <div>
              <span></span>
              <span></span>
            </div>
          </S.LinesBox>
          <S.Persons>
            <S.PersonBox>
              <S.Person>
                {gallery.slice(0, 3).map((item) => (
                  <figure key={item.id}>
                    <img src={item.img} alt={item.alt} draggable="false" />
                  </figure>
                ))}
              </S.Person>
              <S.Person>
                {gallery.slice(3, 6).map((item) => (
                  <figure key={item.id}>
                    <img src={item.img} alt={item.alt} draggable="false" />
                  </figure>
                ))}
              </S.Person>
            </S.PersonBox>
          </S.Persons>
        </S.IlustrationContent>
      </S.IlustrationAside>
      <S.MainAside>
        <S.Header data-aos="fade-left" data-aos-duration="2750">
          <section>
            <p>Bem-vindo de volta</p>
          </section>
          <section>
            <h1>Faça login na sua conta</h1>
          </section>
        </S.Header>
        <S.Main data-aos="fade-left" data-aos-duration="2500">
          <S.MainContent>
            <S.Form>
              <S.InputBox data-aos="fade-left" data-aos-duration="2750">
                <div>
                  <label htmlFor="email">Email</label>
                  <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Seu melhor email..." 
                  autoComplete="true"
                  required />
                </div>
                <div>
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Sua senha..."
                    autoComplete="true"
                    required
                  />
                </div>
              </S.InputBox>
              <S.RememberContainer data-aos="fade-left" data-aos-duration="2800">
                  <S.Remember>
                    <S.RadioBox>
                      <input type="radio" name="remember" id="remember" />
                      <label htmlFor="remember">Lembre de mim</label>
                    </S.RadioBox>
                    <S.ForgetPassword>
                      <a href="/">Esqueceu sua senha?</a>
                    </S.ForgetPassword>
                  </S.Remember>
              </S.RememberContainer>
              <S.ButtonBox>
                <S.EnterButton type="submit" data-aos="fade-left" data-aos-duration="2700">Entrar</S.EnterButton>
                <S.GoogleButton data-aos="fade-left" data-aos-duration="2900">
                  <img src={GoogleIcon} alt="Google Icon" /> Ou faça login com o
                  Google
                </S.GoogleButton>
              </S.ButtonBox>
            </S.Form>
          </S.MainContent>
        </S.Main>
        <S.Footer data-aos="fade-left" data-aos-duration="3000">
            <p>
              Não tem uma conta? <a href="/">Cadastre-se</a>
            </p>
        </S.Footer>
      </S.MainAside>
      </S.Content>
    </>
  );
}