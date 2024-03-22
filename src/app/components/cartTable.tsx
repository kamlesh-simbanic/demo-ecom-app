import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

interface CartTableProps {
  products: Product[];
}

const CartTable: React.FC<CartTableProps> = ({ products }) => {
  const handleIncrement = (productId: number) => {
    // Implement your logic to increment quantity
  };

  const handleDecrement = (productId: number) => {
    // Implement your logic to decrement quantity
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>product id</th>
          <th>name</th>
          <th>price</th>
          <th>quantity</th>
          <th>total</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button
                  variant="primary"
                  //   onClick={() => handleDecrement(product.id)}
                >
                  -
                </Button>{" "}
                <span style={{ margin: "0 5px" }}>{product.quantity}</span>{" "}
                <Button
                  variant="primary"
                  //   onClick={() => handleIncrement(product.id)}
                >
                  +
                </Button>
              </div>
            </td>

            <td>{product.total}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CartTable;
