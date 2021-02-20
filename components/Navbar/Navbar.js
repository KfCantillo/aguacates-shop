import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <menu>
        <Link href='/'>
          <a>Home</a>
        </Link>
        &nbsp;
        <Link href='/about'>
          <a>About</a>
        </Link>
      </menu>
    </nav>
  );
};

export default Navbar;
