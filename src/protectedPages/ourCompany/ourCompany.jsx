import React, { useEffect, useState } from "react";
import "./styles.css";
import { Modal } from "antd";
import OurCompanyDisplay from "./ourCompanyDisplay";
import OurCompanyForm from "./ourCompanyForm";
import GoTOTop from "../../components/goToTop/goToTop";
import OurTeamDisplay from "./ourCompanyDisplay";

const OurCOmpany = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // useEffect(()=>{
  
  // },[])

  return (
    <div className="row adminPage">
      <div className="col-md-12 " style={{ marginBottom: "100px" }}>
        <h2>Our Company Page</h2>
      </div>
      <div className="col-md-12">
        <button onClick={showModal} className="buttonNormal">
          Add New Company
        </button>
      </div>

      <Modal
        title=""
        width={"70%"}
        footer={null}
        header={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <OurCompanyForm
          setIsModalVisible={setIsModalVisible}
          title="Add new company"
          imageId="newCompany"
          method="POST"
        />
      </Modal>
      <OurTeamDisplay />
      <GoTOTop />
    </div>
  );
};

export default OurCOmpany;
