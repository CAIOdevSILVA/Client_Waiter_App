import { OrdersProps } from "../types/Order";

export const orders: OrdersProps[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '123',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1694462197972-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1694718417966-coca-cola.png',
          price: 7,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f5'
      }
    ],
  },
  {
    _id: '6372e48cbcd195b0d3d0f759',
    table: '568',
    status: 'DONE',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1694462197972-quatro-queijos.png',
          price: 40,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f4'
      }
    ],
  },
  {
    _id: '6372e48cbcd195b0d3d0f759',
    table: '698',
    status: 'DONE',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1694462197972-quatro-queijos.png',
          price: 40,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1694462197972-quatro-queijos.png',
          price: 40,
        },
        quantity: 1,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
    ],
  },
  {
    _id: '6372e48cbcd195b0d3d0f775',
    table: '986',
    status: 'IN PRODUCTION',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1694462197972-quatro-queijos.png',
          price: 40,
        },
        quantity: 1,
        _id: '6372e48cbcd195b0d3d0f7f4'
      }
    ],
  },
];
