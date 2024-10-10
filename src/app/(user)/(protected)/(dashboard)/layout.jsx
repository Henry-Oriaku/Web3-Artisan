'use client';

import { useEffect, useState } from 'react';
import '../../../../assets/styles/dashboard.css';
import Image from 'next/image';
import Avatar from 'components/Avatar/Avatar';
import Footer from 'components/Dashboard/footer';
import Sidebar from 'components/Dashboard/sidebar';


const LayoutContent = ({ children }) => {
    const [sideBarMobileVisible, setSideBarMobileVisible] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    // stores
    // const { user, logout } = useAccountStore();
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    useEffect(() => {
        setSideBarMobileVisible(false);
    }, [setSideBarMobileVisible])

    return (
        <div className="__className_88fdc4">
            <div className="wrapper mm-page mm-slideout">
                <div className="mobilie_header_nav stylehome1">
                    <div className="mobile-menu">
                        <div className="header bdrb1">
                            <div className="menu_and_widgets">
                                <div
                                    className="mobile_menu_bar d-flex justify-content-between align-items-center"
                                >
                                    <a className="mobile_logo" href="/home-2"
                                    ><img
                                            alt="Header Logo"
                                            loading="lazy"
                                            width={133}
                                            height="40"
                                            decoding="async"
                                            data-nimg="1"
                                            style={{ color: "transparent" }}
                                            src="/images/header-logo3.svg"
                                        /></a>
                                    <div className="right-side text-end">
                                        <a href="/login">join</a
                                        ><a
                                            className="menubar ml30"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasExample"
                                            aria-controls="offcanvasExample"
                                        ><img
                                                alt="icon"
                                                loading="lazy"
                                                width={20}
                                                height="20"
                                                decoding="async"
                                                data-nimg="1"
                                                style={{ color: "transparent" }}
                                                src="/images/mobile-dark-nav-icon.svg"
                                            /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="posr">
                                <div className="mobile_menu_close_btn">
                                    <span className="far fa-times"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <header
                    className="header-nav nav-innerpage-style menu-home4 dashboard_header main-menu"
                >
                    <nav className="posr">
                        <div className="container-fluid pr30 pr15-xs pl30 posr menu_bdrt1">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-6 col-lg-auto">
                                    <div
                                        className="text-center text-lg-start d-flex align-items-center"
                                    >
                                        <div
                                            className="dashboard_header_logo position-relative me-2 me-xl-5"
                                        >
                                            <a className="logo" href="/"
                                            ><img
                                                    alt="logo"
                                                    loading="lazy"
                                                    width={133}
                                                    height="40"
                                                    decoding="async"
                                                    data-nimg="1"
                                                    style={{ color: "transparent" }}
                                                    src="/images/header-logo-dark.svg"
                                                /></a>
                                        </div>
                                        <div className="fz20 ml90">
                                            <a className="dashboard_sidebar_toggle_icon vam"
                                            ><img
                                                    alt="navicon"
                                                    loading="lazy"
                                                    width={20}
                                                    height="18"
                                                    decoding="async"
                                                    data-nimg="1"
                                                    style={{ color: "transparent" }}
                                                    src="/images/dashboard-navicon.svg"
                                                /></a>
                                        </div>
                                        <a
                                            className="login-info d-block d-xl-none ml40 vam"
                                            data-bs-toggle="modal"
                                            href="#exampleModalToggle"
                                        ><span className="flaticon-loupe"></span
                                        ></a>
                                        <div className="ml40 d-none d-xl-block">
                                            <div className="search_area dashboard-style">
                                                <input
                                                    type="text"
                                                    className="form-control border-0"
                                                    placeholder="What service are you looking for today?"
                                                /><label><span className="flaticon-loupe"></span></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-auto">
                                    <div className="text-center text-lg-end header_right_widgets">
                                        <ul
                                            className="dashboard_dd_menu_list d-flex align-items-center justify-content-center justify-content-sm-end mb-0 p-0"
                                        >
                                            <li className="d-none d-sm-block">
                                                <a
                                                    className="text-center mr5 text-thm2 dropdown-toggle fz20"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                ><span className="flaticon-notification"></span
                                                ></a>
                                                <div className="dropdown-menu">
                                                    <div className="dboard_notific_dd px30 pt10 pb15">
                                                        <div className="notif_list d-flex align-items-center">

                                                            <div className="details ml10">
                                                                <p className="text mb-0">Your course uploaded</p>
                                                                <p className="text mb-0">successfully</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-none d-sm-block">
                                                <a
                                                    className="text-center mr5 text-thm2 dropdown-toggle fz20"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                ><span className="flaticon-mail"></span
                                                ></a>
                                                <div className="dropdown-menu">
                                                    <div className="dboard_notific_dd px30 pt20 pb15">
                                                        <div className="notif_list d-flex align-items-start mb25">

                                                            <div className="details ml15">
                                                                <p className="dark-color fw500 mb-2">Ali Tufan</p>
                                                                <p className="text mb-2">
                                                                    ...
                                                                </p>
                                                                <p className="mb-0 text-thm">4 hours ago</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-grid">
                                                            <a className="ud-btn btn-thm w-100" href="/message"
                                                            >View All Messages<i
                                                                className="fal fa-arrow-right-long"
                                                            ></i
                                                                ></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-none d-sm-block">
                                                <a
                                                    className="text-center mr5 text-thm2 dropdown-toggle fz20"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                ><span className="flaticon-like"></span
                                                ></a>
                                                <div className="dropdown-menu">
                                                    <div className="dboard_notific_dd px30 pt10 pb15">
                                                        <div
                                                            className="notif_list d-flex align-items-center bdrb1 pb15 mb10"
                                                        >

                                                            <div className="details ml10">
                                                                <p className="text mb-0">Your resume</p>
                                                                <p className="text mb-0">updated!</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user_setting">
                                                <div className="dropdown">
                                                    <a className="btn" data-bs-toggle="dropdown"
                                                    >
                                                        <Avatar
                                                            alt={user.name[0]}
                                                            size={100}
                                                            src=""
                                                        /></a>
                                                    <div className="dropdown-menu">
                                                        <div className="user_setting_content">
                                                            <p className="fz15 fw400 ff-heading mb10 pl30">Start</p>
                                                            <a className="dropdown-item active" href="/dashboard"
                                                            ><i className="flaticon-home mr10"></i>Dashboard</a
                                                            ><a className="dropdown-item" href="/proposal"
                                                            ><i className="flaticon-document mr10"></i>My WOrks</a
                                                            ><a className="dropdown-item" href="/saved"
                                                            ><i className="flaticon-like mr10"></i>Saved</a
                                                            ><a className="dropdown-item" href="/message"
                                                            ><i className="flaticon-chat mr10"></i>Message</a
                                                            ><a className="dropdown-item" href="/reviews"
                                                            ><i className="flaticon-review-1 mr10"></i>Reviews</a
                                                            ><a className="dropdown-item" href="/invoice"
                                                            ><i className="flaticon-receipt mr10"></i>Invoice</a
                                                            ><a className="dropdown-item" href="/payouts"
                                                            ><i className="flaticon-dollar mr10"></i>Payouts</a
                                                            ><a className="dropdown-item" href="/statements"
                                                            ><i className="flaticon-web mr10"></i>Statements</a
                                                            >
                                                            <p className="fz15 fw400 ff-heading mt30 pl30">
                                                                Organize and Manage
                                                            </p>
                                                            <a className="dropdown-item" href="/manage-services"
                                                            ><i className="flaticon-presentation mr10"></i>Manage
                                                                Services</a
                                                            ><a className="dropdown-item" href="/manage-jobs"
                                                            ><i className="flaticon-briefcase mr10"></i>Manage
                                                                Jobs</a
                                                            ><a className="dropdown-item" href="/manage-projects"
                                                            ><i className="flaticon-content mr10"></i>Manage
                                                                Project</a
                                                            ><a className="dropdown-item" href="/add-services"
                                                            ><i className="flaticon-document mr10"></i>Add
                                                                Services</a
                                                            ><a className="dropdown-item" href="/create-projects"
                                                            ><i className="flaticon-content mr10"></i>Create
                                                                Project</a
                                                            >
                                                            <p className="fz15 fw400 ff-heading mt30 pl30">
                                                                Account
                                                            </p>
                                                            <a className="dropdown-item" href="/my-profile"
                                                            ><i className="flaticon-photo mr10"></i>My Profile</a
                                                            ><a className="dropdown-item" href="/login"
                                                            ><i className="flaticon-logout mr10"></i>Logout</a
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="dashboard_content_wrapper">
                    <div className="dashboard dashboard_wrapper pr30 pr0-xl">
                        <Sidebar />
                        <div className="dashboard__main pl0-md">
                            {children}
                            <Footer />
                        </div>
                    </div>
                </div>
                <a className="scrollToHome"><i className="fas fa-angle-up"></i></a>
            </div>
            <div
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header border-bottom">
                    <a href="/"
                    ><img
                            alt="Header Logo"
                            loading="lazy"
                            width={133}
                            height="40"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="/images/header-logo2.svg" /></a
                    ><button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <div className="ui-navigation-sidebar">
                        <aside

                            className="ps-sidebar-root css-1wvake5"
                        >
                            <div

                                className="ps-sidebar-container css-dip3t8"
                            >
                                <nav className="ps-menu-root css-vj11vy">
                                    <ul className="css-ewdv3l">
                                        <li className="ps-menuitem-root ps-submenu-root css-16jesut">
                                            <a
                                                className="ps-menu-button"

                                                tabIndex={0}
                                            ><span className="ps-menu-label css-12w9als">Home</span
                                            ><span className="ps-submenu-expand-icon css-1cuxlhl"
                                            ><span className="css-honxw6"></span></span
                                                ></a>
                                            <div

                                                className="ps-submenu-content css-z5rm24"
                                            >
                                                <ul className="css-ewdv3l">
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V1</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-2"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V2</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-3"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V3</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-4"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V4</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-5"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V5</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-6"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V6</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-7"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V7</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-8"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V8</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-9"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V9</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-10"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V10</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-11"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V11</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-12"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V12</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-13"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V13</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-14"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V14</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-15"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V15</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-16"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V16</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-17"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V17</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-18"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V18</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-19"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V19</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/home-20"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Home V20</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="ps-menuitem-root ps-submenu-root css-16jesut">
                                            <a
                                                className="ps-menu-button"

                                                tabIndex={0}
                                            ><span className="ps-menu-label css-12w9als">Browse Jobs</span
                                            ><span className="ps-submenu-expand-icon css-1cuxlhl"
                                            ><span className="css-honxw6"></span></span
                                                ></a>
                                            <div

                                                className="ps-submenu-content css-z5rm24"
                                            >
                                                <ul className="css-ewdv3l">
                                                    <li className="ps-menuitem-root ps-submenu-root css-1ffbfs">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                        ><span className="ps-menu-label css-12w9als"
                                                        >Services</span
                                                            ><span className="ps-submenu-expand-icon css-1cuxlhl"
                                                            ><span className="css-honxw6"></span></span
                                                            ></a>
                                                        <div

                                                            className="ps-submenu-content css-z5rm24"
                                                        >
                                                            <ul className="css-ewdv3l">
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/service-1"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Service v1</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/service-2"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Service v2</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/service-3"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Service v3</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/service-4"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Service v4</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/service-5"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Service v5</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/service-6"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Service v6</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/service-7"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Service v7</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/service-all"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Service All</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/service-single"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Service Single v1</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/service-single-v2"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Service Single v2</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/service-single-v3"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Service Single v3</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="ps-menuitem-root ps-submenu-root css-1ffbfs">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                        ><span className="ps-menu-label css-12w9als"
                                                        >Projects</span
                                                            ><span className="ps-submenu-expand-icon css-1cuxlhl"
                                                            ><span className="css-honxw6"></span></span
                                                            ></a>
                                                        <div

                                                            className="ps-submenu-content css-z5rm24"
                                                        >
                                                            <ul className="css-ewdv3l">
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/project-1"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Project v1</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/project-2"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Project v2</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/project-3"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Project v3</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/project-4"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Project v4</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/project-single"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Project Single v1</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/project-single-v2"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Project Single v2</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/project-single-v3"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Project Single v3</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="ps-menuitem-root ps-submenu-root css-1ffbfs">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                        ><span className="ps-menu-label css-12w9als"
                                                        >Job View</span
                                                            ><span className="ps-submenu-expand-icon css-1cuxlhl"
                                                            ><span className="css-honxw6"></span></span
                                                            ></a>
                                                        <div

                                                            className="ps-submenu-content css-z5rm24"
                                                        >
                                                            <ul className="css-ewdv3l">
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/job-1"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Job list v1</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/job-2"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Job list v2</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/job-3"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Job list v3</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/job-single"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Job Single</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li
                                            className="ps-menuitem-root ps-submenu-root ui-mobile-active css-16jesut"
                                        >
                                            <a
                                                className="ps-menu-button"

                                                tabIndex={0}
                                            ><span className="ps-menu-label css-12w9als">Users</span
                                            ><span className="ps-submenu-expand-icon css-1cuxlhl"
                                            ><span className="css-honxw6"></span></span
                                                ></a>
                                            <div

                                                className="ps-submenu-content css-z5rm24"
                                            >
                                                <ul className="css-ewdv3l">
                                                    <li
                                                        className="ps-menuitem-root ps-submenu-root ui-mobile-active css-1ffbfs"
                                                    >
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                        ><span className="ps-menu-label css-12w9als"
                                                        >Dashboard</span
                                                            ><span className="ps-submenu-expand-icon css-1cuxlhl"
                                                            ><span className="css-honxw6"></span></span
                                                            ></a>
                                                        <div

                                                            className="ps-submenu-content css-z5rm24"
                                                        >
                                                            <ul className="css-ewdv3l">
                                                                <li
                                                                    className="ps-menuitem-root ui-mobile-active css-x3jz15"
                                                                >
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/dashboard"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Dashboard</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/proposal"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >My Works</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/saved"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Saved</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/message"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Message</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/reviews"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Reviews</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/invoice"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Invoice</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/payouts"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Payouts</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/statements"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Statement</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/manage-services"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Manage Service</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/add-services"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Add Services</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/manage-jobs"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Manage Jobs</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/manage-projects"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Manage Project</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/create-projects"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Create Project</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/my-profile"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >My Profile</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="ps-menuitem-root ps-submenu-root css-1ffbfs">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                        ><span className="ps-menu-label css-12w9als"
                                                        >Employee</span
                                                            ><span className="ps-submenu-expand-icon css-1cuxlhl"
                                                            ><span className="css-honxw6"></span></span
                                                            ></a>
                                                        <div

                                                            className="ps-submenu-content css-z5rm24"
                                                        >
                                                            <ul className="css-ewdv3l">
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/employee-1"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Employee V1</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/employee-2"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Employee V2</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/employee-single"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Employee Single</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="ps-menuitem-root ps-submenu-root css-1ffbfs">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                        ><span className="ps-menu-label css-12w9als"
                                                        >Freelancer</span
                                                            ><span className="ps-submenu-expand-icon css-1cuxlhl"
                                                            ><span className="css-honxw6"></span></span
                                                            ></a>
                                                        <div

                                                            className="ps-submenu-content css-z5rm24"
                                                        >
                                                            <ul className="css-ewdv3l">
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/freelancer-1"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Freelancer V1</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/freelancer-2"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Freelancer V2</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/freelancer-3"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Freelancer V3</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/freelancer-single"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Freelancer Single v1</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/freelancer-single-v2"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Freelancer Single v2</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/freelancer-single-v3"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Freelancer Single v3</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/become-seller"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Become Seller</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="ps-menuitem-root ps-submenu-root css-16jesut">
                                            <a
                                                className="ps-menu-button"

                                                tabIndex={0}
                                            ><span className="ps-menu-label css-12w9als">Pages</span
                                            ><span className="ps-submenu-expand-icon css-1cuxlhl"
                                            ><span className="css-honxw6"></span></span
                                                ></a>
                                            <div

                                                className="ps-submenu-content css-z5rm24"
                                            >
                                                <ul className="css-ewdv3l">
                                                    <li className="ps-menuitem-root ps-submenu-root css-1ffbfs">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                        ><span className="ps-menu-label css-12w9als">About</span
                                                        ><span className="ps-submenu-expand-icon css-1cuxlhl"
                                                        ><span className="css-honxw6"></span></span
                                                            ></a>
                                                        <div

                                                            className="ps-submenu-content css-z5rm24"
                                                        >
                                                            <ul className="css-ewdv3l">
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/about-1"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >About v1</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/about-2"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >About v2</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="ps-menuitem-root ps-submenu-root css-1ffbfs">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                        ><span className="ps-menu-label css-12w9als">Blog</span
                                                        ><span className="ps-submenu-expand-icon css-1cuxlhl"
                                                        ><span className="css-honxw6"></span></span
                                                            ></a>
                                                        <div

                                                            className="ps-submenu-content css-z5rm24"
                                                        >
                                                            <ul className="css-ewdv3l">
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/blog-1"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >List 1</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/blog-2"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >List 2</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/blog-3"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >List 3</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/blog-single"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Single</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="ps-menuitem-root ps-submenu-root css-1ffbfs">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                        ><span className="ps-menu-label css-12w9als">Shop</span
                                                        ><span className="ps-submenu-expand-icon css-1cuxlhl"
                                                        ><span className="css-honxw6"></span></span
                                                            ></a>
                                                        <div

                                                            className="ps-submenu-content css-z5rm24"
                                                        >
                                                            <ul className="css-ewdv3l">
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/shop-list"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >List</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/shop-single"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Single</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/shop-cart"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Cart</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/shop-checkout"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Checkout</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                                <li className="ps-menuitem-root css-x3jz15">
                                                                    <a
                                                                        className="ps-menu-button"

                                                                        tabIndex={0}
                                                                        href="/shop-order"
                                                                    ><span className="ps-menu-label css-12w9als"
                                                                    ><span data-bs-dismiss="offcanvas"
                                                                    >Order</span
                                                                            ></span
                                                                        ></a
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/contact"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Contact</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/not-found"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >404</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/faq"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Faq</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/help"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Help</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/invoices"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Invoices</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/login"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Login</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/pricing"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Pricing</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/register"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Register</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/terms"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >Terms</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                    <li className="ps-menuitem-root css-1tqrhto">
                                                        <a
                                                            className="ps-menu-button"

                                                            tabIndex={0}
                                                            href="/ui-elements"
                                                        ><span className="ps-menu-label css-12w9als"
                                                        ><span data-bs-dismiss="offcanvas"
                                                        >UI Elements</span
                                                                ></span
                                                            ></a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="ps-menuitem-root css-1t8x7v1">
                                            <a
                                                className="ps-menu-button"

                                                tabIndex={0}
                                                href="/contact"
                                            ><span className="ps-menu-label css-12w9als"
                                            ><span data-bs-dismiss="offcanvas">Contact</span></span
                                                ></a
                                            >
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LayoutContent;