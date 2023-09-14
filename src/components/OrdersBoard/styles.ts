import styled from 'styled-components';

const Board = styled.div`
  flex: 1;
	padding: 1rem;
	border: 1px solid rgba(204, 204, 204, .4);
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	> header{
		padding: .5rem;
		font-size: .875rem;
		display: flex;
		align-items: center;
		gap: .5rem;
	}
`;

const OrdersContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 1.5rem;

	button{
		background: #fff;
		border: 1px solid rgba(204, 204, 204, .4);
		height: 8rem;
		border-radius: .5rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: .25rem;

		strong{
			font-weight: 500;
		}

		span{
			font-size: .875rem;
			color: #666;
		}

		& + button{
			margin-top: 1.5rem;
		}
	}
`;

export {
	Board,
	OrdersContainer
};
