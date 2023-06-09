"use client"
import { useEffect, useState } from 'react'
import maincss from './main.module.css'
import axios from 'axios';

export default function Home() {

  const [first, setfirst] = useState("")

  async function getUser() {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=a');
      console.log(response.data.meals);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    getUser()
  }, [])


  return (
    <>
      <section className={maincss.main}>
        <div className="container">
          <div className="row text-center">
            <h1 className='mb-4'>RECIPES</h1>
            <p className='w-75 mx-auto'>Each year we've hosted the Best Food Blog Awards, we're astounded at the depth, variety, creativity, and ingenuity of the food blogs nominated..</p>
          </div>
        </div>
      </section>

    </>
  )
}
