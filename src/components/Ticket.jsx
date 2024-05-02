import React from 'react'
import { GoSearch } from "react-icons/go";
import { IoNotifications } from "react-icons/io5";
import img from '../../src/assets/header.png'
import sort from '../../src/assets/sort.svg'
import filter from '../../src/assets/filter.svg'
import man from '../../src/assets/man.png'
import { CiMenuKebab } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import woman from '../../src/assets/woman.png'
import woman_2 from '../../src/assets/woman_2.png'
import man_2 from '../../src/assets/man_2.png'
import man_3 from '../../src/assets/man_3.png'
import man_4 from '../../src/assets/man_4.png'
import woman_3 from '../../src/assets/woman_3.png'
import woman_4 from '../../src/assets/woman_4.png'

const Ticket = () => {
  return (
    <div className='w-[85%] bg-[#F7F8FC]'>
<div className='flex items-center justify-between px-[30px] py-[37px]'><h1 className='text-[24px] font-bold tracking-[0.3px]'>Tickets</h1>
<div className='flex items-center gap-8'>
    <div className='flex items-center gap-6 text-[#C5C7CD]  '>
        <input type="search" className='bg-[transparent]' id='search' />
        <label htmlFor="search"><GoSearch /></label>
        <IoNotifications />

    </div>
    <span className='block w-[0px] h-[32px] border-[1px] border-[solid] border-#DFE0EB'></span>
    <div className='flex items-center gap-3'><h1 className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>Jones Ferdinand</h1><img className='rounded-[50px] w-[63px] border-[5px] border-[solid] border-[#DFE0EB]' src={img} alt="" /></div>
</div>
</div>
<div className=' w-[1200px] border rounded-lg mx-auto bg-white'>
    <div className='pt-[32px] px-[32px] mb-[12px]'>
        <div className='flex justify-between'>
            <h1 className='text-[19px] font-bold tracking-[0.4px]'>All tickets</h1>
            <div className='flex gap-8'><p className='flex gap-2 text-[14px] font-semibold leading-[20px] tracking-[0.2px] items-center'><img src={sort} alt="" />Sort</p>
            <p className='flex gap-2 items-center text-[14px] font-semibold leading-[20px] tracking-[0.2px]'><img src={filter} alt="" />Filter</p>
            </div>
        </div>
        <div className='flex justify-between mt-12 '><p className='text-[14px] font-bold tracking-[0.2px] text-[#9FA2B4]'>Ticket details</p> <div className='flex gap-[130px] pr-[100px]'><p className='text-[14px] font-bold tracking-[0.2px] text-[#9FA2B4]'>Customer name</p><p className='text-[14px] font-bold tracking-[0.2px] text-[#9FA2B4]'>Date</p><p className='text-[14px] font-bold tracking-[0.2px] text-[#9FA2B4]'>Priority</p></div></div>


    </div> 
    <div className='border-y-2 hover:bg-[#F7F8FF]'>
        <div className='flex justify-between px-[30px] py-[30px]'>
    <div className='flex items-center gap-6' ><img className='rounded-[50px]' src={man} alt="" /><div><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>Contact Email not Linked</p><p className='text-[12px]  leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>Updated 1 day ago</p></div></div>
<div className='flex items-center '>
    <div className='mr-[158px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>Tom Cruise</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>on 24.05.2019</p></div>
    <div className='mr-[75px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>May 26, 2019</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>6:30 PM</p></div>
    <button className='mr-[80px] bg-[#F12B2C] text-white px-[12px] py-[5px] rounded-full border-[#F12B2C] hover:bg-white border hover:text-[#F12B2C] '>High</button><CiMenuKebab />
</div>
    </div>
    
    </div>
    <div className='border-y-1 hover:bg-[#F7F8FF]'>
        <div className='flex justify-between px-[30px] py-[30px]'>
    <div className='flex items-center gap-6' ><img src={woman} className='rounded-[50px]' alt="" /><div><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>Adding Images to Featured Posts</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>Updated 1 day ago</p></div></div>
<div className='flex items-center '>
    <div className='mr-[154px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>Matt Damon</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>on 24.05.2019</p></div>
    <div className='mr-[77px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>May 26, 2019</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>8:00 AM</p></div>
    <button className='mr-[80px] bg-[#FEC400] text-white px-[15px] py-[5px] rounded-full border-[#FEC400] hover:bg-white border hover:text-[#FEC400]'>low</button><CiMenuKebab />
</div>
    </div>
    
    </div>
    <div className='border-y-2 hover:bg-[#F7F8FF]'>
        <div className='flex justify-between px-[30px] py-[30px]'>
    <div className='flex items-center gap-6' ><img src={woman_2} className='rounded-[50px]' alt="" /><div><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>When will I be charged this month?</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>Updated 1 day ago</p></div></div>
<div className='flex items-center '>
    <div className='mr-[136px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>Robert Downey</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>on 24.05.2019</p></div>
    <div className='mr-[75px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>May 26, 2019</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>6:30 PM</p></div>
    <button className='mr-[80px] bg-[#F12B2C] text-white px-[12px] py-[5px] rounded-full border-[#F12B2C] hover:bg-white border hover:text-[#F12B2C]'>High</button><CiMenuKebab />
</div>
    </div>
    
    </div>
    <div className='border-y-1 hover:bg-[#F7F8FF]'>
        <div className='flex justify-between px-[30px] py-[30px]'>
    <div className='flex items-center gap-6' ><img src={man_2} className='rounded-[50px]' alt="" /><div><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>Payment not going through</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>Updated 2 day ago</p></div></div>
<div className='flex items-center '>
    <div className='mr-[147px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>Christian Bale</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>on 24.05.2019</p></div>
    <div className='mr-[77px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>May 25, 2019</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>6:30 PM</p></div>
    <button className='mr-[60px] bg-[#29CC97] text-white px-[12px] py-[5px] rounded-full border-[#29CC97] hover:bg-white border hover:text-[#29CC97]'>Normal</button><CiMenuKebab />
</div>
    </div>
    
    </div>
    <div className='border-y-2 hover:bg-[#F7F8FF]'>
        <div className='flex justify-between px-[30px] py-[30px]'>
    <div className='flex items-center gap-6' ><img src={man_3} className='rounded-[50px]' alt="" /><div><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>Unable to add replies</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>Updated 2 day ago</p></div></div>
<div className='flex items-center '>
    <div className='mr-[157px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>Henry Cavil</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>on 24.05.2019</p></div>
    <div className='mr-[77px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>May 25, 2019</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>6:30 PM</p></div>
    <button className='mr-[80px] bg-[#F12B2C] text-white px-[12px] py-[5px] rounded-full border-[#F12B2C] hover:bg-white border hover:text-[#F12B2C]'>High</button><CiMenuKebab />
</div>
    </div>
    
    </div>
    <div className='border-y-1 hover:bg-[#F7F8FF]'>
        <div className='flex justify-between px-[30px] py-[30px]'>
    <div className='flex items-center gap-6' ><img src={man_4} className='rounded-[50px]' alt="" /><div><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>Downtime since last week</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>Updated 3 day ago</p></div></div>
<div className='flex items-center '>
    <div className='mr-[160px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>Chris Evans</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>on 24.05.2019</p></div>
    <div className='mr-[77px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>May 25, 2019</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>6:30 PM</p></div>
    <button className='mr-[60px] bg-[#29CC97] text-white px-[12px] py-[5px] rounded-full border-[#29CC97] hover:bg-white border hover:text-[#29CC97]'>Normal</button><CiMenuKebab />
</div>
    </div>
    
    </div>
    <div className='border-t-2 hover:bg-[#F7F8FF]'>
        <div className='flex justify-between px-[30px] py-[30px]'>
    <div className='flex items-center gap-6' ><img src={woman_3} className='rounded-[50px]' alt="" /><div><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>Referral Bonus</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>Updated 4 day ago</p></div></div>
<div className='flex items-center '>
    <div className='mr-[158px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>Sam Smith</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>on 24.05.2019</p></div>
    <div className='mr-[77px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>May 25, 2019</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>6:30 PM</p></div>
    <button className='mr-[75px] bg-[#FEC400] text-white px-[15px] py-[5px] rounded-full border-[#FEC400] hover:bg-white border hover:text-[#FEC400]'>Low</button><CiMenuKebab />
</div>
    </div>
    
    </div>
    <div className='border-y-2 hover:bg-[#F7F8FF] ]'>
        <div className='flex justify-between px-[30px] py-[30px]'>
    <div className='flex items-center gap-6' ><img src={woman_4} className='rounded-[50px]' alt="" /><div><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>How do I change my password?</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>Updated 6 days ago</p></div></div>
<div className='flex items-center '>
    <div className='mr-[147px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>Steve Rogers</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>on 24.05.2019</p></div>
    <div className='mr-[75px]'><p className='text-[14px] font-semibold leading-[20px] tracking-[0.2px]'>May 24, 2019</p><p className='text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#C5C7CD]'>6:30 PM</p></div>
    <button className='mr-[60px] bg-[#29CC97] text-white px-[12px] py-[5px] rounded-full border-[#29CC97] hover:bg-white border hover:text-[#29CC97]'>Normal</button><CiMenuKebab />
</div>
    </div>
    
    </div>
    

    <div className='flex justify-between px-[30px] py-[27px]'><div></div><div className='flex gap-[100px]'><p className='flex items-center'>Rows per page: 8 <IoMdArrowDropdown /></p>
    <p className='flex items-center'>1-8 of 1240 <IoIosArrowBack /><IoIosArrowForward /> </p></div>
    </div>
</div> 

</div>

  )
}

export default Ticket