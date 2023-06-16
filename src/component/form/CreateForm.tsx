import React from 'react'
import {Input, Row, Col, Card} from 'antd'
import {Useroutlined} from '@ant-design/icons'


export const ProfileForm=()=> {
  

return( <>
<Row>
  <Card title='Изменения профиля' bordered={false} style={{width:1200}}>
    <Row>
      <Col span={8}>Имя</Col>
      <Col>
        <Input prefix={<UserOutlined />} />
      </Col>
    </Row>
  </Card>
</Row>
</>)
}
