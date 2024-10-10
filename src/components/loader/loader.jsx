import React from 'react';
import { InfinitySpin } from "react-loader-spinner";
import './Loader.css';

export default function Loader() {
    const styles = StyleSheet.create({
        loader: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        }
    });
    return (
        <div className={styles.loader}>
            <InfinitySpin
                visible={true}
                width="200"
                color="#fff"
                ariaLabel="infinity-spin-loading"
            />
        </div>
    );
};
