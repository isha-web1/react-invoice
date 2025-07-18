import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Filter, Plus } from 'lucide-react';

const Header = () => {
    return (
        <div className='flex justify-between items-center '>
           <div>
                <h1 className='text-3xl font-bold text-white mb-2'>Invoice App</h1>
                <p className='text-slate-400'>There are 0 total invoice</p>
           </div>
           <div className='flex items-center gap-4'>
             <Menu as='div' className='relative'>
                <Menu.Button className='flex items-center space-x-2 text-white'>
                    <Filter size={20} />
                    <span>Filter by status</span>
                </Menu.Button>
                <Menu.Items className='absolute right-0 mt-2 w-48 bg-white text-slate-900 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <Menu.Item>
                        <button className='w-full text-left px-4 py-2 rounded-full flex'>status</button>
                    </Menu.Item>
                </Menu.Items>
             </Menu>
             <button type='button' className='bg-violet-500 hover:bg-violet-600 text-white px-6 py-2 rounded-full flex items-center gap-2'>
                 <div className='bg-white rounded-full p-2'>
                    <Plus size={16} className='text-violet-500' />
                 </div>
                  <span>New invoice</span>
             </button>
           </div>
        </div>
    );
};

export default Header;