import { auth } from "@/app/_helpers/server";
import { Product } from "@/app/assets/products";
import dynamic from "next/dynamic";
import { Col, Row } from "react-bootstrap";

const ProductCard = dynamic(
  () => import("@/app/_components/products/productCard")
);

const ProductList = ({ products }: { products: Product[] }) => {
  const isAuthenticated = auth.isAuthenticated();

  return (
    <Row>
      {products.length > 0 ? (
        products.map((product: Product) => (
          <>
            <Col md={3} lg={3} sm={6} className="mb-2">
              <ProductCard
                product={product}
                isAuthenticated={isAuthenticated}
              />
            </Col>
          </>
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
