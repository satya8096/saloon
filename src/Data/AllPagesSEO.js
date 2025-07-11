import { Helmet } from "react-helmet";
import { brandLogo, BrandName, brandUrl } from "./BrandData";

export const HomePageSEO = (
  <Helmet>
    <title>
      Beauty Parlour & Salon Services at Home in Hyderabad | {BrandName}
    </title>
    <meta
      name="description"
      content="Book expert beauty parlour and salon services at home in Hyderabad. From bridal makeup to facials, get pampered by certified beauticians at your doorstep."
    />
    <meta
      name="keywords"
      content="salon services at home Hyderabad, beauty parlour at home Hyderabad, home beauty services Hyderabad, bridal makeup Hyderabad, facial at home Hyderabad, hair spa at home Hyderabad, women's salon Hyderabad, doorstep beauty services Hyderabad, parlour at home service, professional beauticians Hyderabad"
    />

    <meta
      property="og:title"
      content="Salon & Beauty Parlour Services at Home in Hyderabad"
    />
    <meta
      property="og:description"
      content="Enjoy high-quality beauty services at home in Hyderabad – bridal makeup, facials, waxing & more by certified beauticians."
    />
    <meta property="og:image" content={brandLogo} />
    <meta property="og:url" content={brandUrl} />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Salon Services at Home in Hyderabad" />
    <meta
      name="twitter:description"
      content="Book salon-quality beauty services at home with certified beauticians. Available across Hyderabad."
    />
    <meta name="twitter:image" content={brandUrl} />
  </Helmet>
);

export const AboutPageSEO = (
  <Helmet>
    <title>
      About Us - At Home Salon & Beauty Parlour in Hyderabad | {BrandName}
    </title>
    <meta
      name="description"
      content={`Learn about ${BrandName} – delivering certified salon & beauty parlour services at home in Hyderabad. Trusted by hundreds of happy clients. Book today.`}
    />
    <meta
      name="keywords"
      content={`about beauty parlour Hyderabad, at-home salon services Hyderabad, salon at doorstep, trusted beauty services Hyderabad, certified beauticians Hyderabad, hygienic home salon Hyderabad, salon services story Hyderabad, beauty team Hyderabad, ${BrandName} beauty journey`}
    />

    <meta
      property="og:title"
      content={`About ${BrandName} | Salon at Home in Hyderabad`}
    />
    <meta
      property="og:description"
      content={`Know more about ${BrandName} story, our certified team, hygiene values, and why we're Hyderabad's trusted salon-at-home service.`}
    />
    <meta property="og:image" content={brandLogo} />
    <meta property="og:url" content={`${brandUrl}/about`} />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content={`"About ${BrandName} - Beauty at Home in Hyderabad"`}
    />
    <meta
      name="twitter:description"
      content={`Discover how ${BrandName} brings luxury salon services to your doorstep in Hyderabad.`}
    />
    <meta name="twitter:image" content={brandLogo} />
  </Helmet>
);

export const ServicePageSEO = (
  <Helmet>
    <title>
      Salon & Beauty Parlour Services at Home in Hyderabad | {BrandName}
    </title>
    <meta
      name="description"
      content={`Explore ${BrandName} salon & beauty parlour services at home in Hyderabad – bridal makeup, facials, haircuts, waxing & more. Book certified beauticians now!`}
    />
    <meta
      name="keywords"
      content="salon services at home Hyderabad, beauty parlour at home Hyderabad, bridal makeup Hyderabad, facial services at home, waxing and threading at home Hyderabad, manicure pedicure home service, haircut at home Hyderabad, women salon home service Hyderabad, doorstep beauty services Hyderabad"
    />

    <meta
      property="og:title"
      content={`At-Home Beauty Parlour Services in Hyderabad | ${BrandName}`}
    />
    <meta
      property="og:description"
      content={`Facials, bridal makeup, hair styling, waxing, manicure & more – delivered to your doorstep by ${BrandName} expert beauticians in Hyderabad.`}
    />
    <meta property="og:image" content={brandLogo} />
    <meta property="og:url" content={`${brandUrl}/services`} />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="At-Home Salon Services in Hyderabad" />
    <meta
      name="twitter:description"
      content="Book from a wide range of home-based beauty parlour services in Hyderabad. Safe, hygienic & certified professionals."
    />
    <meta name="twitter:image" content={brandLogo} />
  </Helmet>
);

