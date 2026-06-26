'use client'
import Search from '../components/Search'
import Table from '../components/Table'
import PixelSnow from '../components/PixelSnow'

const page = () => {
  return (
    <>
      <div style={{ width: '100%', minHeight: '100dvh', position: 'relative' }} className="py-8">
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <PixelSnow />
        </div>
        
        <div style={{ position: 'relative', zIndex: 10, padding: '2rem' }} className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
          <div className="flex flex-col gap-2 border-b border-border/30 pb-6 mb-2">
            <h1 className="text-5xl text-white font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-none">
              Explore Countries
            </h1>
            <p className="text-base text-muted-foreground">Search and filter through the global country database</p>
          </div>
          <Search />
          <Table />
        </div>
      </div>
    </>
  )
}

export default page