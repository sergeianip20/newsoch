import React from 'react';
import {Button, Card, Col,Row, Avatar }from 'antd'
import { UserOutlined } from '@ant-design/icons';
export const Header = React.memo(()=> {
    return   <div>
        <Card>
            <Row >
                <Col span={12}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Col>
                <Col offset={9}>
                    2
                </Col>
            </Row>
        </Card>
    </div>
})