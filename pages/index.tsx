import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Row, Col, Button, Input } from 'antd'
import { Typography } from 'antd'
import '../assets/styles.less'
import MainLayout from '@layouts/main'
import Block from '@layouts/block'

interface ISchema {
    lat?: number,
    lng?: number,
    radius?: number
}
const { Title } = Typography


export default function Home(): JSX.Element {
    const [inputValue, setInputValue] = useState<number>(2);
    const [schema, setSchema] = useState<ISchema>({})
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter()



    const handlePersonalization = (): void => {
        setLoading(true)
        router.push({
            pathname: '/search',
            query: { ...schema }
        })
    }


    const onChange = value => {
        setInputValue(value)
        setSchema(Object.assign(schema, { radius: value * 1000 }))
    };

    return (
        <MainLayout>
            <div style={{ marginTop: '10rem' }}></div>
            <Title>Find a Baddie</Title>

            <Row gutter={2}>

                <Col span={24}>
                    <Row>

                        <Input
                            min={1}
                            max={20}
                            style={{ margin: '0 16px 0 5px' }}
                            value={inputValue}
                            onChange={onChange}
                        />

                    </Row>
                </Col>
            </Row>

            {/* ====== Embed Skeleton Blocks here ==== */}
            <Row justify="space-between" style={{ marginTop: '5rem' }}>
                <Block />
            </Row>
        </MainLayout>
    )
}


