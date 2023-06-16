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
            <Image      width={200}    src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fcs13.pikabu.ru%2Fpost_img%2Fbig%2F2023%2F02%2F13%2F8%2F1676295806122712757.png&tbnid=kORpiupibO5-4M&vet=12ahUKEwi31OXfqcf_AhWjDxAIHbwICcMQMygBegUIARCwAg..i&imgrefurl=https%3A%2F%2Fpikabu.ru%2Fstory%2Favatarki_zverushek_9946640&docid=o2-FANy65gMd1M&w=1024&h=1024&q=%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0%20&client=ms-android-xiaomi-rvo3&ved=2ahUKEwi31OXfqcf_AhWjDxAIHbwICcMQMygBegUIARCwAg'        /> </Col>
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
