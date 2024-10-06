"use client";
import { PlusIcon } from '@heroicons/react/24/outline';
import { Button, Input, Modal } from 'antd'
import Title from 'antd/es/typography/Title'
import axios from 'axios';
import GradientBg from 'components/gradient-bg';
import AddEditService from 'components/user/service/add-edit-service';
import ServiceCard from 'components/user/service/service-card';
import { ConnectKitButton } from 'connectkit'
import apiUrl from 'constants/apiUrl';
import webRoutes from 'constants/webRoutes';
import { validateForm } from 'helpers/validator';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

export default function Page() {
  const router = useRouter();
  const { address } = useAccount();

  return (
    <section className="flex">
      <Title level={3}>Welcome {address}, to YOur Dashboard</Title>
    </section>
  )
}


