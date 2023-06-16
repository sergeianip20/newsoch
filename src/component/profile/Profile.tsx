import {Image, Col, Row} from 'antd'
import React, {FC} from 'react'
export const Profile:FC =()=> {


    return <div>
    <Row>
        
        <Col span={24}>
            <Image      width={200}            /> </Col>
    </Row>
        <Row>
            <Col span={12}> Name: Sergey </Col>
            <Col span={12}> </Col>
        </Row>
        <Row>
            <Col span={24}> Github: https://github.com/sergeianip20 </Col>
        </Row>
    </div>
}
