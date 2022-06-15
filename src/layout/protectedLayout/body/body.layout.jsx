import React from 'react';
import { Layout} from 'antd';
import { connect, useDispatch } from 'react-redux';

import './style.css'


const BodyLayout = (props) => {

    
    const { Content } = Layout;
   
    return (
        <Layout >
            <div className="container">
            <Content
                className="adminBody"
                
            >
               {props.children}
            </Content>
            </div>
            
        </Layout>

    )
}
const mapStateToProps = state => ({
   


})

export default connect(mapStateToProps)(BodyLayout);