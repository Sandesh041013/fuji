import Head from 'next/head';
import Image from 'next/image';

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery — FUJI International Consultancy</title>
      </Head>
      <section className="py-20 md:py-32">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Gallery</h2>
            <div className="w-12 h-1 bg-primary rounded-sm mx-auto mb-6" />
            <p className="text-lg text-gray-mid max-w-2xl mx-auto">
              Explore moments from our students&apos; journeys, classes, and cultural experiences in Japan.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Large item - Learning */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-lg h-80 md:h-full">
              <Image
                src="/gallery-1.jpg"
                alt="Learning"
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Learning</span>
              </div>
            </div>

            {/* Culture */}
            <div className="relative group overflow-hidden rounded-lg h-48">
              <Image
                src="/gallery-2.jpg"
                alt="Culture"
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Culture</span>
              </div>
            </div>

            {/* Classes */}
            <div className="relative group overflow-hidden rounded-lg h-48">
              <Image
                src="/gallery-3.jpg"
                alt="Classes"
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Classes</span>
              </div>
            </div>

            {/* Experience */}
            <div className="relative group overflow-hidden rounded-lg h-48">
              <Image
                src="/gallery-4.jpg"
                alt="Experience"
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Experience</span>
              </div>
            </div>

            {/* Large item - Community */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-lg h-80 md:h-full">
              <Image
                src="/gallery-5.jpg"
                alt="Community"
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Community</span>
              </div>
            </div>

            {/* Culture 2 */}
            <div className="relative group overflow-hidden rounded-lg h-48">
              <Image
                src="/gallery-6.jpg"
                alt="Culture"
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Culture</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
