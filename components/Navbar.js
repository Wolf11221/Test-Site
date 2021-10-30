import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Najlepsza strona roku 2022</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/About"><a>About</a></Link>
            <Link href="/Contact"><a>Contact</a></Link>
            <Link href="/Names"><a>Names</a></Link>
        </nav>
     );
}
 
export default Navbar;