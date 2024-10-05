"use client";
import { PlusIcon } from '@heroicons/react/24/outline';
import { Button, Input, Modal } from 'antd'
import Title from 'antd/es/typography/Title'
import GradientBg from 'components/gradient-bg';
import AddEditService from 'components/user/service/add-edit-service';
import ServiceCard from 'components/user/service/service-card';
import { ConnectKitButton } from 'connectkit'
import { validateForm } from 'helpers/validator';
import { useEffect, useState } from 'react';

export default function Page() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Service");
  const [profile, setProfile] = useState<UserProfile>({
    name: '', email: '', services: []
  });

  function updateProfile(key: string, value: any) {
    setProfile({ ...profile, [key]: value })
  }
  function addService(service: Service) {
    updateProfile('services', [...profile.services, service]);
  }

  useEffect(() => {
    validateForm('saveProfile', '#profileForm');
  }, [profile])
  return (
    <section className="flex">
      <div className="flex-1 bg-white p-10">
        <Title>Complete Signup</Title>

        <div className="flex gap-3 flex-col mt-8" id='saveProfile'>

          <ConnectKitButton />
          <div>
            <Input required value={profile.name} onChange={(ev) => updateProfile('name', ev.target.value)} className="p-4" variant="outlined" placeholder='Full Name' />
          </div>
          <div>
            <Input required value={profile.email} onChange={(ev) => updateProfile('email', ev.target.value)} className="p-4" variant="outlined" placeholder='Enter Your Email' />
          </div>
          <div className="flex justify-end">
            <Button size='middle' onClick={() => setModalVisible(true)} icon={<PlusIcon />} iconPosition='end'>Add Service</Button>
          </div>
          <div className="flex">
            {profile.services.map((service) => <ServiceCard key={service.title} service={service} actions={[]} />)}
          </div>
          <Button className="p-6">Submit</Button>
        </div>
      </div>
      <div className="sm:block hidden flex-1">
        <GradientBg className="h-screen w-full "/>
      </div>

      <Modal title={modalTitle} open={modalVisible} okText='Close' onOk={() => setModalVisible(false)} onCancel={() => setModalVisible(false)} footer={(_, { OkBtn }) => (
        <>
        </>
      )}>
        <AddEditService onAdded={(service) => { addService(service) }} onCancel={() => setModalVisible(false)} />
      </Modal>
    </section>
  )
}
