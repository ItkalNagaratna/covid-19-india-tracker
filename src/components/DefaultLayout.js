import React from 'react'
import { Layout } from 'antd';
import styled from 'styled-components'


const { Content } = Layout;

const DefaultLayout = (props) => {
  return (
    <LayoutComponent>
      <Layout className="layout"  >
        <Content >
          <div className="site-layout-content">{props.children}</div>
        </Content>
      </Layout>
    </LayoutComponent>
  )
}
export default DefaultLayout;



const LayoutComponent = styled.div`
.site-layout-content {
    background: #fff;
    padding: 24px;
    min-height: 280px;
  }
  #components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }


`


