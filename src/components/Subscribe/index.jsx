import * as S from './style';

export default function Subscribe(){
    return(
        <S.Wrapper>
            <S.Title>SUBSCRIBE</S.Title>
            <S.Text>Sign up for newsletter</S.Text>
            <S.Input type="email" placeholder='Your email'/>
            <S.Submit type='submit'>SUBMIT</S.Submit>
        </S.Wrapper>
    );
}