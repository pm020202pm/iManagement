import React from 'react';
import './DashboardStats.css';
import { TipsAndUpdates } from '@mui/icons-material';

const DashboardStats = () => {
    return (
        <div className='dashboard'>
            <IconTextBox icon={<TipsAndUpdates />} count={410} label="Active Applications"/>
            <IconTextBox icon={<TipsAndUpdates />} count={2772} label="Updates"/>
            <LabelText3 label="Total Ordered" value={29}/>
            <div className="vline"></div>
            <LabelText3 label="Total Processed" value={20}/>
            <div className="vline"></div>
            <LabelText3 label="Total Delivered" value={10}/>
        </div>
    );
};

export default DashboardStats;

export const IconTextBox = ({icon, count, label}) => {
    return (
        <div class="app-box">
            <div class="app-icon">{icon}</div>
            <div class="app-text">
                <span class="app-count">{count}</span>
                <span class="app-label">{label}</span>
            </div>
        </div>
    )
}

export const LabelText3 = ({label, value}) => {
    return (
        <>
        <div className="days-text">
            <div className="label1">{label}</div>
            <div className="label2">{value}</div>
        </div>
        </>
    )
}