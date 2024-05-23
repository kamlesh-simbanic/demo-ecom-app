import Input from "@/app/_components/input";
import TableComponent from "@/app/_components/table";
import { CartItem, orderViewCartColumns } from "@/app/assets/cart";
import { Row, Col } from "react-bootstrap";

const OrderContent = ({
  address,
  items,
  readOnly,
  handleChange = () => ({}),
  validations = {},
}: any) => {
  return (
    <>
      <Row>
        <Col lg={3} sm={12}>
          <Input
            label="House No"
            name="houseNo"
            value={address.houseNo}
            onChange={handleChange}
            error={validations["houseNo"]}
            readOnly={readOnly}
            disabled={readOnly}
          />
        </Col>
        <Col lg={9} sm={12}>
          <Input
            label="Street"
            name="street"
            value={address.street}
            onChange={handleChange}
            error={validations["street"]}
            readOnly={readOnly}
            disabled={readOnly}
          />
        </Col>
        <Col lg={6} sm={12}>
          <Input
            label="City"
            name="city"
            value={address.city}
            onChange={handleChange}
            error={validations["city"]}
            readOnly={readOnly}
            disabled={readOnly}
          />
        </Col>
        <Col lg={6} sm={12}>
          <Input
            label="Province"
            name="province"
            value={address.province}
            onChange={handleChange}
            error={validations["province"]}
            readOnly={readOnly}
            disabled={readOnly}
          />
        </Col>
        <Col lg={6} sm={12}>
          <Input
            label="Postal Code"
            name="postalCode"
            value={address.postalCode}
            onChange={handleChange}
            error={validations["postalCode"]}
            readOnly={readOnly}
            disabled={readOnly}
          />
        </Col>
      </Row>

      <Row className="p-2">
        <h3>Order Items</h3>
        <TableComponent<CartItem>
          rows={items}
          columns={orderViewCartColumns}
          showPagination={false}
        />
      </Row>
    </>
  );
};

export default OrderContent;
