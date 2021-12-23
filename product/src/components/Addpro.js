import { Form, Button, Table } from "react-bootstrap";
import { useState, createRef } from 'react';

export default function AddProduct() {
    // typeOfData [stateData, stateUpdateFunction] = useState(initialData)
    let initialValue = [];
    const [products, setProduct] = useState(initialValue);
    const formData = createRef();
 
    const add = (event)=>{
        event.preventDefault();
         
        const newProduct = {
            product_name: formData.current.product_name.value,
            price: formData.current.p_code.value,
            qty: Number(formData.current.qty.value)
        }
        //console.log(newProduct);
        // add a new product inside products array
        setProduct([...products,newProduct]);
        //console.log(products);
    }
    // increment qty value by 1
    const increQty = (event)=>{
        //console.log(event.target.value)
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty + 1;
        setProduct([...products])
    }
    // decrement qty value by 1
    const decreQty = (event)=>{
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty - 1;
        setProduct([...products])
    }
    return (
        <div>
            <Form onSubmit={add} ref={formData}>
            <Form.Group controlId="formBasicProductName">
                <Form.Label>Product Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" name="product_name"/>
            </Form.Group>

            <Form.Group controlId="formBasicPrice">
                <Form.Label>Product code:</Form.Label>
                <Form.Control type="number" placeholder="Product code" name="p_code"/>
            </Form.Group>

            <Form.Group controlId="formBasicQty">
                <Form.Label>Quantity:</Form.Label>
                <Form.Control type="number" placeholder="Quantity" name="qty"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Product
            </Button>
            </Form>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Product Name:</th>
                    <th>Product code</th>
                    <th>Quantity</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.product_name}</td>
                                <td>{item.p_code}</td>
                                <td>{item.qty}</td>
                                <td>
                                    <Button variant="success" onClick={event=>increQty(event)} value={index}>+</Button>
                                    <Button variant="danger" onClick={event => decreQty(event)} value={index}>-</Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </Table>
        </div>
    )
}

