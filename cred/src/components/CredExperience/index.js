import React from 'react'
import './credExperience.css'
import Button from '../common/Button'

const CredExperience = () => {
  return (
    <div className='cred-experience photo-section'>
        <div className='max-width'>
            <div className='photo-section-child'>
              <div className='photo-section-top'>
                    <div className='photo-section-heading'>
                       We take your money matters seriously.
                    </div>
                    <div className='photo-section-subheading'>
                           so that you don't have to.
                    </div>
              </div>
              <div className='photo-section-bottom'>
                <div className='photo-section-description'>
                manage your credit cards better and improve your credit score: 
                receive payment reminders, uncover hidden fees, get spending insights, 
                and discover ways to maximize card benefits.
                </div>

                <div>
                    <Button buttonText='Experience the upgrade'/>
                </div>

              </div>

            </div>

        </div>
        
    </div>
  )
}

export default CredExperience