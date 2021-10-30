import Head from "next/head";
import Link from 'next/link'

const NotFound = () => {
    return ( 
        <>
        <Head>
            <title>Test Site | 404</title>
        </Head>
        <div className="not-found">
            <h1>404</h1>
            <h2>This page could not be found.</h2>
            <p>Go back to the <Link href="/"><a>HomePage</a></Link></p>
        </div>
        </>
     );
}
 
export default NotFound;