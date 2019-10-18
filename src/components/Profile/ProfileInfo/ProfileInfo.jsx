import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return(
        <div >
            <img src='https://singularityhub.com/wp-content/uploads/2018/12/3D-abstract-quantum-tech_shutterstock_714159727-1068x601.jpg' alt = 'background'/>
            <div>

                <img src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6bc00b5b-6315-46be-b929-605739cf0a30/d4qb62b-a8131be1-05e0-4dd4-9b64-f33c3fab31c4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZiYzAwYjViLTYzMTUtNDZiZS1iOTI5LTYwNTczOWNmMGEzMFwvZDRxYjYyYi1hODEzMWJlMS0wNWUwLTRkZDQtOWI2NC1mMzNjM2ZhYjMxYzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LPzfpeqQzturkSJTfQQRsChfweTaH1QOxae5D3Ppjy4' alt='profileImage'/>
            </div>
            <div className='description-block'>
                ava + description
            </div>
        </div>
    );
}
export default ProfileInfo;