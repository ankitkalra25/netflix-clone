import Navbar from "@/components/Navbar";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import Billboards from "@/components/Billboards";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

export async function getServerSideProps(context: NextPageContext){
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

export default function Home() {
   const {data: movies=[]} = useMovieList()
   const {data: favorites=[]} = useFavorites()
   const {isOpen, close} = useInfoModal()
  return (
    <>
    <InfoModal visible={isOpen} onClose={close}/>
    <Navbar/>
    <Billboards/>
    <div className="pb-40">
    <MovieList title="Trending Now" data={movies}/>
    {favorites.length>0 &&
    <MovieList title="My List" data={favorites}/>}
    </div>
    {/* <div className="bg-gray-500">
    <div className='h-96'></div>
    <div className='h-96'></div>
    <div className='h-96'></div>
    <div className='h-96'></div>
    <div className='h-96'></div>
    <div className='h-96'></div>
    <div className='h-96'></div>
    <div className='h-96'></div>
    </div> */}
    
    </>
  );
}
