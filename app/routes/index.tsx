import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

import { gql } from "graphql-request";
import { client } from "~/lib/graphql-client";

import { Fragment, useState } from 'react';

import { Tab, Dialog, Disclosure, Listbox, Menu, Transition, Switch, RadioGroup } from '@headlessui/react';
import { Bars3Icon, BellIcon, CheckCircleIcon, CheckIcon, ChevronUpDownIcon, ChevronUpIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

export interface Post {
  id: string,
  title: string,
  content: string,
  published: boolean,
}

const GetAllPosts = gql`
  {
    posts {
      id
      title
      content
      published
    }
  }
`;

export let loader = async () => {
  const { posts } = await client.request(GetAllPosts);

  return json({ posts });
};

export let meta = () => {
  return {
    title: "Remix-TypeScript + GraphQL",
    description: "Remix-TypeScript + GraphQL",
  };
};

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

const plans = [
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Index() {
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [selected, setSelected] = useState(people[3]);
  const [plantype, setPlanType] = useState(plans[0])  
  const [enabled, setEnabled] = useState(false)  
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  let { posts } = useLoaderData();

  return (
    <>
      {/* tailwind ui top menu */}
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* graphql call */}
      <h1 className="text-center text-3xl my-8">Remix + GraphQL</h1>

      <div className="w-80 mx-auto text-lg">
        {posts.map(({ id, title, content, published }: Post) => (
          <div className="text-left my-9" key={id}>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Content: {content}</p>
            <p>Published: {published.toString()}</p>
          </div>
        ))}
      </div>

      {/* headless ui modal & headless ui drawer buttons */}
      <div className="flex flex-col w-32 mx-auto">
        <button
          onClick={() => setModal(true)}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-3.5"
        >
          Open Modal
        </button>
        <button
          onClick={() => setDrawer(true)}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-3.5"
        >
          Open Drawer
        </button>        
      </div>       

      {/* headless ui modal */}
      <Transition.Root show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Modal Works
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                      onClick={() => setModal(false)}
                    >
                      Go back to page
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>       

      {/* headless ui drawer */}
      <Transition.Root show={drawer} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setDrawer}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">Drawer title</Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setDrawer(false)}
                            >
                              <span className="sr-only">Close drawer</span>
                              <XMarkIcon title="Close drawer" className="h-4 w-4" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6 text-gray-900">
                        <div className="absolute inset-0 px-4 sm:px-6">
                          <div className="h-full border-2 border-dashed border-gray-200">
                            Drawer Works
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* tailwind ui form */}
      <div className="w-8/12 mx-auto mb-8">
        <form className="space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div className="space-y-6 sm:space-y-5">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>
              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Username
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <div className="flex max-w-lg rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                        workcation.com/
                      </span>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    About
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      defaultValue={''}
                    />
                    <p className="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                    Photo
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <div className="flex items-center">
                      <span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Cover photo
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
              </div>
              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    First name
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Last name
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Email address
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Country
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Street address
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    City
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    State / Province
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    ZIP / Postal code
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  We'll always let you know about important changes, but you pick what else you want to hear about.
                </p>
              </div>
              <div className="space-y-6 divide-y divide-gray-200 sm:space-y-5">
                <div className="pt-6 sm:pt-5">
                  <div role="group" aria-labelledby="label-email">
                    <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                      <div>
                        <div className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-email">
                          By Email
                        </div>
                      </div>
                      <div className="mt-4 sm:col-span-2 sm:mt-0">
                        <div className="max-w-lg space-y-4">
                          <div className="relative flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                id="comments"
                                name="comments"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="comments" className="font-medium text-gray-700">
                                Comments
                              </label>
                              <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                            </div>
                          </div>
                          <div className="relative flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                id="candidates"
                                name="candidates"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="candidates" className="font-medium text-gray-700">
                                Candidates
                              </label>
                              <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                            </div>
                          </div>
                          <div className="relative flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                id="offers"
                                name="offers"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="offers" className="font-medium text-gray-700">
                                Offers
                              </label>
                              <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 sm:pt-5">
                  <div role="group" aria-labelledby="label-notifications">
                    <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                      <div>
                        <div
                          className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                          id="label-notifications"
                        >
                          Push Notifications
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="max-w-lg">
                          <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                              <input
                                id="push-everything"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                Everything
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="push-email"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                Same as email
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="push-nothing"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                No push notifications
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* tailwind ui alerts */}
      <div className="rounded-md bg-yellow-50 p-4 max-w-md mx-auto mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
                totam eius aperiam dolorum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md bg-red-50 p-4 max-w-md mx-auto mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">There were 2 errors with your submission</h3>
            <div className="mt-2 text-sm text-red-700">
              <ul role="list" className="list-disc space-y-1 pl-5">
                <li>Your password must be at least 8 characters</li>
                <li>Your password must include at least one pro wrestling finishing move</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md bg-green-50 p-4 max-w-md mx-auto mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">Order completed</h3>
            <div className="mt-2 text-sm text-green-700">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
            </div>
            <div className="mt-4">
              <div className="-mx-2 -my-1.5 flex">
                <button
                  type="button"
                  className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                >
                  View status
                </button>
                <button
                  type="button"
                  className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md bg-blue-50 p-4 max-w-md mx-auto mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
          </div>
          <div className="ml-3 flex-1 md:flex md:justify-between">
            <p className="text-sm text-blue-700">A new software update is available. See what’s new in version 2.0.4.</p>
            <p className="mt-3 text-sm md:mt-0 md:ml-6">
              <a href="#" className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                Details
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 max-w-md mx-auto mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              You have no credits left.{' '}
              <a href="#" className="font-medium text-yellow-700 underline hover:text-yellow-600">
                Upgrade your account to add more credits.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-md bg-green-50 p-4 max-w-md mx-auto mb-14">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">Successfully uploaded</p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* tailwind ui listbox */}
      <div className="w-6/12 mx-auto mb-14">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {people.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-8 pr-4'
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                              {person.name}
                            </span>
                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>      

      {/* headless ui tabs */}
      <div className="w-6/12 mx-auto mb-14">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-indigo-600 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.24] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 hover:bg-gray-100"
                    >
                      <h3 className="text-sm font-medium leading-5">
                        {post.title}
                      </h3>

                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li>{post.date}</li>
                        <li>&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li>&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>

                      <a
                        href="#"
                        className={classNames(
                          'absolute inset-0 rounded-md',
                          'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* headless ui switch/toggle */}
      <div className="w-1/12 mx-auto mb-8">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-sky-900' : 'bg-sky-700'}
            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
              pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>

      {/* headless ui radio group */}
      <div className="w-full px-4 py-16">
        <div className="mx-auto w-full max-w-md">
          <RadioGroup value={plantype} onChange={setPlanType}>
            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="space-y-2">
              {plans.map((plan) => (
                <RadioGroup.Option
                  key={plan.name}
                  value={plan}
                  className={({ active, checked }) =>
                    `${
                      active
                        ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                        : ''
                    }
                    ${
                      checked ? 'bg-sky-900 bg-opacity-90 text-white' : 'bg-white'
                    }
                      relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? 'text-white' : 'text-gray-900'
                              }`}
                            >
                              {plan.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? 'text-sky-100' : 'text-gray-500'
                              }`}
                            >
                              <span>
                                {plan.ram}/{plan.cpus}
                              </span>{' '}
                              <span aria-hidden="true">&middot;</span>{' '}
                              <span>{plan.disk}</span>
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-white">
                            <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 bg-opacity-40">
                              <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* headless ui disclosure */}
      <div className="w-full px-4 pt-8 mb-24">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What is your refund policy?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Do you offer technical support?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Not at this time.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

    </>
  );
}