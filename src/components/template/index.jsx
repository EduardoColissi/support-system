/* eslint-disable react/prop-types */
import {
  ArrowLeftOutlined,
  PoweroffOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Layout, Menu, Space } from "antd";
import { useContext } from "react";
import { TbDashboard } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";
import Small_logo from "../../assets/Small_logo.png";
import "./style.css";

const { Header, Sider, Content } = Layout;

const Template = (props) => {
  const backToLastPage = useNavigate(-1);
  const { logoutAuth } = useContext(AuthContext);

  const items = [
    {
      key: "1",
      label: "Configurações do usuário",
      onClick: () => {
        logoutAuth();
      },
      icon: <PoweroffOutlined />,
    },
    {
      key: "2",
      label: "Logout",
      onClick: () => {
        logoutAuth();
      },
      icon: <CiSettings />,
    },
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
        maxHeight: "100vh",
        minWidth: "100vw",
        maxWidth: "100vw",
      }}
    >
      <Sider
        trigger={null}
        width={190}
        style={{
          backgroundColor: "#008c3a",
          height: "auto",
        }}
      >
        <div className="logo">
          <img src={Small_logo} alt="logo" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          style={{
            backgroundColor: "#008c3a",
            color: "#008c3a",
            height: "auto",
          }}
        >
          <Menu.Item key="1" icon={<TbDashboard />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<MdOutlineSupportAgent />}>
            <Link to="/dashboard">Chamados</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<HiOutlineDocumentReport />}>
            <Link to="/dashboard">Relatórios</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<CiSettings />}>
            <Link to="/dashboard">Configurações</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: "#12a04d",
          }}
        >
          <Space className="trigger">
            <ArrowLeftOutlined
              className="trigger"
              style={{ color: "#fff", float: "left" }}
              onClick={() => backToLastPage(-1)}
            />
          </Space>
          <Dropdown
            trigger={["click"]}
            menu={{ items }}
            autoAdjustOverflow={true}
          >
            <Space className="trigger" style={{ float: "right" }}>
              <UserOutlined
                style={{
                  color: "#fff",
                }}
              />
            </Space>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: 10,
            padding: 15,
            minHeight: 650,
            marginBottom: 0,
            // background: "#f23f",
            overflowY: "auto",
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Template;
