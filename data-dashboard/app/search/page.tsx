'use client'
import Search from '../components/Search'
import Table from '../components/Table'
import PixelSnow from '../components/PixelSnow'

const page = () => {
  return (
    <>
      <div style={{ width: '100%', minHeight: '100dvh', position: 'relative' }}>
        {/* Background Snow Effect - pointer-events-none so it doesn't block touch/scroll */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <PixelSnow />
        </div>
        
        {/* Foreground Content */}
        <div style={{ position: 'relative', zIndex: 10, padding: '2rem' }} className="flex flex-col gap-6">
          <Search />
          <Table />
        </div>
      </div>
    </>
  )
}

export default page