import React from 'react';
import {Menu} from 'antd';
import {SettingOutlined} from '@ant-design/icons';
import {NavLink} from 'react-router-dom';
import './navbar.css';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const {SubMenu}=Menu;

const Navbar=()=>{
	return(
	<div>
		<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
			<SubMenu key="sub1" icon={<SettingOutlined />} title="Dynamical Data">
			  <Menu.Item key='1'>
					<NavLink to='/data/stat'>
						Static Information
					</NavLink>
			  </Menu.Item>
			  <Menu.Item key="4">
					<NavLink to='/data/pybx'>
					    Data
					</NavLink>
			  </Menu.Item>
			</SubMenu>
			{/*<SubMenu key='sub2' icon={<DesktopOutlined />} title='Отчеты по измерениям'>*/}
			 {/*<Menu.Item key='21'>*/}
					{/*<NavLink to='/config/customer'>*/}
					   {/*Внеполосные излучения */}
					{/*</NavLink>*/}
			 {/*</Menu.Item>*/}
			{/*</SubMenu>*/}
          </Menu>
	</div>
	)
};

export default Navbar;
