import MainLayout from '@/layout/MainLayout'
import Banner from '@/components/sections/Banner'
import ForGuilds from '@/components/sections/ForGuilds'
import ForLenders from '@/components/sections/ForLenders'
import ForProjects from '@/components/sections/ForProjects'
import ForRenters from '@/components/sections/ForRenters'
import Partners from '@/components/sections/Partners'
import RentNow from '@/components/sections/RentNow'
import TrendingCollections from '@/components/sections/TrendingCollections'
import Head from 'next/head'
// ..

export default function Home() {

  return (
    <>
      <Head>
        <title>UniRent</title>
        <meta name="description" content="UniRent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <MainLayout>
        <Banner />
        <TrendingCollections />
        <ForLenders />
        <ForRenters />
        <ForGuilds />
        <ForProjects />
        <RentNow />
        <Partners />
      </MainLayout>
    </>
  )
}
