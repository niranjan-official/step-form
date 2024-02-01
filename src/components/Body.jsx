import React from 'react'
import { Stepper } from 'react-form-stepper';

const Body = ({ children , dataIndex}) => {
    return (
        <div className='w-full md:w-1/2 h-max flex flex-col bg-violet-100 md:shadow-md p-4 md:p-0'>
            <div className='h-max bg-white border-t-8 border-violet-600 rounded-t-lg'>

                <h1 className='text-3xl p-4 pb-0'>Personal Details</h1>
                <Stepper
                    steps={[{ label: 'Personal' }, { label: 'Qualification' }, { label: 'Eligibility' }]}
                    activeStep={dataIndex} styleConfig={{
                        activeBgColor: '#8b5cf6',
                        activeTextColor: '#fff',
                        completedBgColor: '#4c1d95',
                        completedTextColor: '#fff',
                      }}
                />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Body