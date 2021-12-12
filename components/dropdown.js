import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'

export default function Dropdown() {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }
  return (
    <Ul
      onClick={handleClick}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
      <li>
        <Link href="/maryland-seo">
          <a>SEO</a>
        </Link>
      </li>
      <li>
        <Link href="/local-seo-maryland">
          <a>Local SEO</a>
        </Link>
      </li>
      <li>
        <Link href="/seo-audit">
          <a>SEO Audit</a>
        </Link>
      </li>
    </Ul>
  )
}

const Ul = styled.ul`
  position: absolute;
  margin-top: 10px;

  .dropdown-menu {
    width: 200px;
    position: absolute;
    top: 100px;
    list-style: none;
  }

  .dropdown-menu li {
    cursor: pointer;
  }

  .dropdown-menu.clicked {
    display: none;
  }
`
