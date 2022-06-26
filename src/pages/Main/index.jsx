import './style.css';
import Header from "../../components/Header";
import Recipes from '../../components/Recipes';
import About from '../../components/About/Index';
import Subscribe from '../../components/Subscribe';
import Footer from '../../components/Footer';

export default function Main(){
    return(
        <>
            <Header />
            <Recipes />
            <About />
            <Subscribe />
            <Footer />
        </>
    );
}