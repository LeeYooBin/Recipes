import * as S from '../../style/Style';
import instagram from '../../img/instagram.png';
import twitter from '../../img/twitter.png';
import facebook from '../../img/facebook.png';
import pinterest from '../../img/pinterest.png';

export default function Footer(){
    return(
        <>
            <S.Footer>
                <S.FooterWrapper>    
                    <S.FooterMenu>
                        <li><S.FooterLink href="#about">About</S.FooterLink></li>
                        <li><S.FooterLink href="#recipes">Recipes</S.FooterLink></li>
                        <li><S.FooterLink href="#subscribe">Subscribe</S.FooterLink></li>
                    </S.FooterMenu>
                    <S.SocialMedias>
                        <a href="#"><S.FooterIcons src={instagram} alt="" /></a>
                        <a href="#"><S.FooterIcons src={twitter} alt="" /></a>
                        <a href="#"><S.FooterIcons src={facebook} alt="" /></a>
                        <a href="#"><S.FooterIcons src={pinterest} alt="" /></a>
                    </S.SocialMedias>
                </S.FooterWrapper>
                <S.Copyright>
                    <p>
                        Layout produzido por Vai na Web para fins exclusivamente educacionais. 
                    </p>
                </S.Copyright>
            </S.Footer>
        </>
    );
}