import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Input, Select, DatePicker, Modal, Button, TableColumnProps, Table, Switch } from 'antd';
import { OrdersApi } from '../../api';
import { OrderDto, CustomerDto, MasterDto, ServiceDto } from '../../common/dto/OrderDto';
import { OrderStatus } from '../../common/enums/OrderStatus';
import { useForm } from "antd/es/form/Form";

interface OrderFormProps {
    order?: OrderDto;
    onCreate: (data: any) => void;
    onEdit: (data: any) => void;
}


function OrderForm ({order, onCreate, onEdit}: OrderFormProps) {
const [form] = useForm();

    const isCreateMode = !order;

    const handleSubmit = (data: any) => {
        console.log(data);
        if (isCreateMode) {
            onCreate(data);
        } else {
            onEdit(data);
        }
    };

    return (
        <Form form={form} onFinish={handleSubmit}>
            <Form.Item name="name" label="Имя">
                <Input />
            </Form.Item>

            <Form.Item required name="phone" label="Номер телефона">
                <Input />
            </Form.Item>

            <Form.Item name="masterId" label="Мастер">
                <Select>
                    <Select.Option>Краснова Ирина</Select.Option>
                    <Select.Option>Калилова Жанна</Select.Option>
                    <Select.Option>Киселева Алина</Select.Option>
                    <Select.Option>Иванова Елена</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item name="serviceId" label="Услуга">
                <Select>
                    <Select.Option>Услуга</Select.Option>                   
                </Select>
            </Form.Item>

            <Form.Item name="visitDate" label="Дата записи">
                <DatePicker />
            </Form.Item>

            <Form.Item>
                <Button type="primary" onClick={form.submit}>
                    {isCreateMode ? 'Добавить' : 'Сохранить'}
                </Button>
            </Form.Item>
        </Form>
    )
}

export function OrdersPage() {
    const [orders, setOrders] = useState<OrderDto[]>([]);
    const [status, setStatus] = useState(OrderStatus.Opened);

    const create = (data: any) => {
        OrdersApi.create(data)
            .then((createOrder) => setOrders(orders.concat(createOrder)));
    }

    const columns: TableColumnProps<OrderDto>[] = [
        {
            title: 'Дата визита',
            dataIndex: 'visitDate',
            key: 'visitDate'
        },
        {
            title: 'Клиент',
            dataIndex: 'customer',
            key: 'customer',
            render: (customer: CustomerDto) => {
                return `${customer.surName} ${customer.firstName}`;
            }
        },
        {
            title: 'Мастер',
            dataIndex: 'master',
            key: 'master',
            render: (master: MasterDto) => master.fullName
        },
        {
            title: 'Услуга',
            dataIndex: 'service',
            key: 'service',
            render: (service: ServiceDto) => service.name
        },
    ];

    useEffect (() => {
        OrdersApi.getAll(status).then(setOrders);
    }, [status]);

    return (
        <>
            <header>
                <h1>Записи на услуги</h1>
                
                <Switch 
                    checked={status === OrderStatus.Opened} 
                    onChange={(checked) => setStatus(checked ? OrderStatus.Opened : OrderStatus.Closed)} />
            </header>
            
            <Table columns={columns} dataSource={orders} />

            <OrderForm onCreate={create} onEdit={() => {}} />
        </>
    )
}
