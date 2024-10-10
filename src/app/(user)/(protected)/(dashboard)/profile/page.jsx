'use client'
import AddEditWork from '@/components/user/service/add-edit-service'
import apiUrl from '@/constants/apiUrl';
import { Button, Input, Modal, Switch, Upload } from 'antd'
import { useState } from 'react'
import { toast } from 'react-toastify';

export default function Page() {
    const { address } = useAccount();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState("Add Previous Work");
    const [newProfile, setProfile] = useState({
        name: '', email: '', walletAddress: address, isArtisan: false, featuredImage: null
    });
    const [previousWorks, setPreviousWorks] = useState([]);
    function updateProfile(key, value) {
        setProfile({ ...newProfile, [key]: value })
    }
    function saveProfile() {
        axios.patch(apiUrl.user, newProfile).then((response) => {
            toast.success("Profile Updated")
        }).catch((error) => {
            console.log(error);
            toast.error("Unable to Update Profile")

        })
    }
    function addPreWork(previousWork) {
        setPreviousWorks([...previousWorks, previousWork]);
    }

    useEffect(() => {
        validateForm('saveProfileBtn', '#profileForm');
    }, [profile])
    return (
        <div className="dashboard__content hover-bgc-color">
            <div className="row pb40">
                <div className="col-lg-12">
                    <div className="dashboard_navigationbar d-block d-lg-none">
                        <div className="dropdown">
                            <button className="dropbtn">
                                <i className="fa fa-bars pr10"></i> Dashboard Navigation
                            </button>
                            <ul className="dropdown-content">
                                <li>
                                    <p className="fz15 fw400 ff-heading mt30 pl30">Start</p>
                                </li>
                                <li className="mobile-dasboard-menu-active">
                                    <a href="#"
                                    ><i className="flaticon-home mr10"></i>Dashboard</a
                                    >
                                </li>
                                <li className="">
                                    <a href="#"
                                    ><i className="flaticon-document mr10"></i>My
                                        Works</a
                                    >
                                </li>
                                <li className="">
                                    <a href="#"
                                    ><i className="flaticon-like mr10"></i>Saved</a
                                    >
                                </li>
                                <li className="">
                                    <a href="#"
                                    ><i className="flaticon-chat mr10"></i>Message</a
                                    >
                                </li>
                                <li className="">
                                    <a href="#"
                                    ><i className="flaticon-review-1 mr10"></i>Reviews</a
                                    >
                                </li>
                                <li className="">
                                    <a href="#"
                                    ><i className="flaticon-receipt mr10"></i>Invoice</a
                                    >
                                </li>
                                <li className="">
                                    <a href="#"
                                    ><i className="flaticon-dollar mr10"></i>Payouts</a
                                    >
                                </li>
                                <li className="">
                                    <a href="#"
                                    ><i className="flaticon-web mr10"></i>Statements</a
                                    >
                                </li>
                                <li>
                                    <p className="fz15 fw400 ff-heading mt30 pl30">
                                        Organize and Manage
                                    </p>
                                </li>
                                <li className="">
                                    <a href="#"
                                    ><i className="flaticon-presentation mr10"></i>Manage
                                        Services</a
                                    >
                                </li>
                                <li className="">
                                    <a href="#"
                                    ><i className="flaticon-briefcase mr10"></i>Manage
                                        Jobs</a
                                    >
                                </li>
                                <li className="">
                                    <a href="#"
                                    ><i className="flaticon-content mr10"></i>Manage
                                        Project</a
                                    >
                                </li>
                                <li className="">
                                    <a href="#"
                                    ><i className="flaticon-document mr10"></i>Add
                                        Services</a
                                    >
                                </li>
                                <li className="">
                                    <a href="#"
                                    ><i className="flaticon-content mr10"></i>Create
                                        Project</a
                                    >
                                </li>
                                <li>
                                    <p className="fz15 fw400 ff-heading mt30 pl30">Account</p>
                                </li>
                                <li className="">
                                    <a href="#"
                                    ><i className="flaticon-photo mr10"></i>My Profile</a
                                    >
                                </li>
                                <li className="">
                                    <a href="#"
                                    ><i className="flaticon-logout mr10"></i>Logout</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="dashboard_title_area">
                        <h2>Update Your Profile</h2>
                        {/* <p className="text">Welcome {user?.name}</p> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="flex-1 p-10">

                    <div className="flex gap-4 flex-col mt-8" id='profileForm'>

                        <div>
                            <Input autoComplete='true' name='name' required value={profile.name} onChange={(ev) => updateProfile('name', ev.target.value)} className="p-4" variant="outlined" placeholder='Full Name' />
                        </div>
                        <div>
                            <Input autoComplete='true' name='email' type='email' required value={profile.email} onChange={(ev) => updateProfile('email', ev.target.value)} className="p-4" variant="outlined" placeholder='Enter Your Email' />
                        </div>
                        <div>
                            <div className='flex'>

                                <Switch id='an_artisan' onChange={(checked) => { updateProfile('isArtisan', checked) }} />
                                <label htmlFor='an_artisan'>I'm an Artisan</label>
                            </div>
                            {profile.isArtisan && <Button size='small' onClick={() => setModalVisible(true)}>Add Works</Button>}
                        </div>

                        <Upload className='cursor-pointer' onChange={({ file }) => { updateProfile('featuredImage', file) }}>Featured Image</Upload>

                        <div>
                        </div>
                        <Button className="text-base p-6 mt-4 bg-zinc-800 text-white" onClick={() => saveProfile()} id="saveProfileBtn">Submit</Button>
                    </div>
                </div>
            </div>

            <Modal title={modalTitle} open={modalVisible} okText='Close' onOk={() => setModalVisible(false)} onCancel={() => setModalVisible(false)} footer={(_, { OkBtn }) => (
                <>
                </>
            )}>
                <AddEditWork onAdded={(service) => { addPreWork(service) }} onCancel={() => setModalVisible(false)} />
            </Modal>
        </div>
    )
}
