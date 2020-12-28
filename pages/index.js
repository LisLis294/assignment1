import Head from 'next/head'
//import styles from '../styles/Home.module.css'

import Animals from '../public/assignment-data/animals.json'
import Animal from "./src/Animal"

export default function Home() {
  const animalMaker = p => <Animal type={p.type} state={p.state} adoption_fee={p.adoption_fee} img={p.img}></Animal>
  const thinkingFilter = (x => x.state == "thinking")
  const thinkingAnimals = Animals.filter(thinkingFilter)
  const sumPrices = (x,y) => x + y.adoption_fee
  const priceTotal = thinkingAnimals.reduce(sumPrices,0)
  const animalDisplay = thinkingAnimals.map(animalMaker)

  return(
  <div className="bg-blue-200">
    <div>
      <h1 className="text-2xl font-bold text-center pb-8 pt-8">Thinking Animals for Sale!</h1>
    </div>
    <div>{animalDisplay}</div>
    
    <div className="text-center">If you were to purchase <em>all</em> the thinking animals the price would be: <b>{'\u0024'}{priceTotal}</b></div>
  </div>
  )

}
