import React, { useState } from 'react';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MobileMenu({ isOpen }) {
  const navMenu = [
    {
      name: 'About Us',
      link: '/about',
    },
    {
      name: 'Services',
      subMenu: [
        {
          name: 'We Supervise Constructions',
          link: '/service1',
        },
        {
          name: 'We Source Supplies',
          link: '/service2',
        },
        {
          name: 'We Source Labour',
          link: '/service3',
        },
        {
          name: 'We Manage Biz Expansion',
          link: '/service4',
        },
      ],
    },
    {
      name: 'Press',
      link: '/pages/press',
    },
    {
      name: 'Team',
      link: '/pages/team',
    },
    {
      name: 'Contact Us',
      link: '/pages/contact',
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleServicesClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className={`${
        isOpen ? 'flex lg:hidden' : 'hidden'
      } fixed top-16 flex-col md:top-20 left-0 text-center py-10 w-full h-fit bg-white transition-all duration-300 ease-in-out`}
    >
      {navMenu.map((link, index) => {
        return (
          <div key={index} className="relative">
            <div
              onClick={link.name === 'Services' ? handleServicesClick : null}
              className={`servLink text-myBlack font-jost text-base font-medium hover:bg-gray-100 ${
                link.subMenu ? 'cursor-pointer' : ''
              }`}
              style={{
                display: 'flex',
                width: '100%',
                textAlign: 'left',
              }}
            >
              {link.link ? (
                <Link
                  href={link.link}
                  className="navLink w-full"
                >
                  {link.name}
                </Link>
              ) : (
                <span>{link.name}</span>
              )}
              {link.subMenu && (
                <ExpandMoreIcon
                  className={`${
                    isDropdownOpen ? 'rotate-180 ease-in' : 'w-5'
                  } w-5 group-hover:rotate-180 ease-in transition-all duration-150 ml-3`}
                />
              )}
            </div>
            {link.subMenu && isDropdownOpen && link.name === 'Services' && (
              <div className="relative py-1 mx-auto w-[90%] bg-white drop-shadow rounded-sm mt-1">
                {link.subMenu.map((subLink, index) => (
                  <div key={index}>
                    <Link
                      href={subLink.link}
                      className="flex font-jost text-myBlack hover:font-medium text-[16px] border-x-0 border-t-0 border-b-gray-100 w-full border text-left pl-16 py-3 hover:bg-gray-100"
                    >
                      {subLink.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
