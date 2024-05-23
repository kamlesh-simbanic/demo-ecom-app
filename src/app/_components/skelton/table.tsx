"use client";

import { Placeholder } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function TableSkelton() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {Array.from({ length: 5 }).map((_, idx) => (
            <th key={idx}>
              <Placeholder as="span" animation="wave">
                <Placeholder xs={12} />
              </Placeholder>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 5 }).map((_, rowIdx) => (
          <tr key={rowIdx}>
            {Array.from({ length: 5 }).map((_, colIdx) => (
              <td key={colIdx} className="bg-light">
                <Placeholder as="span" animation="wave">
                  <Placeholder xs={12} />
                </Placeholder>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
