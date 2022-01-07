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
  margin-left: 0;
  background-color: #fff;
  padding: 1rem;
  width: 150px;
  border-top: 5px solid #d35400;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  top: 70px;
  list-style-type: none;

  li {
    margin: 0;
  }

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
