import React from 'react'
import './feelSpecial.css'
import Button from '../common/Button'

const FeelSpecial = () => {
  return (
    <div className='feel-special photo-section'>
        <div className='max-width'>
            <div className='photo-section-child'>
              <div className='photo-section-top'>
                    <div className='photo-section-heading'>
                        feel special more  often.
                    </div>
                    <div className='photo-section-subheading'>
                           exclusive rewards for paying your bills.
                    </div>
              </div>
              <div className='photo-section-bottom'>
                <div className='photo-section-description'>
                manage your credit cards better and improve your credit score: 
                receive payment reminders, uncover hidden fees, get spending insights, 
                and discover ways to maximize card benefits.
                </div>

                <div>
                    <Button buttonText='Explore rewards'/>
                </div>

              </div>

            </div>

        </div>
        
    </div>
  )
}

export default FeelSpecial