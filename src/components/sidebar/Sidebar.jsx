import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Admin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icons' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>

                    <li>
                        <PersonIcon className='icons' />
                        <span>Users</span>
                    </li>
                    <li>
                        <ProductionQuantityLimitsIcon className='icons' />
                        <span>Products</span>
                    </li>
                    <li>
                        <FilterFramesIcon className='icons' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className='icons' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>

                    <li>
                        <InsertChartIcon className='icons' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className='icons' />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>

                    <li>
                        <LocalHospitalIcon className='icons' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <BookIcon className='icons' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icons' />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>

                    <li>
                        <AccountBoxIcon className='icons' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icons' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar