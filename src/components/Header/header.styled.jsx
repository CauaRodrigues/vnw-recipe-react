import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	height: max-content;
	background-image: url(/background.png);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

export const Content = styled.header`
	padding: 12px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const Logo = styled.figure`
	flex: 1;
`;

export const Menu = styled.header`
	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;

		li {
			text-transform: uppercase;
			letter-spacing: 2px;
			padding: 12px;

			&.button {
				border: 3px solid #373737;
			}
		}
	}
`;

export const Banner = styled.header`
	width: 100vw;
	min-height: 85vh;
	display: flex;
	align-items: center;
	justify-content: center;

	h1 {
		font-size: min(7rem, 12vw);
		text-transform: uppercase;
		letter-spacing: 10px;
		font-weight: 700;
	}
`;
