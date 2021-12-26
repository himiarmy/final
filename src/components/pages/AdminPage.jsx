import React from "react";
import { Row, Col } from "antd";

import AddBrandModal from "../AddBrandModal/AddBrandModal";
import AddProductModal from "../AddProductModal/AddProductModal";
import AdminBrandsList from "../AdminBrandsList/AdminBrandsList";
import AdminProductsList from "../AdminProductsList/AdminProductsList";

const AdminPage = () => {
  return (
    <div className="container" style={{ marginTop: "17vh" }}>
      <Row>
        <Col span={12}>
          <Col span={22}>
            <AddBrandModal />
            <AdminBrandsList />
          </Col>
        </Col>
        <Col span={12}>
          <Col span={22}>
            <AddProductModal />
            <AdminProductsList />
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default AdminPage;