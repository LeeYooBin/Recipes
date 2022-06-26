import './style.css';
import Header from "../../components/Header";
import Recipes from '../../components/Recipes';
import About from '../../components/About/Index';

export default function Main(){
    return(
        <>
            <Header />
            <Recipes />
            <About />
        </>
    );
}