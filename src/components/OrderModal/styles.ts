import styled from "styled-components";

const Overlay = styled.div`
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, .8);
	backdrop-filter: blur(.2813rem);
	width: 100%;
	height: 100%;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalBody = styled.div`
	background: #fff;
	width: 30rem;
	border-radius:.5rem;
	padding: 2rem;

	header{
		display: flex;
		align-items: center;
		justify-content: space-between;

		strong{
			font-size: 1.5rem;
		}

		button{
			border: 0;
			background: transparent;
			line-height: 0;
		}
	}

	.status-container{
		margin-top: 2rem;

		small{
			font-size: .875rem;
		}

		div{
			margin-top: .5rem;
			display: flex;
			align-items: center;
			gap: .5rem;
		}
	}
`;

const OrderDetails = styled.div`
	margin-top: 2rem;

	> strong {
		font-weight: 500;
		font-size: .875rem;
		opacity: .8;
	}


	.order-itens{
		margin-top: 1rem;

		.item{
			display: flex;

			& + .item{
				margin-top: 1rem;
			}

			img{
				border-radius: .375rem;
			}
		}

		.quantity {
			font-size: .875rem;
			color: #666;
			display: block;
			min-width: 1.25rem;
			margin-left: .75rem;
		}

		.product-details{
			margin-left: .25rem;

			strong{
				display: block;
				margin-bottom: .25rem;
			}

			span{
				font-size: .875rem;
				color: #666;
			}
		}
	}

	.total{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1.5rem;

		> span{
			font-weight: 500;
			font-size: .875rem;
			opacity: .8;
		}
	}
`;


const Actions = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 2rem;

	.primary{
		background: #333333;
		border-radius: 3rem;
		border: 0;
		color: #fff;
		padding: .75rem 1.50rem;
		display: flex;
		align-items: center;
		gap: .5rem;
	}

	.secondary {
		padding: .75rem 1.50rem;
		color: #d73835;
		font-weight: bold;
		border: 0;
		background: transparent;
		margin-top: .75rem;
	}
`;

export {
	Overlay,
	ModalBody,
	OrderDetails,
	Actions
};
