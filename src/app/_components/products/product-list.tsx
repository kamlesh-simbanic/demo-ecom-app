import { auth } from "@/app/_helpers/server";
import { Product } from "@/app/assets/products";
import dynamic from "next/dynamic";
import { Card, Col, Placeholder, Row } from "react-bootstrap";

const ProductCard = dynamic(
  () => import("@/app/_components/products/productCard")
);

const ProductList = ({ products }: { products: Product[] }) => {
  const isAuthenticated = auth.isAuthenticated();

  if (!products || products.length == 0)
    return (
      <div className="d-flex flex-wrap">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Card style={{ width: "18rem", margin: "1rem" }} key={idx}>
            <Card.Img variant="top" as={Placeholder} animation="wave">
              <Placeholder xs={12} style={{ height: "150px" }} />
            </Card.Img>
            <Card.Body>
              <Card.Title as={Placeholder} animation="wave">
                <Placeholder xs={6} />
              </Card.Title>
              <Card.Text as={Placeholder} animation="wave">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );

  return (
    <Row>
      {products.length > 0 ? (
        products.map((product: Product) => (
          <Col md={6} lg={4} xl={3} sm={12} className="p-2 " key={product.id}>
            <ProductCard
              key={product.id}
              product={product}
              isAuthenticated={isAuthenticated}
            />
          </Col>
        ))
      ) : (
        <Col className="p-1">
          <h2 className="text-danger">No Products</h2>
        </Col>
      )}
    </Row>
  );
};

export default ProductList;
