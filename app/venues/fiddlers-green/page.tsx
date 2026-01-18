import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Fiddler’s Green Shuttle | Private Concert Transportation",
  description:
    "Private round-trip shuttle service to Fiddler’s Green Amphitheatre. $50 per person, 5-person minimum. One pickup location and up to two drop-off locations within 10 miles.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fiddler’s Green Amphitheatre Shuttle Service",
  "description":
    "Private round-trip shuttle transportation to Fiddler’s Green Amphitheatre. $50 per person with a 5-person minimum. One pickup location and up to two drop-off locations within 10 miles.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Party at Red Rocks",
    "areaServed": {
      "@type": "City",
      "name": "Denver",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "Place",
    "name": "Denver Metro Area"
  },
  "serviceType": "Private Concert Transportation",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "50",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "50",
      "priceCurrency": "USD",
      "unitText": "per person round trip"
    }
  }
};

export default function FiddlersGreenPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/venues/fiddlers-green.jpg"
          alt="Fiddler’s Green Amphitheatre concert night"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-end pb-16">
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              Fiddler’s Green Shuttle
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Private round-trip transportation to Fiddler’s Green Amphitheatre —
              built for concert nights.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {/* Pricing */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <ul className="space-y-2 text-gray-300">
            <li><strong>$50 per person</strong> — round trip</li>
            <li>5-person minimum</li>
            <li>Private vehicle only</li>
          </ul>
        </div>

        {/* Included */}
        <div>
          <h2 className="text-2xl font-bold mb-4">What’s Included</h2>
          <ul className="space-y-2 text-gray-300">
            <li>One pickup location (hotel, Airbnb, or residence)</li>
            <li>
              Up to two drop-off locations after the show
              <span className="text-gray-400"> (within 10 miles of each other)</span>
            </li>
            <li>Driver waits through the concert</li>
            <li>Flexible post-show return</li>
          </ul>
        </div>

        {/* Best For */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Perfect For</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Sold-out summer shows</li>
            <li>Birthday and celebration groups</li>
            <li>Bachelor / bachelorette parties</li>
            <li>Groups leaving Denver or the DTC area</li>
          </ul>
        </div>

        {/* Pickup Areas */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Common Pickup Areas</h2>
          <p className="text-gray-300">
            Downtown Denver, Cherry Creek, DTC hotels, Greenwood Village,
            and group Airbnbs.
          </p>
        </div>

        {/* CTA */}
        <div className="border-t border-gray-800 pt-10">
          <h2 className="text-2xl font-bold mb-4">Request This Shuttle</h2>
          <p className="text-gray-300 mb-6 max-w-2xl">
            This service is currently request-only. Submit your group size,
            pickup location, and show date and we’ll confirm availability.
          </p>
          <Link
            href="/request-shuttle"
            className="inline-block bg-white text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-gray-200 transition"
          >
            Request Shuttle
          </Link>
        </div>
      </section>
    </main>
  );
}
