"use client";
import { PlusIcon } from '@heroicons/react/24/outline';
import { Button, Input, Modal } from 'antd'
import Title from 'antd/es/typography/Title'
import axios from 'axios';
import GradientBg from '@/components/gradient-bg';
import AddEditService from '@/components/user/service/add-edit-service';
import ServiceCard from '@/components/user/service/service-card';
import { ConnectKitButton } from 'connectkit'
import apiUrl from '@/constants/apiUrl';
import webRoutes from '@/constants/webRoutes';
import { validateForm } from '@/helpers/validator';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

export default function Page() {
  const router = useRouter();
  const { address } = useAccount();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Service");
  const [profile, setProfile] = useState({
    name: '', email: '', walletAddress: address
  });

  function updateProfile(key, value) {
    setProfile({ ...profile, [key]: value })
  }
  function saveProfile() {
    axios.post(apiUrl.user, profile).then((response) => {
      router.push(webRoutes.dashboard)
    }).catch((error) => {
      console.log(error);
    })
  }
  function addService(service) {
    // updateProfile('services', [...profile.services, service]);
  }

  useEffect(() => {
    validateForm('saveProfileBtn', '#profileForm');
  }, [profile])
  return (
    <section className="flex">
      <div className="flex-1 bg-white p-10">
        <Title>Complete Signup</Title>

        <div className="flex gap-4 flex-col mt-8" id='profileForm'>

          <ConnectKitButton />
          <div>
            <Input autoComplete='true' name='name' required value={profile.name} onChange={(ev) => updateProfile('name', ev.target.value)} className="p-4" variant="outlined" placeholder='Full Name' />
          </div>
          <div>
            <Input autoComplete='true' name='email' type='email' required value={profile.email} onChange={(ev) => updateProfile('email', ev.target.value)} className="p-4" variant="outlined" placeholder='Enter Your Email' />
          </div>

          <Button className="text-base p-6 mt-4 bg-zinc-800 text-white" onClick={() => saveProfile()} id="saveProfileBtn">Submit</Button>
        </div>
      </div>
      <div className="sm:block hidden flex-1">
        <GradientBg className="h-screen w-full " />
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


