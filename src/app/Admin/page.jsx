"use client";

import React from 'react';
// import { Popover, Transition } from '@headlessui/react';
import { Popover, PopoverTrigger, PopoverContent } from '@headlessui/react';

export default function page() {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="sticky top-0 md:h-screen md:w-56 w-full bg-gray-100 text-gray-800 p-4 md:p-6">
        <div className="flex items-center mb-4 space-x-1">
          <img
            alt="Company Logo"
            src="/placeholder.svg"
            className="h-8 w-8 object-cover"
          />
          <h1 className="text-lg font-medium">Acme</h1>
        </div>
        <nav className="space-y-2">
          <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
            <HomeIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Home</span>
          </button>
          <button className="w-full flex items-center space-x-2 bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-800">
            <WalletIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Transactions</span>
          </button>
          <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
            <UsersIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Accounts</span>
          </button>
          <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
            <TicketIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Tax</span>
          </button>
        </nav>
      </aside>
      <main className="flex-grow p-4 md:p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-medium">Transactions</h1>
          <button className="px-2 py-1 bg-gray-800 text-white rounded-lg flex items-center space-x-2 text-sm">
            <DownloadIcon className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <TableRow
                date="Mar 12"
                description="WeWork"
                category="Office"
                amount="$175.00"
                categoryColor="bg-red-200 text-red-800"
              />
              <TableRow
                date="Mar 13"
                description="IKEA"
                category="Home"
                amount="$450.00"
                categoryColor="bg-blue-200 text-blue-800"
              />
              <TableRow
                date="Mar 14"
                description="Home Depot"
                category="Home"
                amount="$200.00"
                categoryColor="bg-blue-200 text-blue-800"
              />
              <TableRow
                date="Mar 15"
                description="Burger King"
                category="Food"
                amount="$15.00"
                categoryColor="bg-green-200 text-green-800"
              />
              <TableRow
                date="Mar 16"
                description="WeWork"
                category="Office"
                amount="$250.00"
                categoryColor="bg-red-200 text-red-800"
              />
              <TableRow
                date="Mar 17"
                description="IKEA"
                category="Home"
                amount="$350.00"
                categoryColor="bg-blue-200 text-blue-800"
              />
              <TableRow
                date="Mar 18"
                description="Home Depot"
                category="Home"
                amount="$100.00"
                categoryColor="bg-blue-200 text-blue-800"
              />
              <TableRow
                date="Mar 19"
                description="Burger King"
                category="Food"
                amount="$20.00"
                categoryColor="bg-green-200 text-green-800"
              />
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

function TableRow({ date, description, category, amount, categoryColor }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{date}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{description}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 py-1 ${categoryColor} rounded-md`}>
          <TagIcon className="w-4 h-4 inline-block mr-1" />
          {category}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">{amount}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Popover>
          <PopoverTrigger>
            <button className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded">
              <FlipVerticalIcon className="w-4 h-4" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-40">
            <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
              <EditIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Edit</span>
            </button>
            <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
              <ShareIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Share</span>
            </button>
            <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
              <DeleteIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Delete</span>
            </button>
          </PopoverContent>
        </Popover>
      </td>
    </tr>
  );
}
function DeleteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  )
}


function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}

function EditIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM18.36 5.89l.75.75L20.25 5l-3.75-3.75-1.5 1.5 3.75 3.75zm-2.12 2.12l1.5-1.5 3.75 3.75-1.5 1.5-3.75-3.75z" />
    </svg>
  );
}


function FlipVerticalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
      <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
      <path d="M4 12H2" />
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
}


function TicketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}
