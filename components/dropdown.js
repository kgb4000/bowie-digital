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
  margin-top: 1.1rem;
  margin-left: 0;
  background-color: #fff;
  padding: 0.5rem;
  width: 160px;
  border-top: 5px solid #d35400;

  .dropdown-menu {
    position: absolute;
    list-style: none;
  }

  .dropdown-menu li {
    cursor: pointer;
  }

  .dropdown-menu.clicked {
    display: none;
  }
`
