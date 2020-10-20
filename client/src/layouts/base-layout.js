import React from 'react';
import 'antd/dist/antd.css';
import './base-layout.css';
import Navbar from '../components/navbar/navbar';
import Routes from '../components/routes/routes';

import { Layout,Row,Col, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default class BaseLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
        <Layout className='BaseLayout'>
					{/*<Header className="main-header"*/}
							{/*style={{position: 'fixed', zIndex: 1, width: '100%',height:'50px'}}>*/}
						{/*<Row>*/}
							{/*<Col*/}
								 {/*className="logo">*/}
									{/*<img src={Logo}*/}
                     {/*style={{width:'50px',height:'30px'}}*/}
										 {/*alt="Администрирование СПО АУ"/>*/}
							{/*</Col>*/}
						{/*</Row>*/}
					{/*</Header>*/}
          <Content style={{marginTop:'100px',overflow:'initial'}}>
            <Layout>
             <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <Navbar collapsed={this.state.collapsed}/>  
            </Sider>
            <Content style={{ margin: '0 16px' }}>
                <Col span={24}
                     className='main-content'>
                    <Routes />
                </Col>
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
};


