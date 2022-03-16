import Link from 'next/link'
import styled from 'styled-components'

const LocalCities = () => {
  return (
    <>
      <div className="container">
        <p>Cities we offer local SEO services in:</p>{' '}
        <p>
          <Link href="/annapolis-junction-md-local-seo-services">
            <a>Annapolis Junction</a>
          </Link>
          ,{' '}
          <Link href="/bowie-maryland-local-seo-services">
            <a>Bowie</a>
          </Link>
          ,{' '}
          <Link href="/capitol-heights-maryland-local-seo-services">
            <a>Capitol Heights</a>
          </Link>
          ,{' '}
          <Link href="/clinton-maryland-local-seo-services">
            <a>Clinton</a>
          </Link>
          ,{' '}
          <Link href="/columbia-maryland-local-seo-services">
            <a>Columbia</a>
          </Link>
          ,{' '}
          <Link href="/greenbelt-maryland-local-seo-services">
            <a>Greenbelt</a>
          </Link>
          ,{' '}
          <Link href="/largo-maryland-local-seo-services">
            <a>Largo</a>
          </Link>
          ,{' '}
          <Link href="/laurel-maryland-local-seo-services">
            <a>Laurel</a>
          </Link>
          ,{' '}
          <Link href="/new-carrollton-md-local-seo-services">
            <a>New Carrollton</a>
          </Link>
          ,{' '}
          <Link href="/temple-hills-maryland-local-seo-services">
            <a>Temple Hills</a>
          </Link>
          ,{' '}
        </p>
      </div>
    </>
  )
}

export default LocalCities
