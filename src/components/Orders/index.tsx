import OrdersBoard from "../OrdersBoard";
import { Container } from "./styles";

import { orders } from "../../mocks/orders";

const Orders = () => {
	return (
		<Container>
			<OrdersBoard
				icon='🕓'
				title='Fila de espera'
				orders={orders.filter((order) =>  order.status === "WAITING" )}
			/>
			<OrdersBoard
				icon='👩‍🍳'
				title='Em preparação'
				orders={orders.filter((order) =>  order.status === "IN PRODUCTION" )}
			/>
			<OrdersBoard
				icon='✅'
				title='Pronto!'
				orders={orders.filter((order) =>  order.status === "DONE" )}
			/>
		</Container>
	);
};

export default Orders;
