import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className=' flex flex-row justify-center my-48'>
      <h1 className='text-3xl text-red-700 font-bold'>Hello world!</h1>
    </div>
  );
}