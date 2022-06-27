import * as S from '../../style/Default';
import Header from "../../components/Header";
import Recipes from '../../components/Recipes';
import About from '../../components/About/Index';
import Subscribe from '../../components/Subscribe';
import Footer from '../../components/Footer';

export default function Main(){
    return(
        <S.Body>
            <S.GlobalStyle />
            <Header />
            <Recipes />
            <About />
            <Subscribe />
            <Footer />
        </S.Body>
    );
}