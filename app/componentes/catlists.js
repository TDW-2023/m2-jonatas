"use client";
import Image from 'next/image'
import { useDispatch, useSelector } from "react-redux"
import { getCats } from "../GlobalRedux/slicers/catSlicer"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';



export default function CatLists(){

    const {cats, loading} = useSelector((state) => state.cat)
    const router = useRouter();
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() =>{
        const pageQueryParam = router.query?.page || 1;
        const page = parseInt(pageQueryParam, 10);
        setCurrentPage(page);
        dispatch(getCats())
        
    }, [router.query])

    useEffect(() => {
        // Avoid fetching data when the component mounts, let useEffect handle it
        if (currentPage >= 1) {
          dispatch(getCats(currentPage));
        }
      }, [currentPage, dispatch]);

      const handleRequestMore = () => {
        setCurrentPage(currentPage + 1);
        router.push(`/ex4/?page=${currentPage + 1}`);
       
      };

    
      const handlePreviousPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
          router.push(`/ex4/?page=${currentPage - 1}`);
        }
      };

    if(loading){
        return(
        <h1>Loading cats...</h1>)
    }

    return(

        <div className='flex mx-auto text-center flex-col '>
            <div className='columns-3 text-center mx-auto'>
            {cats.map((item) => (
                <Image
                src={item.url}
                width={200}
                height={200}
                alt="Cat"
                className='my-2'>    
                </Image>
            ))}
            </div>
            <div className='flex text-center mx-auto'>
                {currentPage > 1 &&(
                <button id='request' onClick={handlePreviousPage} className='px-3 py-1 mx-2 bg-gray-500 mt-4'>Previous</button>
                )}

            <button id='request' onClick={handleRequestMore} className='px-3 py-1 mx-2 bg-gray-500 mt-4'>Next</button>
            
            </div>    
        </div>
    )
}