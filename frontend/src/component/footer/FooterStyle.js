import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: black;
position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`



export const FooterLink = styled.a`
color: #fff;
text-decoration: none;
font-color: #fff

`;

