// import React from 'react';
// import { NextPage } from 'next';

// const Profile: NextPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
//         <div className="flex items-center justify-between">
//           <h2 className="text-2xl font-bold">Preparing your profile</h2>
//           <div className="w-1/2 bg-gray-300 rounded-full">
//             <div className="w-2/5 bg-green-600 h-2 rounded-full"></div>
//           </div>
//         </div>
//         <form className="mt-8 space-y-4">
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
//               <input 
//                 type="text" 
//                 id="firstName" 
//                 name="firstName" 
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div className="flex-1">
//               <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
//               <input 
//                 type="text" 
//                 id="lastName" 
//                 name="lastName" 
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="goals" className="block text-sm font-medium text-gray-700">Goals: (optional)</label>
//             <input 
//               type="text" 
//               id="goals" 
//               name="goals" 
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div>
//             <button 
//               type="submit" 
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Next
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Profile() {
  return (
    <div className='min-h-screen flex flex-col  bg-[#F2EDE9]'>

<div className='text-4xl font-bold'>
    <h1>Preparing your Profile</h1>
</div>

<div className='flex flex-col'>

<div className='flex justify-between'>

<div className="grid w-full max-w-sm items-center gap-1.5">
      <Label className='text-sm' htmlFor="first-name">First Name</Label>
      <Input type="first-name" id="first-name" />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label className='text-sm' htmlFor="last-name">Last Name</Label>
      <Input type="last-name" id="last-name"/>
    </div>


</div>

<div className="grid w-full max-w-sm items-center gap-1.5">
      <Label className='text-sm' htmlFor="goals">`Goals (optional)`</Label>
      <Input type="goals" id="goals"/>
    </div>


<Link href={'/select-profiles'}>
<Button className='rounded-full drop-shadow-lg shadow-black'>Next</Button>

</Link>

<div></div>

</div>

    </div>
  )
}
