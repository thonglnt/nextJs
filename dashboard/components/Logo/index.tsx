import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

// Constants
import { ROUTE } from '@constants/route'

import primaryLogo from '../../public/logo/primaryLogo.svg'

const Logo = () => {
  return (
    <Link
      href={ROUTE.HOME_PAGE}
      style={{
        maxWidth: '40px',
        maxHeight: '40px',
      }}
      prefetch={false}
    >
      <Image
        src={primaryLogo}
        width={40}
        height={40}
        alt="logo"
        quality={40}
        loading="eager"
      />
    </Link>
  )
}

export default memo(Logo)
