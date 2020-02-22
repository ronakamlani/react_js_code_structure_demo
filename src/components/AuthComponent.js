import React from 'react';

import { Tabs } from 'antd';

import LoginComponent from './LoginComponent';

const { TabPane } = Tabs;

class AuthComponent extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
      notice: '',
      
      
    };

    this.tabPress = this.tabPress.bind(this);
  }
    
  tabPress(){

  }

  
  render() {
    return (
      <div className="auth-warp">
        <Tabs className="auth-tab" defaultActiveKey="1" onChange={this.tabPress}>
          <TabPane tab="Loigin" key="1">
            <LoginComponent />
          </TabPane>
          <TabPane tab="Create an account" key="2">
            <LoginComponent />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default AuthComponent;