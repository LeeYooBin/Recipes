import * as S from './style';
import Navbar from "../Navbar";
import logo from '../../img/logo.png';

export default function Header(){
    return(
        <>
            <S.Wrapper>
                <S.Header>
                    <Navbar/>
                    <S.Title>Recipes</S.Title>
                    <S.Logo src={logo} alt="Logo" className='logo'/>
                </S.Header>
            </S.Wrapper>
        </>
    );
}