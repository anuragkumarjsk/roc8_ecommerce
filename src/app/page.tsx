
import Link from "next/link";
import { db } from "~/server/db";
import { api, HydrateClient } from "~/trpc/server";
import SignUp from "./_components/SignUp";
// import Login from "./_components/LogIn";

export default async function Home() {
  console.log('-->',db)
  console.log(api,' is')
  // const hello = await api.post.hello({ text: "from tRPC" });

  // void api.userRouter.getLatest.prefetch();

  // const user = await db.user.findFirst({
  //   where : {
  //     email:"test@test.io"
  //   }
  // })

  // const handleSubmit = async(event: React.FormEvent) => {
  //   event.preventDefault();
  //   const user1 = await api.user.createUser({
  //    name:name,
  //    email:email,
  //    password:password,
  //  })
  //   console.log('user signed up' ,user1)
  // };
  
    const product1 = await api.product.getAllProducts()
    console.log('products are--> ', product1)
  
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <SignUp/>
          {/* <h1>hello {user?.name}</h1>
          <h1> {user?.password}</h1>
          <h1> { JSON.stringify(user?.favourites)}</h1>
           */}
        </div>
      </main>
    </HydrateClient>
  );
}
