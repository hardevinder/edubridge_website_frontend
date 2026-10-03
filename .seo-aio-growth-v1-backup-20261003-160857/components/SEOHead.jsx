import Head from 'next/head';

export default function SEOHead({ title, description, path = '/', image = '/og-image.png', keywords = [] }) {
  const base = 'https://www.edubridgeerp.in';
  const canonical = `${base}${path === '/' ? '/' : path}`;
  const fullTitle = title.includes('EduBridge') ? title : `${title} | EduBridge ERP`;
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${base}${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${base}${image}`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
