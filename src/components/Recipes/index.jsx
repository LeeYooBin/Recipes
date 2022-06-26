import * as S from './style';
import img1 from '../../img/foto1.png';
import img2 from '../../img/foto2.png';
import img3 from '../../img/foto3.png';


export default function Recipes(){
    return(
        <S.Wrapper id='recipes'>
            <S.Title>LATEST RECIPES</S.Title>
            <S.MainLine />
            <S.Recipes>
                <S.Recipe href='#'>
                    <S.Image src={img1} alt="recipe"/>
                    <S.RecipeInfo>
                        <S.Line />
                        <h2>Red Velvet Cake</h2>
                    </S.RecipeInfo>
                </S.Recipe>

                <S.Recipe href='#'>
                    <S.Image src={img3} alt="recipe"/>
                    <S.RecipeInfo className='recipe-info'>
                        <S.Line />
                        <h2>Margherita Pizza</h2>
                    </S.RecipeInfo>
                </S.Recipe>

                <S.Recipe href='#'>
                    <S.Image src={img2} alt="recipe"/>
                    <S.RecipeInfo>
                        <S.Line />
                        <h2>Peanut Smoothie</h2>
                    </S.RecipeInfo>
                </S.Recipe>
            </S.Recipes>
        </S.Wrapper>
    );
}