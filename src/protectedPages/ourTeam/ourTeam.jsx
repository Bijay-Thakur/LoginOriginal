import React, { useState } from "react";
import "./styles.css";
import { Modal } from "antd";
import OurTeamDisplay from "./ourTeamDisplay";
import OurTeamForm from "./ourTeamForm";
import GoTOTop from "../../components/goToTop/goToTop";

const OurTeam = () => {
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

  return (
    <div className="row adminPage">
      <div className="col-md-12 " style={{ marginBottom: "100px" }}>
        <h2>Our Team Page</h2>
      </div>
      <div className="col-md-12">
        <button onClick={showModal} className="buttonNormal">
          Add New Team Member
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
        <OurTeamForm
          setIsModalVisible={setIsModalVisible}
          title="Add new Member"
          imageId="newMember"
          method="POST"
        />
      </Modal>
      <OurTeamDisplay />
      <GoTOTop />
    </div>
  );
};

export default OurTeam;
