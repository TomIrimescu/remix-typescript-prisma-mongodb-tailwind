import { LoaderArgs } from '@remix-run/node';
import MainHeader from '~/components/navigation/MainHeader';
import { getUserFromSession } from '~/data/auth.server';

export function meta() {
  return [
    { title: 'Home' },
    { description: 'Welcome to the Home Page.' },
    {
      content: 'Remix Typescript Prisma Mongodb Tailwind',
    },
  ];
}

export default function Index() {
  return (
    <>
      <MainHeader />
      <div className=' flex flex-row justify-center my-48'>
        <h1 className='text-3xl text-pink-500 font-bold'>Hello world!</h1>
      </div>
    </>
  );
}

export function loader({ request }: LoaderArgs) {
  return getUserFromSession(request);
}
