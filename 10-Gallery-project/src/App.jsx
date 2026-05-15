import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async () => {

    setLoading(true);

    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );

    setUserData((prev) => [...prev, ...response.data]);

    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [index]);



  // Infinite Scroll
  useEffect(() => {

    const handleScroll = () => {

      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 200
      ) {
        setIndex((prev) => prev + 1);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, []);



  return (
    <div className='bg-slate-800 min-h-screen text-white px-6 py-5 font-bold text-3xl w-full'>

      <h2 className='fixed right-5 top-5 px-5 py-5 bg-green-400 text-2xl rounded-full'>
        {index}
      </h2>

      <div className='flex flex-wrap gap-10 my-10 mx-10 justify-center'>

        {
          userData.map((elem, idx) => {

            return (
              <div key={idx}>

                <div className='h-55 w-60 my-5'>

                  <a href={elem.url} target='_blank'>

                    <img
                      className='hover:scale-105 duration-300 h-full w-full object-cover border-white border-2 rounded-xl'
                      src={elem.download_url}
                      alt=""
                    />

                    <h2 className='px-1.5 text-2xl mt-2'>
                      {elem.author}
                    </h2>

                  </a>

                </div>

              </div>
            )

          })
        }

      </div>

      {
        loading &&
        <h2 className='text-center text-3xl py-10 text-gray-300'>
          Loading...
        </h2>
      }

    </div>
  )
}

export default App