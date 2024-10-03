import React from 'react'
import './credSecurity.css'
import Button from '../common/Button'

const CredSecurity = () => {
  return (
    <div className='cred-security photo-section'>
        <div className='max-width'>
            <div className='photo-section-child'>
              <div className='photo-section-top'>
                    <div className='photo-section-heading'>
                       security first. and second.
                    </div>
                    <div className='photo-section-subheading'>
                           what's yours remains only yours.
                    </div>
              </div>
              <div className='photo-section-bottom'>
                <div className='photo-section-description'>
                manage your credit cards better and improve your credit score: 
                receive payment reminders, uncover hidden fees, get spending insights, 
                and discover ways to maximize card benefits.
                </div>

                <div>
                    <Button buttonText='Become a member'/>
                </div>

              </div>

            </div>

        </div>
        
    </div>
  )
}

export default CredSecurity