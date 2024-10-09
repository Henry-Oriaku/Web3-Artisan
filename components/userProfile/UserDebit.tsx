import React, { useEffect, useMemo, useState } from "react";
import { useUserStore } from "@/store/admin/userStore";
import styles from "./UserProfile.module.css";
import { Button, Tabs } from "antd";
import { InfinitySpin } from "react-loader-spinner";
import { formatAmount, formatDate } from "@/utils/formaters";
import Avatar from "../Avatar/Avatar";
import { User } from "@/interfaces";
import { validateForm } from "@/utils/validator";

export default function UserDebit({ userId, onDebitProcessed }: { userId: string | null, onDebitProcessed: (isDebitted: boolean) => void }) {
    // stores
    const { debitUser, users } = useUserStore();
    const [debitAmount, setDebitAmount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const user = useMemo(() => {
        return users.find(user => user.id == userId);
    }, [userId, users]);

    const processDebit = async () => {
        setIsLoading(true);
        const isDebitted = await debitUser(userId, debitAmount);
        setIsLoading(false);
        onDebitProcessed(isDebitted);
    }
    useEffect(() => {
        validateForm('submit');
    }, [debitAmount]);
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.dataContainer}`}>
                <strong style={{ fontSize: '25px', marginTop: '50px', display: 'block' }}>Debit {user?.name}</strong>
                <div className={`${styles.inputContainer}`}>
                    <label className={`form-label ${styles.label}`}>Amount</label>
                    <input required type="number" className={`${styles.input}`} value={debitAmount} onChange={(ev) => setDebitAmount(ev.target.value)} />
                </div>
                <Button onClick={processDebit}>
                    {isLoading ? (
                        <InfinitySpin
                            visible={true}
                            width="50"
                            color="#000"
                        />)
                        : 'Debit'
                    }
                </Button>
            </div>
        </div>
    );
}