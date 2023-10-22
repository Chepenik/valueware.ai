import Image from 'next/image';
import valuewarelogo from '../../public/valuewarelogowithouttext.png';
import chep from '../../public/ChepDaddy.png';
import kevinq from '../../public/KevinQ.png';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-blue-100">
      <Image
        src={valuewarelogo}
        alt="Valueware Logo"
        className="h-auto rounded-lg mb-8"
        width={300}
        height={300}
        priority
      />
      <h1 className="text-6xl font-bold mb-4 text-black">Valueware</h1>
      <br />
      <section className="max-w-3xl text-center text-black">
        <h3 className="text-3xl font-bold mb-4">A Boutique Software Consultancy</h3>
        
        <p className="text-xl mb-4">
          Based in Florida, Valueware is your digital beacon in the 21st century. We specialize in leveraging AI and software, helping businesses automate and focus on their core revenue generators.
        </p>

        <h4 className="text-3xl font-semibold mt-6 mb-3">Our Mission</h4>
        <p className="text-base mb-4">
          To empower businesses with tailored software solutions, amplifying their reach and potential in the digital era.
        </p>

        <h2 className="text-3xl font-semibold mt-6 mb-3">About Us</h2>
        <p className="text-base mb-4">
          Founded on October 15, 2023, Valueware is committed to driving value through software for all businesses, big or small.
        </p>

        <p className="text-base mb-4">
          Meet the Visionaries:
          <br />
          <a href="https://www.linkedin.com/in/kevinmichale/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center mt-7">
            <Image src={kevinq} 
            alt="Kevin Quisumbing" 
            width={200} 
            height={200}
            className="h-auto rounded-lg mb-8"
            />
            Kevin Quisumbing, CEO: Merging tech and business strategies.
          </a>
          <br />
          <a href="https://www.linkedin.com/in/conorchepenik/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <Image 
            src={chep} 
            alt="Conor Chepenik" 
            width={200} 
            height={200} 
            className="h-auto rounded-lg mb-8"
            />
            Conor Chepenik, CTO: Leading our tech innovations.
          </a>
        </p>

        <h2 className="text-3xl font-semibold mt-6 mb-3">Our Services</h2>
        <p className="text-base mb-4">
          Offering custom web development and AI solutions to keep you ahead in the digital race.
        </p>

        <h2 className="text-3xl font-semibold mt-6 mb-3">Why Choose Valueware?</h2>
        <p className="text-base mb-4">
          Beyond solutions, we offer partnerships, ensuring you lead in the digital realm.
        </p>
        <h2 className="text-3xl font-semibold mt-6 mb-3">Connect with Us</h2>
        <p className="text-base mb-4">
          Ready for a digital transformation?
        </p>
        <Link className="px-4 py-2 text-lg font-medium text-white bg-blue-300 rounded hover:bg-green-400 hover:text-gray-600 transition-colors duration-300 ease-in-out"href="/contact">
          <button>
            Contact Page Coming Soon
          </button>
        </Link>
      </section>
    </main>
  );
}