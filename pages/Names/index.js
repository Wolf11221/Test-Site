import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Names.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { names: data }
    }
}

const index = ({ names }) => {
    return ( 
        <>
        <Head>
            <title>Test Site | Names</title>
        </Head>
        <div>
        <h1>Człowiek generator</h1>
        {names.map(name => (
            <Link href={'/Names/' + name.id} key={name.id}>
                <a className={styles.single}>
                    <h3>{ name.name }</h3>
                </a>
                </Link>
        ))}
        </div>
        </>
     );
}
 
export default index;