// @ts-nocheck
import { MetaFunction } from '@remix-run/node';
import { useCatch } from '@remix-run/react';

import NotFound from '~/routes/notfound';

// import * as React from 'react';
// import * as Popover from '@radix-ui/react-popover';
// import * as Toast from '@radix-ui/react-toast';
// import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';
// import MainNavigation from '~/components/MainNavigation';

export default function Index() {
  // const [open, setOpen] = React.useState(false);
  // const eventDateRef = React.useRef(new Date());
  // const timerRef = React.useRef(0);

  // React.useEffect(() => {
  //   return () => clearTimeout(timerRef.current);
  // }, []);

  return (
    // Responsive Navigation Bar
    <div>
      <header class='flex flex-wrap justify-between items-center'>
        <a href='/' class='flex-1'>
          <img
            class='inline h-7'
            src='https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png'
            alt=''
          />
        </a>
        <ul class='order-last flex-[100%] mt-4 md:order-none md:flex-auto md:mt-0'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about-us'>About Us</a>
          </li>
          <li>
            <a href='/people'>People</a>
          </li>
        </ul>
        <span class='flex-1 text-right'>
          <a href='#' class='btn'>
            Join us
          </a>
        </span>
      </header>

      {/* Blog Images */}
      <div class='container grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8'>
        <div class='item'>
          <img src='https://picsum.photos/400/300' alt='' />
          <div>
            <h2>Blog title 1</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              assumenda porro inventore repellendus ipsum.
            </p>
            <a href='#'>Read more</a>
          </div>
        </div>
        <div class='item'>
          <img src='https://picsum.photos/400/300?1' alt='' />
          <div>
            <h2>Blog title 2</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              assumenda porro inventore repellendus ipsum.
            </p>
            <a href='#'>Read more</a>
          </div>
        </div>
        <div class='item'>
          <img src='https://picsum.photos/400/300?2' alt='' />
          <div class='desc'>
            <h2>Blog title 3</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              assumenda porro inventore repellendus ipsum.
            </p>
            <a href='#'>Read more</a>
          </div>
        </div>
        <div class='item'>
          <img src='https://picsum.photos/400/300?3' alt='' />
          <div class='desc'>
            <h2>Blog title 4</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              assumenda porro inventore repellendus ipsum.
            </p>
            <a href='#'>Read more</a>
          </div>
        </div>
        <div class='item'>
          <img src='https://picsum.photos/400/300?4' alt='' />
          <div class='desc'>
            <h2>Blog title 5</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              assumenda porro inventore repellendus ipsum.
            </p>
            <a href='#'>Read more</a>
          </div>
        </div>
        <div class='item'>
          <img src='https://picsum.photos/400/300?5' alt='' />
          <div class='desc'>
            <h2>Blog title 6</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              assumenda porro inventore repellendus ipsum.
            </p>
            <a href='#'>Read more</a>
          </div>
        </div>
      </div>

      {/* <MainNavigation />

      <h1 className='text-center text-2xl mt-52 sm:mt-28 md:mt-28'>
        Remix + TypeScript + Tailwind + Radix UI
      </h1>

      <div className='ml-10 text-center text-xl mt-52 sm:mt-28 md:mt-28 flex justify-between mr-10'>
        <Popover.Root>
          <Popover.Trigger className='bg-gray-300 text-red-600 p-3 pt-1 pb-1 rounded shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px]'>
            Popover
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className='bg-green-200 text-green-700 text-xl font-medium w-72 p-7 rounded-lg'>
              Some more content...
              <Popover.Arrow className='fill-current' />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        <Toast.Provider swipeDirection='right'>
          <button
            className='inline-flex items-center justify-center rounded font-medium text-xl px-[15px] leading-[35px] h-[35px] bg-gray-300 text-red-600 shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black'
            onClick={() => {
              setOpen(false);
              window.clearTimeout(timerRef.current);
              timerRef.current = window.setTimeout(() => {
                eventDateRef.current = oneWeekAway();
                setOpen(true);
              }, 100);
            }}
          >
            Toast
          </button>
          <Toast.Root
            className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
            open={open}
            onOpenChange={setOpen}
          >
            <Toast.Title className='[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]'>
              Scheduled: Catch up
            </Toast.Title>
            <Toast.Description asChild>
              <time
                className='[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]'
                dateTime={eventDateRef.current.toISOString()}
              >
                {prettyDate(eventDateRef.current)}
              </time>
            </Toast.Description>
            <Toast.Action
              className='[grid-area:_action]'
              asChild
              altText='Goto schedule to undo'
            >
              <button className='inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8'>
                Undo
              </button>
            </Toast.Action>
          </Toast.Root>
          <Toast.Viewport className='[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none' />
        </Toast.Provider>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className='text-red-600 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-gray-300 px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none'>
              Dialog
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className='bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0' />
            <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
              <Dialog.Title className='text-mauve12 m-0 text-[17px] font-medium'>
                Edit profile
              </Dialog.Title>
              <Dialog.Description className='text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal'>
                Make changes to your profile here. Click save when you're done.
              </Dialog.Description>
              <fieldset className='mb-[15px] flex items-center gap-5'>
                <label
                  className='text-violet11 w-[90px] text-right text-[15px]'
                  htmlFor='name'
                >
                  Name
                </label>
                <input
                  className='text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]'
                  id='name'
                  defaultValue='Pedro Duarte'
                />
              </fieldset>
              <fieldset className='mb-[15px] flex items-center gap-5'>
                <label
                  className='text-violet11 w-[90px] text-right text-[15px]'
                  htmlFor='username'
                >
                  Username
                </label>
                <input
                  className='text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]'
                  id='username'
                  defaultValue='@peduarte'
                />
              </fieldset>
              <div className='mt-[25px] flex justify-end'>
                <Dialog.Close asChild>
                  <button className='bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none'>
                    Save changes
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Close asChild>
                <button
                  className='text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none'
                  aria-label='Close'
                >
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div> */}
    </div>
  );
}

// function oneWeekAway(date) {
//   const now = new Date();
//   const inOneWeek = now.setDate(now.getDate() + 7);
//   return new Date(inOneWeek);
// }

// function prettyDate(date) {
//   return new Intl.DateTimeFormat('en-US', {
//     dateStyle: 'full',
//     timeStyle: 'short',
//   }).format(date);
// }

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <NotFound />;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

export let meta: MetaFunction = () => {
  return {
    title: 'Remix + TypeScript + Tailwind + Radix UI',
    description: 'Remix + TypeScript + Tailwind + Radix UI',
  };
};
