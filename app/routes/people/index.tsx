import { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return {
    title: 'People Page',
    description: 'People Page',
  };
};

export async function loader() {
  return [
    {
      id: 'adffffsadff',
      firstName: 'Ryan',
      lastName: 'Florence',
    },
    {
      id: 'dddadffffsadff',
      firstName: 'Kent C.',
      lastName: 'Dodds',
    },
    {
      id: 'ffjflsfjffffsadff',
      firstName: 'Michael',
      lastName: 'Jackson',
    },
  ];
}

export default function People() {
  let people: any = useLoaderData();

  return (
    <main className='text-center mb-10 mt-52 sm:mt-28 md:mt-28'>
      <button className='btn btn-primary mb-10'>Hello World!</button>
      <div className='alert alert-info w-2/4 mx-auto mb-10'>
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 34C22.9 34 22 33.1 22 32V24C22 22.9 22.9 22 24 22C25.1 22 26 22.9 26 24V32C26 33.1 25.1 34 24 34ZM26 18H22V14H26V18Z'
            fill='#0085FF'
          />
        </svg>
        <div className='flex flex-col'>
          <span>Title</span>
          <span className='text-content2'>Long sample text</span>
        </div>
      </div>
      <input type='checkbox' id='drawer-right' className='drawer-toggle' />

      <label htmlFor='drawer-right' className='btn btn-primary'>
        Open Right
      </label>
      <label className='overlay' htmlFor='drawer-right'></label>
      <div className='drawer drawer-right'>
        <div className='drawer-content pt-10 flex flex-col h-full'>
          <label
            htmlFor='drawer-right'
            className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          >
            ✕
          </label>
          <div>
            <h2 className='text-xl font-medium'>Create your account</h2>
            <input className='input py-1.5 my-3' placeholder='Type here...' />
          </div>
          <div className='h-full flex flex-row justify-end items-end gap-2'>
            <button className='btn btn-ghost'>Cancel</button>
            <button className='btn btn-primary'>Create</button>
          </div>
        </div>
      </div>

      <div className='flex w-full overflow-x-auto mt-10'>
        <table className='table-zebra table'>
          <thead>
            <tr>
              <th>Type</th>
              <th>Where</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className='text-3xl mt-10'>People</h1>
      {people.length ? (
        <ul className='text-xl mt-14'>
          {people.map((person: any) => (
            <li key={person.id}>
              {person.firstName} {person.lastName}
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-xl text-red-500 mt-14'>Nobody here!</p>
      )}
    </main>
  );
}
