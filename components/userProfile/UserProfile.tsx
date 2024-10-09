import React, { useEffect, useState } from "react";
import { useUserStore } from "@/store/admin/userStore";
import styles from "./UserProfile.module.css";
import { Tabs } from "antd";
import { InfinitySpin } from "react-loader-spinner";
import { formatAmount, formatDate } from "@/utils/formaters";
import Avatar from "../Avatar/Avatar";
import { User } from "@/interfaces";

export default function UserProfile({ userId }: { userId: string | null }) {
    // stores
    const { updateUserStatus, fetchUserDetails } = useUserStore();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (userId) {
            setUser(null);
            async function getUserDetails() {
                const userDetails = await fetchUserDetails(userId);
                setUser(userDetails);
            }
            getUserDetails();
        }
    }, [userId]
    );
    return (
        <>
            {user == null ?
                <div className="w-100 d-flex justify-content-center">
                    <InfinitySpin
                        visible={true}
                        width="200"
                        color="#000"
                    />
                </div>
                :
                <div className={`${styles.container}`}>
                    <div className={`${styles.background}`}></div>
                    <div className={`${styles.dataContainer}`}>
                        <div className={`d-flex justify-content-sm-start align-items-sm-center ${styles.header}`}>
                            <Avatar className={`rounded-circle ${styles.avatar}`} alt={user.name} src={user.profile} size={260} />

                        </div>
                        <strong style={{ fontSize: '25px', marginTop: '50px', display: 'block' }}>User Details</strong>
                        <div className={`${styles.inputContainer}`}>
                            <label className={`form-label ${styles.label}`}>Name</label>
                            <input type="text" className={`${styles.input}`} value={user.name} readOnly disabled />
                        </div>
                        <div className={`${styles.inputContainer}`}>
                            <label className={`form-label ${styles.label}`}>Email</label>
                            <input type="text" className={`${styles.input}`} value={user.email} readOnly disabled />
                        </div>
                        <div className={`${styles.inputContainer}`}>
                            <label className={`form-label ${styles.label}`}>Date Registered</label>
                            <input type="text" className={`${styles.input}`} value={formatDate(user.createdAt)} readOnly disabled />
                        </div>
                        <div className={`${styles.inputContainer}`}>
                            <label className={`form-label ${styles.label}`}>Investment Type</label>
                            <input type="text" className={`${styles.input}`} value={user.investmentType} readOnly disabled />
                        </div>
                        <div className={`${styles.inputContainer}`}>
                            <label className={`form-label ${styles.label}`}>Balance</label>
                            <input type="text" className={`${styles.input}`} value={formatAmount(user.wallet.balance)} readOnly disabled />
                        </div>
                    </div>
                </div>
            }
        </>
    );
}