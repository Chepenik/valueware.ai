import Image from 'next/image';
import valuewarelogo from '../../public/valuewarelogo.png';
import chep from '../../public/ChepDaddy.png';
import kevinq from '../../public/KevinQ.png';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
              <Image
          src={valuewarelogo}
          alt="Valueware Logo"
          className="h-auto rounded-lg mb-8"
          width={300}
          height={300}
          priority
        />
      <section className="max-w-3xl text-center text-black">

        <h1 className="text-4xl font-bold mb-4">Welcome to Valueware</h1>
        <p className="text-xl mb-4">Your Digital Beacon in the 21st Century</p>
        <p className="text-base mb-4">
          Positioned on the sunny shores of Florida&apos;s east coast, Valueware is not just another software development agency. We are your partners in a digital revolution, leveraging AI to help businesses like yours thrive in today&apos;s fast-paced digital era.
        </p>

        <h2 className="text-3xl font-semibold mt-6 mb-3">Our Mission</h2>
        <p className="text-base mb-4">
          Empower businesses with innovative software solutions to amplify sales and harness the full potential of the digital era.
        </p>

        <h2 className="text-3xl font-semibold mt-6 mb-3">About Us</h2>
        <p className="text-base mb-4">
          Born on October 15, 2023, Valueware isn&apos;t just a name; it&apos;s a promise. A promise to help businesses unlock unprecedented value through software. Whether you&apos;re a sprawling resort or a quaint cafe, we tailor our solutions to fit your unique needs.
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
            Kevin Quisumbing, CEO: More than just a strategist, Kevin merges business acumen with the latest in technology, while also spearheading our sales initiatives.
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
            Conor Chepenik, CTO: A tech maestro, Conor transforms intricate tech nuances into actionable growth strategies, ensuring we&apos;re always ahead of the curve.
          </a>
        </p>


        <h2 className="text-3xl font-semibold mt-6 mb-3">Our Services</h2>
        <p className="text-base mb-4">
          From bespoke web development to cutting-edge AI strategies, we&apos;re here to guide your digital journey, ensuring you&apos;re always one step ahead of the competition.
        </p>

        <h2 className="text-3xl font-semibold mt-6 mb-3">Why Choose Valueware?</h2>
        <p className="text-base mb-4">
          Our aim is simple: to bridge the digital divide. In a world where technology is constantly evolving, we ensure you&apos;re not just keeping up, but leading the way. As a consultancy, we don&apos;t just offer solutions; we offer partnerships. With a keen focus on niche markets and a commitment to thought leadership, our path to success is paved with innovation and expertise.
        </p>

        <h2 className="text-3xl font-semibold mt-6 mb-3">Connect with Us</h2>
        <p className="text-base mb-4">
          Excited about embarking on a digital transformation? So are we! Our contact page is under development, but soon, you&apos;ll be able to reach out and discuss how we can collaborate. Stay tuned!
        </p>
      </section>
    </main>
  );
}
