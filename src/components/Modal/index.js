import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import styled from "@emotion/styled";

const ModalComponent = ({ movie, openModal, setOpenModal }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(openModal);
  }, [movie, openModal]);

  const handleOk = () => {
    setIsModalVisible(false);
    setOpenModal(false);
  };

  return (
    <Modal
      title={movie?.Title}
      style={{ maxWidth: "300px" }}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleOk}
      footer={[
        <Button key="ok" type="primary" onClick={handleOk}>
          Ok
        </Button>,
      ]}
    >
      <StyledImage alt={movie?.Title} src={movie?.Poster} />
      <StyledImageMobile alt={movie?.Title} src={movie?.Poster} />
    </Modal>
  );
};

export default ModalComponent;

const StyledImage = styled.img`
  display: none;
  @media (min-width: 992px) {
    width: 100%;
    display: block;
    margin: 0 auto;
  }
`;

const StyledImageMobile = styled.img`
  display: block;
  width: 100%;

  @media (min-width: 992px) {
    display: none;
  }
`;
