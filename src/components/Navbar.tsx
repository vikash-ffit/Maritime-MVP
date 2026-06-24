/* eslint-disable react-hooks/set-state-in-effect */

import React, { useEffect, useState } from 'react';
import { Sun, Moon, Bell, ChevronDown, UserCircle, Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import { UserRole } from '../../types/types';
import { usePathname } from 'next/navigation';
import { usePageTitle } from './PageTitleContext';

interface NavbarProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  currentRole,
  onRoleChange,
  toggleSidebar,
}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { dynamicLabels } = usePageTitle();

  useEffect(() => {
    setMounted(true);
  }, []);

  const getPageTitle = (path: string) => {
    if (!path || path === '/dashboard') return 'Dashboard';
    const parts = path.split('/').filter(Boolean);
    if (parts.length === 0) return 'Dashboard';
    
    // Capitalize each part or use dynamic label, then join
    return parts.map(part => {
      if (dynamicLabels[part]) return dynamicLabels[part];
      if (part.length > 20) return 'Details';
      return part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ');
    }).join(' > ');
  };

  const pageTitle = getPageTitle(pathname || '');

  return (
    <header className='h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-4 sm:px-8 sticky top-0 z-10'>
      <div className='flex items-center gap-4'>
        <button
          onClick={toggleSidebar}
          className='md:hidden p-2 rounded-full hover:bg-secondary transition-colors text-foreground'
          title='Toggle Sidebar'
        >
          <Menu size={24} />
        </button>
        <h1 className='text-lg font-bold hidden md:block text-foreground tracking-tight'>
          {pageTitle}
        </h1>
        <div className='md:hidden flex items-center gap-2'>
          <div className='w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground'>
            <span className='font-bold'>M</span>
          </div>
          <span className='font-bold text-foreground'>Maritime</span>
        </div>
      </div>

      <div className='flex items-center gap-2 sm:gap-4'>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='p-2 rounded-full hover:bg-secondary transition-colors cursor-pointer text-foreground border border-border'
          title='Toggle Theme'
        >
          {mounted ? (
            theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />
          ) : (
            <div className="w-5 h-5" />
          )}
        </button>

        {/* <div className='h-6 w-px bg-border mx-2 hidden sm:block'></div> */}

        {/* <div className='flex items-center gap-3'>
          <div className='text-right hidden sm:block'>
            <p className='text-sm font-medium leading-none text-foreground'>John Doe</p>
            <div className='mt-1 flex items-center'>
              <span className='text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-primary text-primary-foreground'>
                {currentRole}
              </span>
            </div>
          </div>
          <div className='relative group'>
            <button className='flex items-center gap-2 p-1 rounded-full hover:bg-secondary transition-colors text-foreground'>
              <UserCircle size={32} strokeWidth={1.5} />
              <ChevronDown size={14} className='text-muted-foreground hidden sm:block' />
            </button>
            <div className='absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-xl shadow-xl hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200'>
              <div className='p-2 space-y-1'>
                <p className='px-3 py-2 text-xs font-semibold text-muted-foreground uppercase'>
                  Switch Role
                </p>
                {Object.values(UserRole).map((role) => (
                  <button
                    key={role}
                    onClick={() => onRoleChange(role)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-secondary transition-colors text-foreground ${currentRole === role ? 'bg-secondary/50 font-medium' : 'opacity-70'}`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
