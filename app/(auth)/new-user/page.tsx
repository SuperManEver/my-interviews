import { prisma } from '@/utils/db';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const createNewUser = async () => {
  const user = await currentUser();

  console.log('user: ', user);

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user ? user.id : void 0,
    },
  });

  console.log('match: ', match);

  // If it is a brand new user we should do all required initialization
  // like
  //  -- create a new user
  //  -- create stripe account and so on
  if (!match && user) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user?.emailAddresses[0].emailAddress,
      },
    });
  }

  redirect('/dashboard');
};

const NewUser = async () => {
  await createNewUser();

  return <div>...Loading</div>;
};

export default NewUser;
