import * as S from '../../style/Style';
import Navbar from "../Navbar";
import logo from '../../img/logo.png';

export default function Header(){
    return(
        <>
            <S.Header>
                <S.HeaderWrapper>
                    <Navbar/>
                    <S.Title>RECIPES</S.Title>
                    <S.Logo src={logo} alt="Logo" className='logo'/>
                </S.HeaderWrapper>
            </S.Header>
        </>
    );
}