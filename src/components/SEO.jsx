import Head from 'next/head'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import siteMetadata from '@/data/siteMetadata'

const { siteUrl, title: siteTitle, socialBanner } = siteMetadata;

const CommonSEO = ({ title, description, ogType, ogImage, twImage, canonicalUrl }) => {
  const router = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <meta name="google-site-verification" content="C3m_h_r11tqylS6OTvpGBMK4I3K2oKN3fIaYGP0bn-k" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />

      {Array.isArray(ogImage) ? (
        ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />

      <link
        rel="canonical"
        href={canonicalUrl ? canonicalUrl : `${siteUrl}${router.asPath}`}
      />
    </Head>
  )
}

CommonSEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ogType: PropTypes.string.isRequired,
  ogImage: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  twImage: PropTypes.string.isRequired,
  canonicalUrl: PropTypes.string,
}

export const PageSEO = ({ title, description }) => {
  const ogImageUrl = siteUrl + socialBanner
  const twImageUrl = siteUrl + socialBanner
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  )
}

PageSEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PageSEO