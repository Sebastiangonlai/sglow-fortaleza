import GA from './GoogleAnalytics'
import siteMetadata from '@/data/siteMetadata'


const Analytics = () => {
    return (
        <>
            {siteMetadata.analytics.googleAnalyticsId && <GA />}
        </>
    )
}

export default Analytics
