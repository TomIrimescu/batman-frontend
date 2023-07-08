import type { MetaFunction } from '@remix-run/node';
import MainNavigation from '~/components/MainNavigation';

export let meta: MetaFunction = () => {
  return {
    title: 'About Us Page',
    description: 'About Us Page',
  };
};

export default function NotFound() {
  return (
    <>
      <MainNavigation />
      <h1 className='text-center text-2xl mt-52 sm:mt-28 md:mt-28'>
        About Us Page
      </h1>
      <div className='wrapper'>
        <div className='container-plan grid sm:grid-cols-3 gap-8'>
          <div className='plan'>
            <h2>Standard</h2>
            <span>Monthly Plan</span>
            <p className='dollar'>$25</p>
          </div>
          <div className='plan plan-highlight order-first sm:order-none'>
            <h2>Popular</h2>
            <span>Monthly Plan</span>
            <p className='dollar'>$40</p>
          </div>
          <div className='plan'>
            <h2>Premium</h2>
            <span>Monthly Plan</span>
            <p className='dollar'>$55</p>
          </div>
        </div>
      </div>
    </>
  );
}
