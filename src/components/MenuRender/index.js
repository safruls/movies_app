import React from "react";
import { useHistory } from "react-router";
import { Menu } from "antd";
import { FileSearchOutlined } from "@ant-design/icons";

const MenuRender = () => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push("/");
  };

  return (
    <Menu Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
      <Menu.Item key="1" icon={<FileSearchOutlined />} onClick={onClickHandler}>
        Search Movies
      </Menu.Item>
    </Menu>
  );
};

export default MenuRender;
