import { useState } from 'react';
import OrderModal from "../OrderModal";
import { Board, OrdersContainer } from "./styles";

import { OrdersProps } from "../../types/Order";

interface OrdersBoardProps {
	icon: string;
	title: string;
	orders: OrdersProps[];
}

const OrdersBoard = ({ icon, title, orders }: OrdersBoardProps) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [SelectedOrder, setSelectedOrder] = useState<OrdersProps | null>(null);

	const handleOpenOrderModal = (order: OrdersProps) => {
		setIsModalVisible(true);
		setSelectedOrder(order);
	};

	const handleCloseModal = () => {
		setIsModalVisible(false);
		setSelectedOrder(null);
	}

	return (
		<Board>
			<OrderModal visible={isModalVisible} order={SelectedOrder} onClose={handleCloseModal}/>

			<header>
				<span>{icon}</span>
				<strong>{title}</strong>
				{orders.length > 0 && ( <span>({orders.length})</span> )}
			</header>
			{orders.length > 0 && (
				<OrdersContainer>
					{orders.map((order) => (
						<button key={order._id} type="button" onClick={() => handleOpenOrderModal(order)}>
							<strong>Mesa {order.table}</strong>
							<span>{order.products.length} itens</span>
						</button>
					))}
				</OrdersContainer>
			)}
		</Board>
	);
};

export default OrdersBoard;
