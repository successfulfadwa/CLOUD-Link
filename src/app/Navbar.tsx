// Navbar.tsx

import Link from 'next/link';

const Navbar = () => {
	return (
		<div className="flex justify-between items-center h-16 text-white px-9 py-9" style={{ paddingTop: '57px', paddingRight: '90px' }}>
			<div className="text-xl font-bold" style={{ paddingLeft: '85px' }}>Logo</div>
			<nav className="flex items-center space-x-4">
				<Link href="/about" className="hover:text-gray-300">About US</Link>
				<Link href="/sign-up" className="border border-white text-white px-4 py-2 hover:text-gray-300 hover:border-gray-300  rounded-full ">Sign-up</Link>
				<Link href="/sign-in" className="inline-block px-4 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 hover:text-gray-300">Sign-in</Link>
			</nav>
		</div>
	);
};

export default Navbar;
