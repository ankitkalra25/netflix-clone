import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from 'next/router'
import useCurrentUser from "@/hooks/useCurrentUser"

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if(!session){
    return {
      redirect : {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

const profiles = () => {
    const router = useRouter()
    const {data: user} = useCurrentUser()

    console.log(user)
  return (
    <div className="flex items-center h-full justify-center">
        <div className="flex flex-col">
            <div className="text-3xl md-text-6xl text-white text-center">
             Who is watching?
            </div>
            <div className="flex items-center justify-center gap-6 mt-10">
            <div onClick={()=>router.push('/')}>
            <div className="group flex-row w-44 mx-auto">
                <div className="w-44 h-44 round-md flex items-center justify-center border-2 border-transparent
                 group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                    <img src="/images/default-blue.png" alt="profile" />
                 </div>
                 <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                    {user?.name}
                 </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default profiles