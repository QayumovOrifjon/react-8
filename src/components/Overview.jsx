import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import Header from '../../src/assets/header.png'
import { GoPlus } from "react-icons/go";

const Overview = () => {
    return (
       <div className='w-[100%] bg-[#F7F8FC] '>
      <div className='flex justify-between items-center py-[37px] px-[30px] mb-[30px]'>
<h3 className='text-[24px] font-bold'>Overview</h3>

<div className='flex gap-[32px]'><div className='flex items-center gap-6'><label className='flex items-center'>


<input type="search" id='search' className='bg-transparent'  />
<CiSearch className='text-[#C5C7CD]' />
</label >
<IoMdNotifications className='text-[#C5C7CD]'/>
</div>
<span className='block w-[0px] h-[32px] border-[1px] border-[solid] border-#DFE0EB mt-[15px]'>

</span>
<div className='flex items-center gap-[14px]'><h4 className='text-[14px] font-semi-bold leading-[20px]'>Jones Ferdinand</h4>
<img className='rounded-[50px] w-[63px] border-[5px] border-[solid] border-[#DFE0EB]' src={Header} alt="" />
</div>
</div>

      </div>

<div className='flex justify-between p-[30px] gap-[30px]'>
  <div className='text-center bg-[#fff] border-[1px] w-[25%] py-[24px] rounded-lg hover:border-[#3751FF] hover:text-[#3751FF]'>
      <p className='text-[19px] font-semi-bold text-[#9FA2B4] hover:text-[#3751FF]'>Unresolved</p>
      <h1 className='text-[40px] font-bold'>60</h1>
  </div>
  <div className='text-center bg-[#fff] border-[1px] w-[25%] py-[24px] rounded-lg hover:border-[#3751FF] hover:text-[#3751FF]'>
      <p className='text-[19px] font-semi-bold text-[#9FA2B4] hover:text-[#3751FF]'>Overdue</p>
      <h1 className='text-[40px] font-bold'>16</h1>
  </div> <div className='text-center bg-[#fff] border-[1px] w-[25%] py-[24px] rounded-lg hover:border-[#3751FF] hover:text-[#3751FF]'>
      <p className='text-[19px] font-semi-bold text-[#9FA2B4] hover:text-[#3751FF]'>Open</p>
      <h1 className='text-[40px] font-bold'>43</h1>
  </div> <div className='text-center bg-[#fff] border-[1px] w-[25%] py-[24px] rounded-lg hover:border-[#3751FF] hover:text-[#3751FF]'>
      <p className='text-[19px] font-semi-bold text-[#9FA2B4] hover:text-[#3751FF]'>On hold</p>
      <h1 className='text-[40px] font-bold'>64</h1>
  </div>
</div>

<div>
<div className='flex justify-between px-[30px]'>
<div className='bg-[#fff] w-[90%] h-[546px] p-[32px] border rounded-tl-lg rounded-bl-lg'><h2 className='text-[19px] font-bold'>Today’s trends</h2>
  <div className='flex justify-between'> <p className='text-[12px] leading-[16px] text-[#9FA2B4]'>as of 25 May 2019, 09:41 PM</p> <div className='flex gap-8'><div className='flex items-center items-center gap-3'><span className='block w-[26px] h-[0px] border-[2px] border-[solid] border-[#DFE0EB] rounded-lg'></span><p className='text-[12px] font-semi-bold text-[#9FA2B4]'>Today</p></div><div className='flex items-center gap-3'><span className='block w-[26px] h-[0px] border-[2px] border-[solid] border-[#DFE0EB] rounded-lg'></span><p className='text-[12px] font-semi-bold text-[#9FA2B4]'>Yesterday</p></div></div></div>
  </div>
  <div className='container mx-auto w-[30%]'>
      <div className='text-center border w-[350px] bg-[#fff] py-[30px] rounded-tr-lg'><p className='font-semi-bold leading-[22px] text-[#9FA2B4]'>Resolved</p>
      <h2>449</h2>
      </div>
      <div className='text-center border   w-[350px] bg-[#fff]  py-[30px]'><p className='font-semibold text-[16px] text-[#9FA2B4]'>Received</p>
      <h2>426</h2>
      </div>   <div className='text-center w-[350px] bg-[#fff] border py-[30px]'><p className='font-semibold text-[16px] text-[#9FA2B4]'>Average first response time</p>
      <h2>33m</h2>
      </div>   <div className='text-center w-[350px] bg-[#fff] border py-[30px]'><p className='font-semibold text-[16px] text-[#9FA2B4]'>Average response time</p>
      <h2>3h 8m</h2>
      </div>   <div className='text-center w-[350px] bg-[#fff] border py-[30px] rounded-br-lg'><p className='font-semibold text-[16px] text-[#9FA2B4]'>Resolution within SLA</p>
      <h2>94%</h2>
      </div>
  </div>
</div>
<div className='flex gap-7 p-[30px]'>
  <div className='w-[50%] bg-[#fff] pt-[32px] border-[2px] rounded-lg'>
  <div className='flex px-[32px] justify-between'> <h1 className='text-[19px] font-bold tracking-[0.4px]'>Unresolved tickets</h1><button className='text-[#3751FF]'>View details</button></div>
  <p className='px-[32px] text-[#9FA2B4] text-[12px] leading-[16px] mt-[8px] mb-[36px]'>Group: <span className='text-[#4B506D] font-semi-bold'>Support</span></p>
  <h1 className='flex justify-between px-[32px] py-[20px] text-[14px] font-semibold leading-[20px]'>Waiting on Feature Request            <p className='text-[#9FA2B4] text-[14px] font-semibold'>4238</p></h1>
  <h1 className='flex justify-between px-[32px] py-[27px] text-[14px] font-semibold leading-[20px] border-y-2'>Awaiting Customer Response <p className='text-[#9FA2B4] text-[14px] font-semibold'>1005</p></h1>
  <h1 className='flex justify-between px-[32px] py-[27px] text-[14px] font-semibold leading-[20px] border-y-1'>Awaiting Developer Fix <p className='text-[#9FA2B4] text-[14px] font-semibold'>914</p></h1>
  <h1 className='flex justify-between px-[32px] py-[27px] text-[14px] font-semibold leading-[20px] border-t-2'>Pending <p className='text-[#9FA2B4] text-[14px] font-semibold'>281</p></h1>
  </div>
  <div className='w-[50%] bg-[#fff] pt-[32px] border-[2px] rounded-lg'>
  <div className='flex px-[32px] justify-between'> <h1 className='text-[19px] font-bold tracking-[0.4px]'>Tasks</h1><button className='text-[#3751FF]'>View all</button></div>
  <p className='px-[32px] text-[#9FA2B4] text-[12px] leading-[16px] mt-[8px] mb-[56px]'>Today</p>
  <div className='flex items-center justify-between px-[30px]'>  <p className='text-[14px] font-semibold leading-[20px] text-[#C5C7CD] mb-[20px]'>Create new task</p><button className='text-[#9FA2B4] bg-[#F0F1F7] p-[5px] rounded-lg'><GoPlus /></button>  </div>
  <div className='flex justify-between px-[30px] border-y-2 py-[20px]'>
  <form className='flex gap-4 items-center'>
      <input type="checkbox" id='check' />
      <label htmlFor="check" className='text-[14px] font-semibold tracking-[0.4px]'>
      
          Finish ticket update
      </label></form>
      <button className='text-white bg-[#FEC400] py-1 px-3 rounded-lg border border-[#FEC400] hover:bg-white hover:text-[#FEC400]'>Urgent</button>
  </div>
  <div className='flex justify-between px-[30px] py-[20px]'>
  <form className='flex gap-4 items-center'>
      <input type="checkbox" id='check' />
      <label htmlFor="check" className='text-[14px] font-semibold tracking-[0.4px]'>
      
      Create new ticket example
      </label></form>
      <button className='text-white bg-[#29CC97] py-1 px-3 rounded-lg border border-[#29CC97] hover:bg-white hover:text-[#29CC97]'>New</button>
  </div>
  <div className='flex justify-between px-[30px] border-t-2 py-[20px]'>
  <form className='flex gap-4 items-center'>
      <input type="checkbox" id='check' />
      <label htmlFor="check" className='text-[14px] font-semibold tracking-[0.4px]'>
      
      Update ticket report
      </label></form>
      <button className='text-white bg-[#F0F1F7] py-1 px-3 rounded-lg border border-[#F0F1F7] hover:bg-white hover:text-[#F0F1F7]'>Default</button>
  </div>

  </div>
</div>
</div>

  </div>
    )
}

export default Overview