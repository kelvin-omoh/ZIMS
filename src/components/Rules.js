import React from 'react' 
import { Link } from 'react-router-dom'

const Rules = () => {
  return (
    <div className='max-w-[1240px] mt-10 mx-[12%] py-4 px-4'>
         <div className="flex justify-center">
        <div className="w-full h-fit md:h-[130px] bg-[#F0EDD4] rounded-2xl py-11 px-9  text-center">
          <p className="font-semibold text-sm md:text-lg">
          We reserve the right to refuse service to those that do not follow park rules or pet guidelines.
          </p>
        </div>
      </div>
        <div className='pt-11 w-full'>
            <h1 className='pb-2 text-xl md:text-4xl'>General Rules</h1>
            <li className='pl-4 py-1'>No smoking on the premises.</li>
            <li className='pl-4 py-1'>Feeding or touching our animals is strictly prohibited..</li>
            <li className='pl-4 py-1'>No re-entry after exiting the park.</li>
            <li className='pl-4 py-1'>This facility is under constant video surveillance.</li>
        </div>
        <div className='py-7'>
            <h1 className='pb-2 text-xl md:text-4xl'>Drive-Thru Guidlines</h1>
            <li className='pl-4 py-1'> Enter at your own risk. UI-ZIMS is NOT responsible for any damages.</li>
            <li className='pl-4 py-1'>Windows up, doors closed, and stay in your vehicle.</li>
            <li className='pl-4 py-1'>The speed limit is 15mph.</li>
            <li className='pl-4 py-1'>Do not stop when animals are near.</li>
            <li className='pl-4 py-1'>Stay to the right side of the road so others can pass.</li>
            <li className='pl-4 py-1'>Drive through as many times as you would like before leaving the park.</li>
            <li className='pl-4 py-1'>The drive-thru portion of the park will close at the same time as the posted last admittance.</li>
            <li className='pl-4 py-1'>Call if you experience trouble or to report a problem 703-657-654.</li>
            <li className='pl-4 py-1'>No animals are permitted in the walk-thru portion of the park. This includes all pets AND service animals.</li>
            <li className='pl-4 py-1'>Most vehicles can drive through ZIMS well-maintained gravel roads. Each vehicle must be completely enclosed and have operational windows. No motorcycles, ATV/all-terrain, or open-top jeeps or convertibles.</li>
            <li className='pl-4 py-1'>Visitors will be asked to remove any items that may protrude from their vehicles including bicycles, motorized scooters, luggage, coolers, wheel covers, etc. UI-ZIMS provides a spot at the entrance for you to leave these items during your visit</li>
        </div>
       
        <div className='py-7'>
            <h1 className='pb-2 text-xl md:text-4xl'>Pet Guidlines</h1>
            <li className='pl-4 py-1'>Visitors can travel through the drive-thru portion of our park with domestic pets enclosed in their vehicles with the windows up.</li>
            <li className='pl-4 py-1'>In the walk-thru area, leashed domestic pets and service animals can be walked in the parking lot, but may not enter the walk-thru portion of the park.</li>
            <li className='pl-4 py-1'>Pet owners are expected to clean up after their animals and are completely liable for their behavior.</li>
        </div>
        <div className='py-7'>
            <h1 className='pb-2 text-xl md:text-4xl'>Handicapped Accessible</h1>
            <li className='pl-4 py-1'>UI-ZIMS is fully accessible for those with mobility challenges.
             Wheelchairs are available upon request in UI Zoo on a first come first serve basis.</li>
        </div>
        <div className='py-7'>
            <h1 className='pb-2 text-xl md:text-4xl'>Food/Drink Restrictions</h1>
            <li className='pl-4 py-1'>UI-ZIMS allows guests to bring in a picnic lunch in our designated picnic
             areas or any grassy area. We ask that you leave the umbrella tables for those
             purchasing food or beverages from the ZIMS Grille. No alcohol may be brought onto the premises.</li>
            
        </div>
        <div className=' flex justify-center items-center py-4'>
        <button className="bg-orange-500 text-white py-4 font-bold px-11">
            <Link to="/tickets">Buy Tickets Now</Link></button>
        </div>
    </div>
  )
}

export default Rules