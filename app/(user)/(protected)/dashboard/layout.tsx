'use client';
// import SideBarLinks from '@/components/sidebarLinks/sidebarLinks';
// import Avatar from '@/components/Avatar/Avatar';

// import { Layout as AntLayout, Menu } from 'antd';
// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';

// const { Header, Sider, Content } = AntLayout;

// const LayoutContent = ({ children }: { children: any; }) => {
//     const [sideBarMobileVisible, setSideBarMobileVisible] = useState(false);
//     const [collapsed, setCollapsed] = useState(false);
//     // stores
//     const { user, logout } = useAccountStore();

//     useEffect(() => {
//         setSideBarMobileVisible(false);
//     }, [setSideBarMobileVisible])

//     return (
//         <AntLayout className="layout">
//             <Sider trigger={null} className={`sidebar ${sideBarMobileVisible ? 'mobile-visible' : ''}`}>
//                 <div className="logo p-2 mb-2">
//                     {collapsed ? 'ICO' : 'iCapitalOne'}
//                 </div>
//                 <div className="my-4 d-flex gap-2 flex-column justify-content-center align-items-center">
//                     <Avatar alt={user?.name} src={user?.profile} size={collapsed ? 100 : 160} />
//                     {!collapsed &&
//                         (
//                             <>
//                                 <p className="text-light fw-bold">{user?.name}</p>
//                                 <div className="d-flex gap-3 justify-content-center align-items-center">
//                                     <FiLogOut size={15} className="text-light" onClick={logout} />
//                                     <i className="flaticon flaticon-setting text-light"></i>
//                                 </div>
//                             </>
//                         )
//                     }
//                 </div>
//                 <hr className="w-100"></hr>
//                 <SideBarLinks sidebarCollapsed={collapsed} />
//                 {sideBarMobileVisible &&
//                     React.createElement(sideBarMobileVisible ? MenuUnfoldOutlined : MenuFoldOutlined, {
//                         className: 'mobile-menu close',
//                         onClick: () => setSideBarMobileVisible(!sideBarMobileVisible),
//                     })
//                 }
//             </Sider>
//             <AntLayout className="site-layout">
//                 <Header
//                     className="site-layout-background d-flex"
//                     style={{
//                         padding: 0,
//                     }}
//                 >
//                     {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//             className: 'trigger',
//             onClick: () => setCollapsed(!collapsed),
//           })} */}
//                     {React.createElement(sideBarMobileVisible ? MenuUnfoldOutlined : MenuFoldOutlined, {
//                         className: 'mobile-menu mx-3',
//                         onClick: () => setSideBarMobileVisible(!sideBarMobileVisible),
//                     })}

//                     <div className="w-100 d-flex justify-content-end p-2">
//                         <Avatar size={90} alt={user?.name} src={user?.profile} className="border-0 bg-dark" />
//                     </div>
//                 </Header>
//                 <Content
//                     style={{
//                         margin: '24px 16px',
//                         padding: 24,
//                         paddingBottom: '50px'
//                     }}
//                 >
//                     {children}
//                     <div className="my-5">
//                         ----
//                     </div>
//                 </Content>
//             </AntLayout>
//         </AntLayout >
//     )
// }
// export default withAuth(LayoutContent);