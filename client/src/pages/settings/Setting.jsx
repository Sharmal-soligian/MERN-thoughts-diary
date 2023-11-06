import React from 'react';
import './setting.css';
import SideBar from '../../components/sidebar/SideBar';

const Setting = () => {
  return (
    <div className='settings'>
        <div className="settingWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">
                    Update your account
                </span>
                <span className="settingsDeleteTitle">
                    Delete account
                </span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsProfilePicture">
                    <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="profile" />
                    <label htmlFor="fileInput">
                    <i className="settingsProfilePictureIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{ display: 'none' }} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='Sharmal' />
                <label>Email</label>
                <input type="email" placeholder='sharmal@gmail.com' />
                <label>Password</label>
                <input type="password" />
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <SideBar />
    </div>
  )
}

export default Setting;