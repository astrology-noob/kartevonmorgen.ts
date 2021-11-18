import Image from 'next/image'
import { Layout, Menu } from 'antd'
import Link from 'next/link'

const HomeHeader = () => {
  const { Header } = Layout
  return (
    <Header
      style={{
        boxShadow: '0 2px 8px #f0f1f2',
        backgroundColor: 'white',
        height: 68,
        width: '100%',
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '10em',
          height: '68px',
          marginRight: '20px',
        }}
      >
        <Link href={'/'}><Image
          src="/projects/co-map/assets/img/Comap.jpg"
          alt="logo"
          layout="intrinsic"
          width={170}
          height={60}
        /></Link>

      </div>
      <Menu
        style={{ alignSelf: 'right' }}
        mode="horizontal"
      >
        <Menu.Item><Link href={'/maps/main'}>Карта</Link></Menu.Item>
        <Menu.Item><Link href={'/ambassadors'}>Амбассадорам</Link></Menu.Item>
      </Menu>
    </Header>
  )
}

export default HomeHeader
