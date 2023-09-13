import styled from "styled-components";

const Container = styled.header`
	background-color: #d73835;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 12.375rem;
`;

const Content = styled.div`
	width: 100%;
	max-width: 76rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.page-details{
		h1{
			color: #fff;
			font-size: 2rem;
		}

		h2{
			color: #fff;
			font-weight: 400;
			font-size: 1rem;
			opacity: .9;
			margin-top: .375rem;
		}
	}
`;

export {
	Container,
	Content,
};
