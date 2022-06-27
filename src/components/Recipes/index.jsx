import * as S from '../../style/Style';
import img1 from '../../img/foto1.png';
import img2 from '../../img/foto2.png';
import img3 from '../../img/foto3.png';


export default function Recipes(){
    return(
        <>
            <S.Recipes id='recipes'>
                <S.SubTitle>LATEST RECIPES</S.SubTitle>
                <S.Line />
                <S.RecipesWrapper>
                    <S.Recipe href='#'>
                        <S.RecipeImage src={img1} alt="recipe"/>
                        <S.RecipeInfo>
                            <S.RecipeLine />
                            <h2>Red Velvet Cake</h2>
                        </S.RecipeInfo>
                    </S.Recipe>

                    <S.Recipe href='#'>
                        <S.RecipeImage src={img3} alt="recipe"/>
                        <S.RecipeInfo className='recipe-info'>
                            <S.RecipeLine />
                            <h2>Margherita Pizza</h2>
                        </S.RecipeInfo>
                    </S.Recipe>

                    <S.Recipe href='#'>
                        <S.RecipeImage src={img2} alt="recipe"/>
                        <S.RecipeInfo>
                            <S.RecipeLine />
                            <h2>Peanut Smoothie</h2>
                        </S.RecipeInfo>
                    </S.Recipe>
                </S.RecipesWrapper>
            </S.Recipes>
        </>
    );
}