import React from 'react';

const DashboardStats = () => {
    return (
        <div className='dashboard'>
            
                <div class="app-box">
                    <div class="app-icon">
                        <img src="icon.png" alt="Application Icon"></img>
                    </div>
                    <div class="app-text">
                        <span class="app-count">410</span>
                        <span class="app-label">Active Applications</span>
                    </div>
                </div>
                <div class="app-box">
                    <div class="app-icon">
                        <img src="icon.png" alt="Application Icon"></img>
                    </div>
                    <div class="app-text">
                        <span class="app-count">2772</span>
                        <span class="app-label">Updates</span>
                    </div>
                </div>
                
                <div class="days-text">
                        <span class="label1">Total Ordered</span>
                        <span class="label2">29</span>
                        {/* <span class="label3">CRITICAL</span> */}
                </div>
                <span className="days-widget">
                <div class="days-text">
                        <span class="label1">Total Processed</span>
                        <span class="label2">20</span>
                        {/* <span class="label3">High</span> */}
                    </div>
                </span>
                <span className="days-widget">
                <div class="days-text">
                        <span class="label1">Total Price</span>
                        <span class="label2">$ 2000</span>
                        {/* <span class="label3">MEDIUM</span> */}
                    </div>
                </span>
        
        </div>
    );
};

export default DashboardStats;