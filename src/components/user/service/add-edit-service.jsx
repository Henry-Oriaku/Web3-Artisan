import { Button, Input, Switch, Upload } from 'antd'
import { useState } from 'react'

export default function AddEditWork({ onAdded, onCancel }) {
    const [service, setService] = useState({ description: '', title: '', image: '', negotiable: false, price: 0, imageFile: null })

    function updateService(key, value) {
        if (key == 'imageFile') {
            console.log(value, URL.createObjectURL(value))
            setService({ ...service, 'image': URL.createObjectURL(value) })

        }
        setService({ ...service, [key]: value })
    }
    function addService() {
        onAdded(service);
    }
    return (
        <>
            <div className="flex flex-col gap-4">

                <Input onChange={(ev) => updateService('title', ev.target.value)} className="p-4" variant="outlined" placeholder='Service Title' />
                <Input onChange={(ev) => updateService('description', ev.target.value)} className="p-4" variant="outlined" placeholder='Service Description' />
                <Input onChange={(ev) => updateService('price', ev.target.value)} className="p-4" variant="outlined" placeholder='Service Price' />
                <div className='flex gap-2'>
                    <Switch id='negotiable' onChange={(value) => updateService('negotiable', value)} title='Negotiable' />
                    <label htmlFor='negotiable'>Is this Price Negotiable</label>
                </div>
                <Upload className='cursor-pointer' maxCount={1} onChange={({ file }) => updateService('imageFile', file)} accept='image'>Select Image</Upload>
                <div className="flex gap-2">
                    <Button onClick={() => addService()}>Save</Button>
                    <Button onClick={() => onCancel()}>Cancel</Button>
                </div>
            </div>
        </>
    )
}
