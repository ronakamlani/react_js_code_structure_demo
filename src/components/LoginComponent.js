import React from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

import UserIcon from './icons/UserIcon';
import KeyIcon from './icons/KeyIcon';

import { Row, Col } from 'antd';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		    notice: '',
		    type: 'tab2',
		    autoLogin: true,
		};

		this.handleSubmit = this.handleSubmit.bind(this);

	}
  
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  
  render() {

  	const { getFieldDecorator } = this.props.form;


    return (
      <div className="login-warp">
         <Form onSubmit={this.handleSubmit} className="login-form">
	        <Form.Item>
	          {getFieldDecorator('username', {
	            rules: [{ required: true, message: 'Please input your username!' }],
	          })(
	            <Input
	              prefix={
	              	<UserIcon />
	              }
	              placeholder="Username"
	            />,
	          )}
	        </Form.Item>
	        <Form.Item>
	          {getFieldDecorator('password', {
	            rules: [{ required: true, message: 'Please input your Password!' }],
	          })(
	            <Input
	              prefix={
	              	<KeyIcon />
	              }
	              type="password"
	              placeholder="Password"
	            />,
	          )}
	        </Form.Item>
	        <Form.Item>
	        	<div className="button-box">
		          <a className="login-form-forgot" href="/">
		            Forgot password?
		          </a>
		        	<div className="row" style={{marginTop:30}}>
		        		<div className="col-xs-12 col-md-3">
		        			<div className="login-form-forgot">Login as:</div>
		        		</div>
		        		<div className="col-md col-xs-12">
		        			<div className="box">
		        				<Row type="flex" justify="space-between">
							      	<Col span={4} >
							      		<Button type="default" shape="circle" icon="facebook" size={"large"} className="social-icon" />
									    
							      	</Col>
							      	<Col span={4}>
							      		<Button type="default" shape="circle" icon="twitter" size={"large"} className="social-icon" />
							      	</Col>
							      	<Col span={4}>
							      		<Button type="default" shape="circle" icon="linkedin" size={"large"} className="social-icon" />
							      	</Col>
							      	<Col span={4}>
							      		<Button type="default" shape="circle" icon="google" size={"large"} className="social-icon" />
							      	</Col>
							    </Row>
			        			
			        		</div>
		        		</div>
		        		
		        	</div>
		          <Button type="primary" 
		          	htmlType="submit" 
		          	className="login-form-button"
		          	block
		          	>
		            	<span className="btn__text">Log In</span>
		            	<span class="btn-hover-effect" ></span>
		          </Button>
		        </div>
	        </Form.Item>
	      </Form>
      </div>
    );
  }
}

const LoginComponent = Form.create({ name: 'normal_login' })(Login);

export default LoginComponent;