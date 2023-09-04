import React from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'Particulars',
        dataIndex: 'particulars',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
    },
    {
        title: 'Price Per Piece',
        dataIndex: 'price',
    },
    {
        title: 'Sub Total',
        dataIndex: 'subTotal',
    },
];
const data = [
    {
        key: '1',
        particulars: 'Article',
        quantity: '25',
        price: '196.00 SEK',
        subTotal: '4,900.00 SEK',
        test: 'Hello Expand'
    },
    {
        key: '2',
        particulars: '2-Color Print',
        quantity: '50',
        price: '196.00 SEK',
        subTotal: '4,900.00 SEK',
        test: 'Hello Expand'
    },
    {
        key: '3',
        particulars: 'Print Start Fee',
        quantity: '100',
        price: '196.00 SEK',
        subTotal: '4,900.00 SEK',
        test: 'Hello Expand'
    },
    {
        key: '4',
        particulars: 'Express Delivery (7 days)',
        quantity: '200',
        price: '196.00 SEK',
        subTotal: '4,900.00 SEK',
        test: 'Hello Expand'
    },
];


const expandedRowRender = () => {
    const columns = [
        {
            title: '',
            dataIndex: 'particulars',
            key: '1',
        },
        {
            title: '',
            dataIndex: 'quantity',
            key: '2',
        },
        {
            title: '',
            dataIndex: 'price',
            key: '3',
        },
        {
            title: '',
            dataIndex: 'subTotal',
            key: '4',
        },

    ];
    const data = [
        {
            key: '1',
            particulars: 'Size - S',
            quantity: '25',
            price: '196.00 SEK',
            subTotal: '4,900.00 SEK',
            test: 'Hello Expand'
        },
        {
            key: '2',
            particulars: 'Size - M',
            quantity: '50',
            price: '196.00 SEK',
            subTotal: '4,900.00 SEK',
            test: 'Hello Expand'
        },
        {
            key: '3',
            particulars: 'Size - L',
            quantity: '100',
            price: '196.00 SEK',
            subTotal: '4,900.00 SEK',
            test: 'Hello Expand'
        },
        {
            key: '4',
            particulars: 'Size - XL',
            quantity: '200',
            price: '196.00 SEK',
            subTotal: '4,900.00 SEK',
            test: 'Hello Expand'
        },
    ];
    return <Table className='ExpandedTable' columns={columns} dataSource={data} pagination={false} />;
};


const ProductCartTable = () => {
    return (

        <Table
            className='ProductCartTable'
            columns={columns}
            expandable={{
                expandedRowRender,
                defaultExpandedRowKeys: ['0'],
            }}
            dataSource={data}
        />

    )

};

export default ProductCartTable;