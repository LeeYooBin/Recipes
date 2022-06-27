import * as S from '../../style/Style';
import aboutImg from '../../img/colher.png';

export default function About(){
    return(
        <>
            <S.About id='about'>
                <S.AboutImage src={aboutImg} alt="" />
                <S.AboutWrapper>
                    <S.SubTitle>ABOUT</S.SubTitle>
                    <S.Line className='line'></S.Line>
                    <S.AboutText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, 
                        tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero 
                        velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend 
                        tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. 
                        Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum 
                        quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque 
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum 
                        nisl ante, et ultricies sapien facilisis aliquam.
                    </S.AboutText>
                </S.AboutWrapper>
            </S.About>
        </>
    );
}