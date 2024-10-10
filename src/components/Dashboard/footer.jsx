import React from 'react'

export default function Footer() {
    return (
        <footer className="dashboard_footer pt30 pb30">
            <div className="container">
                <div
                    className="row align-items-center justify-content-center justify-content-md-between"
                >
                    <div className="col-auto">
                        <div className="copyright-widget">
                            <p className="mb-md-0">
                                © Web3 Artisans. 2024. All rights reserved.
                            </p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div
                            className="footer_bottom_right_btns at-home8 text-center text-lg-end"
                        >
                            <ul className="p-0 m-0">
                                <li className="list-inline-item bg-white">
                                    <div className="dropdown bootstrap-select show-tick">
                                        <button
                                            type="button"
                                            className="btn dropdown-toggle btn-light"
                                            data-bs-toggle="dropdown"
                                        >
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">
                                                        Euro
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu">
                                            <div className="inner show">
                                                <ul className="dropdown-menu inner show">
                                                    <li className="">
                                                        <a className="dropdown-item" id="bs-select-2-0"
                                                        ><span
                                                            className="bs-ok-default check-mark"
                                                        ></span
                                                            ><span className="text">US$ USD</span></a
                                                        >
                                                    </li>
                                                    <li className="selected active">
                                                        <a className="dropdown-item" id="bs-select-2-0"
                                                        ><span
                                                            className="bs-ok-default check-mark"
                                                        ></span
                                                            ><span className="text">Euro</span></a
                                                        >
                                                    </li>
                                                    <li className="">
                                                        <a className="dropdown-item" id="bs-select-2-0"
                                                        ><span
                                                            className="bs-ok-default check-mark"
                                                        ></span
                                                            ><span className="text">Pound</span></a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-inline-item bg-white">
                                    <div className="dropdown bootstrap-select show-tick">
                                        <button
                                            type="button"
                                            className="btn dropdown-toggle btn-light"
                                            data-bs-toggle="dropdown"
                                        >
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">
                                                        English
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu">
                                            <div className="inner show">
                                                <ul className="dropdown-menu inner show">
                                                    <li className="selected active">
                                                        <a className="dropdown-item" id="bs-select-3-0"
                                                        ><span
                                                            className="bs-ok-default check-mark"
                                                        ></span
                                                            ><span className="text">English</span></a
                                                        >
                                                    </li>
                                                    <li className="">
                                                        <a className="dropdown-item" id="bs-select-3-0"
                                                        ><span
                                                            className="bs-ok-default check-mark"
                                                        ></span
                                                            ><span className="text">Frenc</span></a
                                                        >
                                                    </li>
                                                    <li className="">
                                                        <a className="dropdown-item" id="bs-select-3-0"
                                                        ><span
                                                            className="bs-ok-default check-mark"
                                                        ></span
                                                            ><span className="text">Italian</span></a
                                                        >
                                                    </li>
                                                    <li className="">
                                                        <a className="dropdown-item" id="bs-select-3-0"
                                                        ><span
                                                            className="bs-ok-default check-mark"
                                                        ></span
                                                            ><span className="text">Spanish</span></a
                                                        >
                                                    </li>
                                                    <li className="">
                                                        <a className="dropdown-item" id="bs-select-3-0"
                                                        ><span
                                                            className="bs-ok-default check-mark"
                                                        ></span
                                                            ><span className="text">Turkey</span></a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
