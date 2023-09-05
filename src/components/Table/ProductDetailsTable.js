import React from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'Quantity',
        dataIndex: 'quantity',
    },
    {
        title: 'Price Per Piece',
        dataIndex: 'price',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: '1-Color Print Cost',
        dataIndex: 'price',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: '2-Color Print Cost',
        dataIndex: 'price',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: 'Embroidery',
        dataIndex: 'price',

    },
];
const data = [
    {
        key: '1',
        quantity: '50 pcs',
        price: '168.50 SEK',
    },
    {
        key: '2',
        quantity: '100 pcs',
        price: '268.50 SEK',
    },
    {
        key: '3',
        quantity: '250 pcs',
        price: '368.50 SEK',
    },
    {
        key: '4',
        quantity: '500 pcs',
        price: '468.50 SEK',
    },
];
const ProductDetailsTable = () => <Table ProductDetailsTable columns={columns} dataSource={data} />;
export default ProductDetailsTable;