import React from 'react'
import {Input, Row, Col, Card} from 'antd'



export const ProfileForm=()=> {
  

return( <>
<Row>
  <Card title='Изменения профиля' bordered={false} style={{width:1200}}>
    <Row> 
      <Col>
        <Input />
      </Col>
    </Row>
  </Card>
</Row>
</>)
}
