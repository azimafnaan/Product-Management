import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
export default function Sidebar () {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <HomeIcon />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon"></TrendingUpIcon>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PersonOutlineIcon />
                            Users

                        </li>
                        <li className="sidebarListItem">
                            <ProductionQuantityLimitsIcon />
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChartIcon />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineIcon />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineIcon />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineIcon />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportGmailerrorredIcon />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
