import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Form,FormControl,Button} from 'react-bootstrap';

const MainNavbar=()=>{
	return(
	<div>
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#home">Pybx client</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
				  <Nav.Link>
					  <NavLink to='/'>Temp Data</NavLink>
		          </Nav.Link>

				  {/*<Nav.Link>*/}
					  {/*<NavLink to='/data/stat'>History Data</NavLink>*/}
				  {/*</Nav.Link>*/}
                  {/*<Nav.Link>*/}
					  {/*<NavLink to="/data/pybx">Pybx Data</NavLink>*/}
				  {/*</Nav.Link>*/}
		
                  {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                    {/*<NavDropdown.Item>Action</NavDropdown.Item>*/}
                    {/*<NavDropdown.Item>Another action</NavDropdown.Item>*/}
                    {/*<NavDropdown.Item>Something</NavDropdown.Item>*/}
                    {/*<NavDropdown.Divider />*/}
                    {/*<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                {/*</NavDropdown>*/}
              </Nav>
              {/*<Form inline>*/}
                {/*<FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                {/*<Button variant="outline-success">Search</Button>*/}
              {/*</Form>*/}
          </Navbar.Collapse>
        </Navbar>
      </header>
		
		{/*<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">*/}
			{/*<SubMenu key="sub1" icon={<SettingOutlined />} title="Dynamical Data">*/}
			  {/*<Menu.Item key='1'>*/}
					{/*<NavLink to='/data/stat'>*/}
						{/*Static Information*/}
					{/*</NavLink>*/}
			  {/*</Menu.Item>*/}
			  {/*<Menu.Item key="4">*/}
					{/*<NavLink to='/data/pybx'>*/}
						{/*Data*/}
					{/*</NavLink>*/}
			  {/*</Menu.Item>*/}
			{/*</SubMenu>*/}
          {/*</Menu>*/}
	</div>
	)
};

export default MainNavbar;
