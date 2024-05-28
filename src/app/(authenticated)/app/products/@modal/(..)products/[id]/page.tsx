import Image from "next/image";
import { getProduct } from "../../../actions";
import { Modal } from "react-bootstrap";
import Home from "@/app/assets/img/house.png";

export default async function ProductDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getProduct(id);

  return (
    <Modal show={true} className="fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
          </div>
          <div className="modal-body">
            <Image alt={product.name} src={Home} height={200} width={400} />

            <div className="bg-white p-4">
              <h3>${product.price}</h3>
              <h3>{product.shortDesc}</h3>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
