"use client";
import webRoutes from '@/constants/webRoutes';
import { useAccountStore } from '@/store/accountStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';
import {useState } from 'react'

export default function Page() {
  const router = useRouter();
  const { address } = useAccount();
  const [menuVisible, setMenuVisible] = useState(false)

  const { user } = useAccountStore()
  return (
    <div className="dashboard__content hover-bgc-color">
      <div className="row pb40">
        <div className="col-lg-12">
          <div className="dashboard_navigationbar d-block d-lg-none">
            <div className="dropdown">
              <button className="dropbtn">
                <i className="mdi mdi-menu pr10" onClick={() => setMenuVisible(!menuVisible)}></i> Dashboard Navigation
              </button>
              <ul className={`dropdown-content ${menuVisible && 'show'}`}>
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
                  <Link href={webRoutes.userProfile}
                  >
                    <i className="flaticon-photo mr10"></i>My Profile</Link
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
            <h2>Dashboard</h2>
            <p className="text">Welcome {user?.name}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xxl-3">
          <div
            className="d-flex align-items-center justify-content-between statistics_funfact"
          >
            <div className="details">
              <div className="fz15">Services Offered</div>
              <div className="title">0</div>
              <div className="text fz14">
                <span className="text-thm">0</span> New Offered
              </div>
            </div>
            <div className="icon text-center">
              <i className="flaticon-contract"></i>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xxl-3">
          <div
            className="d-flex align-items-center justify-content-between statistics_funfact"
          >
            <div className="details">
              <div className="fz15">Completed Services</div>
              <div className="title">0</div>
              <div className="text fz14">
                <span className="text-thm">0</span> New Completed
              </div>
            </div>
            <div className="icon text-center">
              <i className="flaticon-success"></i>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xxl-3">
          <div
            className="d-flex align-items-center justify-content-between statistics_funfact"
          >
            <div className="details">
              <div className="fz15">in Queue Services</div>
              <div className="title">0</div>
              <div className="text fz14">
                <span className="text-thm">0</span> New Queue
              </div>
            </div>
            <div className="icon text-center">
              <i className="flaticon-review"></i>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xxl-3">
          <div
            className="d-flex align-items-center justify-content-between statistics_funfact"
          >
            <div className="details">
              <div className="fz15">Total Review</div>
              <div className="title">0</div>
              <div className="text fz14">
                <span className="text-thm">0</span> New Review
              </div>
            </div>
            <div className="icon text-center">
              <i className="flaticon-review-1"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-xxl-4">
          <div
            className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative"
          >
            <div className="d-flex justify-content-between bdrb1 pb15 mb20">
              <h5 className="title">Most Viewed Services</h5>
              <a className="text-decoration-underline text-thm6"
              >View All</a
              >
            </div>
            <div className="dashboard-img-service">

              {/* <div>
                <div
                  className="listing-style1 list-style d-block d-xl-flex align-items-center border-0 mb10"
                >
                  <div className="list-thumb flex-shrink-0 bdrs4">

                  </div>
                  <div
                    className="list-content flex-grow-1 pt10 pb10 pl15 pl0-lg"
                  >
                    <h6 className="list-title mb-2">
                      <a href="/service-single"
                      >I will build a fully responsive design in
                        HTML,CSS, bootstrap, and javascript</a
                      >
                    </h6>
                    <div
                      className="list-meta d-flex justify-content-between align-items-center"
                    >
                      <div
                        className="review-meta d-flex align-items-center"
                      >
                        <i
                          className="fas fa-star fz10 review-color me-2"
                        ></i>
                        <p className="mb-0 body-color fz14">
                          <span className="dark-color me-2">4.82</span>
                        </p>
                      </div>
                      <div className="budget">
                        <p className="mb-0 body-color">
                          Starting at<span
                            className="fz17 fw500 dark-color ms-1"
                          >$983</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-4">
          <div
            className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative"
          >
            <div className="d-flex justify-content-between bdrb1 pb15 mb30">
              <h5 className="title">Recent Purchased Services</h5>
              <a className="text-decoration-underline text-thm6"
              >View All</a>
            </div>
            <div className="dashboard-img-service">

              {/* <div>
                <div
                  className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb10"
                >
                  <div
                    className="list-thumb wa flex-shrink-0 bdrs4 mb15-lg"
                  >

                  </div>
                  <div
                    className="list-content flex-grow-1 py-0 pb10 pl15 pl0-lg"
                  >
                    <h6 className="list-title mb-2">
                      Medium.
                      <span className="text-thm">has purchased</span> I will
                      deal with your item Description and assets
                    </h6>
                    <div
                      className="list-meta d-flex justify-content-between align-items-center"
                    >
                      <div
                        className="review-meta d-flex align-items-center"
                      >
                        <p className="mb-0 body-color fz14">
                          February 26, 2021
                        </p>
                      </div>
                      <div className="budget">
                        <p className="mb-0">
                          <span className="fz15 fw500 dark-color"
                          >$983</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-4">
          <div
            className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative"
          >
            <div className="bdrb1 pb15 mb30">
              <h5 className="title">Recent Activity</h5>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


