import {Image, Col, Row} from 'antd'
import React, {FC, useEffect} from 'react'
import {useParams} from 'react-router-dom'
export const Profile:FC =()=> {

    let {userId} = useParams()
useEffect(()=> {
console.log(userId)}, [userId])    

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
        <Row>
            <Col> vk: vk.com </Col>
        </Row>
        <Row>
            <Col> website </Col>
            <Col> mainLink </Col>
            <Col> </Col>
        </Row>
    </div>
}
