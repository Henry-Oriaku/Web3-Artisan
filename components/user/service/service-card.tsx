import { Card, Image } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import React, { ReactNode } from 'react'

export default function ServiceCard({ service, actions }: { service: Service, actions: ReactNode[] }) {
    return (
        <Card>
            <div className="top">
                <Image height={200} src={service.image} />
                <div className='flex bg-opacity-70 bg-black justicy-center align-center'>
                    {actions.map(action => (action))}
                </div>
            </div>
            <div className="bg-white">
                <div className="flex justify-between">
                    <h3  >{service.title}</h3>
                    <h3 >{service.price}</h3>
                </div>
                <Paragraph >{service.description}</Paragraph>
            </div>
        </Card>
    )
}
