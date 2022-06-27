import * as S from '../../style/Style';

export default function Subscribe(){
    return(
        <>
            <S.Subscriber id='subscribe'>
                <S.SubTitle>SUBSCRIBE</S.SubTitle>
                <S.SubscriberText>Sign up for newsletter</S.SubscriberText>
                <S.EmailInput type="email" placeholder='Your email'/>
                <S.SubmitButton type='submit'>SUBMIT</S.SubmitButton>
            </S.Subscriber>
        </>
    );
}