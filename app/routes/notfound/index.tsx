import type { MetaFunction } from '@remix-run/node';
import { Links, Meta } from '@remix-run/react';
import NotFoundNavigation from '~/components/NotFoundNavigation';

export let meta: MetaFunction = () => {
  return {
    title: 'Page Not Found',
    description: 'Page Not Found',
  };
};

export default function NotFound() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <NotFoundNavigation />
      <body>
        <h1 className='text-center text-2xl mt-52 sm:mt-28 md:mt-28'>
          Page Not Found
        </h1>
      </body>
    </html>
  );
}
