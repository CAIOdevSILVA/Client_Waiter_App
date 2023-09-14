import { ModalBody, Overlay, OrderDetails, Actions } from "./styles"

import closeIcon from "../../assets/images/close-icon.svg"
import { OrdersProps } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";

interface OrderModalProps{
	visible: boolean;
	order: OrdersProps | null;
	onClose: () => void
}

const OrderModal = ({ visible, order, onClose }: OrderModalProps) => {
	if(!visible || !order){
		return null;
	}

	const totalPrice = order.products.reduce((acc, { product, quantity }) => {
		return acc += (product.price *quantity)
	}, 0)


	return (
		<Overlay>
			<ModalBody>
				<header>
					<strong>Mesa {order.table}</strong>
					<button type="button" onClick={onClose}>
						<img src={closeIcon} alt="Icone de fechamento do modal" />
					</button>
				</header>

				<div className="status-container">
					<small>Status do Pedido</small>
					<div>
						<span>
							{order.status === 'WAITING' && '🕓'}
							{order.status === 'IN PRODUCTION' && '👩‍🍳'}
							{order.status === 'DONE' && '✅'}
						</span>
						<strong>
							{order.status === 'WAITING' && 'Fila de espera'}
							{order.status === 'IN PRODUCTION' && 'Em preparação'}
							{order.status === 'DONE' && 'Pronto!'}
						</strong>
					</div>
				</div>

				<OrderDetails>
					<strong>Itens</strong>

					<div className="order-itens">
						{order?.products.map(({_id, product, quantity }) => (
							<div className="item" key={_id}>
								<img
									src={`http://localhost:3001/uploads/${product.imagePath}`}
									alt={product.name}
									width={48}
									height={40}
								/>
								<span className="quantity">{quantity}x</span>

								<div className="product-details">
									<strong>{product.name}</strong>
									<span>{formatCurrency(product.price)}</span>
								</div>
							</div>
						))}
					</div>

					<div className="total">
						<span>Total</span>
						<strong>{formatCurrency(totalPrice)}</strong>
					</div>
				</OrderDetails>

				<Actions>
					<button type="button" className="primary">
						<span>👩‍🍳</span>
						<strong>Iniciar Produção</strong>
					</button>

					<button type="button" className="secondary">
						Cancelar Pedido
					</button>
				</Actions>
			</ModalBody>
		</Overlay>
	)
}

export default OrderModal
