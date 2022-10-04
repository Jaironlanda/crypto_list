/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import PriceChange from './components/PriceChange'

export default function Home({data}) {
  const cryptos = data.value
  
  return (
    <>
    <Head>
      <title>Whaleholder.com: List top Crypto</title>
    </Head>
    <div className="col-lg-8 mx-auto p-4 py-md-5">
      <main>
        <div className="text-center">
          <h1>whaleholder.com</h1>
          <p className="lead text-muted">List top Crypto</p>
          <p>Powered By: <a href='https://www.coingecko.com/'>CoinGecko API</a> / <a href='https://www.deta.sh/'>Deta</a> / <a href='https://vercel.com/'>Vercel</a></p> 
          <p>GitHub: <a href='https://github.com/Jaironlanda'>@jaironlanda</a> / Twitter: <a href='https://twitter.com/jaironlanda'>@jaironlanda</a></p>       
        </div>
        <div className="row">
          {cryptos && cryptos.map((crypto)=> (
            <div key={crypto.id} className="col-sm-6 my-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title ">
                    <div className="d-flex mb-3 align-content-center flex-wrap">
                      <div className="p-2 align-content-center" >
                        <Image src={crypto.image} alt={crypto.name} width="30" height="30"/>
                      </div>
                      <div className="p-2">{crypto.name} / <span className="text-muted text-uppercase"> {crypto.symbol}</span></div>
                      <div className="ms-auto p-2 text-muted">Rank #{crypto.market_cap_rank}</div>
                    </div>
                  </h5>
                  {/* { () => this.priceCheck(crypto.current_price)}  */}
                  <p className="card-text">Price: {crypto.current_price.toLocaleString('en-US', {maximumFractionDigits:5})} (<PriceChange price={crypto.price_change_percentage_24h} />)
                  </p>
                  <a href={"https://www.coingecko.com/en/coins/" + crypto.id} className="btn btn-primary">Detail</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="col-3 col-md-2 mb-5 text-center" />
      </main>
    </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://api.whaleholder.com/api')
  const data = await res.json()
  // console.log(data.value)
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}