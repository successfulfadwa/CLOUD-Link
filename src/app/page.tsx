import Image from "next/image";

// pages/index.tsx
import Link from 'next/link';

const Home: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <nav className="space-x-4">
            <Link href="/about-us">About US</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export default Home;
