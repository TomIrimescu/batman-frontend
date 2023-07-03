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
