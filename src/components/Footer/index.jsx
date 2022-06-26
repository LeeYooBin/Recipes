import * as S from './style';
import instagram from '../../img/instagram.png';
import twitter from '../../img/twitter.png';
import facebook from '../../img/facebook.png';
import pinterest from '../../img/pinterest.png';

export default function Footer(){
    return(
        <S.Wrapper>
            <S.Main>    
                <S.Menu>
                    <li><S.Link href="#">About</S.Link></li>
                    <li><S.Link href="#">Recipes</S.Link></li>
                    <li><S.Link href="#">Subscribe</S.Link></li>
                </S.Menu>
                <S.SocialMedias>
                    <a href="#"><S.Icons src={instagram} alt="" /></a>
                    <a href="#"><S.Icons src={twitter} alt="" /></a>
                    <a href="#"><S.Icons src={facebook} alt="" /></a>
                    <a href="#"><S.Icons src={pinterest} alt="" /></a>
                </S.SocialMedias>
            </S.Main>
            <S.copyright>
                <p>
                    Layout produzido por Vai na Web para fins exclusivamente educacionais. 
                </p>
            </S.copyright>
        </S.Wrapper>
    );
}