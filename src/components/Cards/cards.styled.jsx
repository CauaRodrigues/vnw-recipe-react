import styled from "styled-components";

export const Container = styled.section`
	padding: 24px 0;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	h2 {
		font-size: min(2rem, 6vw);
		text-transform: uppercase;
		letter-spacing: 2px;
		font-weight: 600;
	}
`;

export const Content = styled.div`
	width: 80%;
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: center;
	gap: 1rem;
`;

export const Card = styled.div`
	background-color: #ffffff;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.card--info {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
