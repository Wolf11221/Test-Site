import Head from 'next/head'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    const paths = data.map(name => {
      return {
        params: { id: name.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { name: data }
    }
  }
  
  const Details = ({ name }) => {
    return (
        <>
        <Head>
            <title>Test Site | Names</title>
        </Head>
      <div>
        <h1>{ name.name }</h1>
        <p>{ name.email }</p>
        <p>{ name.website }</p>
        <p>{ name.address.city }</p>
      </div>
      </>
    );
  }
  
 

export default Details;