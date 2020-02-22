import React from 'react';

import { Button } from 'antd';

import { Layout } from 'antd';
import '../../App.scss';

import AuthComponent from '../../components/AuthComponent';


const { Footer, Content } = Layout;

export default function SignIn() {
  return (
  	<div className="App">
      <Layout className="loginContent">
        <Layout>
          <Content>
            <div className="container h-100">
              <div className="row center-xs middle-xs h-100">
                <div className="col-xs-12 col-md-4">
                  <div className="box login-text-container">
                    <h1 className="h1-white">
                      Get more features and personalize data access.
                    </h1>
                    <h5 className="h5-white">
                      Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.
                    </h5>
                  </div>
                </div>
                <div className="col-xs-12 col-md-4">
                  <div className="box">
                    <AuthComponent />
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
        <Footer>
          <div className="container">
            <div className="footer-text">©️ 2020 yourcompanyname .Ltd</div>
          </div>
        </Footer>
      </Layout>
    </div>
  	);
}