export const PricingPageSEO = (
  <Helmet>
    <title>
      Affordable Salon Service Prices at Home in Hyderabad | {BrandName}
    </title>
    <meta
      name="description"
      content={`View ${BrandName} affordable pricing for beauty parlour & salon services at home in Hyderabad. Transparent rates. No hidden fees. Book certified beauticians now.`}
    />
    <meta
      name="keywords"
      content="salon services price Hyderabad, beauty parlour rates at home Hyderabad, facial price Hyderabad, bridal makeup cost at home, home salon package Hyderabad, hair spa home service price"
    />

    <meta
      property="og:title"
      content="Salon & Beauty Parlour Service Pricing in Hyderabad"
    />
    <meta
      property="og:description"
      content="Explore clear and affordable pricing for salon-at-home services like facial, waxing, haircut, and bridal makeup across Hyderabad."
    />
    <meta property="og:image" content={brandLogo} />
    <meta property="og:url" content={`${brandUrl}/pricing`} />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Affordable Beauty Services at Home in Hyderabad"
    />
    <meta
      name="twitter:description"
      content={`Compare beauty parlour service rates for home visits in Hyderabad. Transparent, value-packed pricing by ${BrandName}`}
    />
    <meta name="twitter:image" content={brandLogo} />
  </Helmet>
);

export const BookPageSEO = (
  <Helmet>
    <title>
      Book Salon & Beauty Parlour Services at Home in Hyderabad | {BrandName}
    </title>
    <meta
      name="description"
      content={`Book beauty parlour services at your doorstep in Hyderabad with ${BrandName}. Select date, time, and service – easy, quick & hygienic salon at home booking!`}
    />
    <meta
      name="keywords"
      content="book salon services Hyderabad, home beauty parlour booking, salon at home Hyderabad, doorstep salon services Hyderabad, facial booking Hyderabad, bridal makeup appointment Hyderabad"
    />

    <meta
      property="og:title"
      content={`Book Home Salon Services in Hyderabad - ${BrandName}`}
    />
    <meta
      property="og:description"
      content="Choose from a range of salon services – bridal, facial, haircut, waxing and more. Book a certified beautician at your home today."
    />
    <meta property="og:image" content={brandLogo} />
    <meta property="og:url" content={`${brandUrl}/book-an-appointment`} />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Book Home Salon Services in Hyderabad"
    />
    <meta
      name="twitter:description"
      content={`Book facial, waxing, haircut, bridal makeup & more from ${BrandName}. Certified beauticians. Clean & safe salon services at home in Hyderabad.`}
    />
    <meta name="twitter:image" content={brandLogo} />
  </Helmet>
);

export const ContactPageSEO = (
  <Helmet>
    <title>
      Contact Us | Book Salon Services at Home in Hyderabad | {BrandName}
    </title>
    <meta
      name="description"
      content={`Have questions or need help with your booking? Contact ${BrandName} for doorstep beauty salon services in Hyderabad. Call, WhatsApp, or fill out the form today.`}
    />
    <meta
      name="keywords"
      content="contact beauty parlour Hyderabad, home salon services contact Hyderabad, WhatsApp salon booking Hyderabad, doorstep beauty support"
    />

    <meta
      property="og:title"
      content={`"Contact ${BrandName} | Salon at Home in Hyderabad"`}
    />
    <meta
      property="og:description"
      content={`Reach out to ${BrandName} for support, salon bookings, or general inquiries. Call or WhatsApp to book home beauty services in Hyderabad.`}
    />
    <meta property="og:image" content={brandLogo} />
    <meta property="og:url" content={`${brandUrl}/contact`} />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content={`Contact ${BrandName} | Beauty Services at Home in Hyderabad`}
    />
    <meta
      name="twitter:description"
      content={`Call, WhatsApp, or send a message to ${BrandName} for home beauty and salon service bookings in Hyderabad. We’re here to assist you.`}
    />
    <meta name="twitter:image" content={brandLogo} />
  </Helmet>
);
