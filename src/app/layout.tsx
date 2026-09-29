import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://raj-mohan-portfolio.vercel.app";

const title = "Raj Mohan - Full Stack Java Developer";

const description = "Raj Mohan is a Full Stack Java Developer with 4+ years of experience in Java, Spring Boot, Microservices, Kafka, Redis, Docker, Kubernetes, AWS and REST APIs.";

export const viewport: Viewport = {
  themeColor: "#110f0b",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: title,
    template: "%s | Raj Mohan",
  },

  description,

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  keywords: [
    "Raj Mohan",
    "Raj Mohan Developer",
    "Raj Mohan Portfolio",
    "Raj Mohan Java Developer",
    "Raj Mohan Spring Boot",
    "Raj Mohan GitHub",
    "Raj Mohan LinkedIn",
    "Raj Mohan Resume",
    "Raj Mohan Full Stack Developer",
    "Raj Mohan Backend Developer",
    "Raj Mohan Software Engineer",
    "Raj Mohan Software Developer",
    "Rajmohan",
    "Rajmohan Portfolio",
    "Rajmohan Developer",
    "Rajmohan Java Developer",
    "Rajmohan Spring Boot",
    "Rajmohan GitHub",
    "Rajmohan LinkedIn",
    "Rajmohan Resume",
    "Rajmohan Full Stack Developer",
    "Rajmohan Backend Developer",
    "Rajmohan Software Engineer",
    "Rajmohan Software Developer",
    "Java",
    "Java Developer",
    "Spring Boot",
    "Spring Boot Developer",
    "Java Spring Boot Developer",
    "Microservices",
    "Java Microservices Developer",
    "Spring Boot Microservices",
    "REST API",
    "REST API Developer",
    "Apache Kafka",
    "Kafka",
    "Apache Kafka Developer",
    "Docker",
    "Kubernetes",
    "AWS",
    "PostgreSQL",
    "Hibernate",
    "Backend Developer",
    "Java Backend Engineer",
    "Software Engineer",
    "Full Stack Developer",
    "Full Stack Java Developer",
    "Java Developer Chennai",
    "Backend Engineer India",
    "Software Developer Portfolio",
    "Event Driven Architecture",
    "Distributed Systems",
    "rajmohan",
    "rajmohan Portfolio",
    "rajmohan Developer",
    "rajmohan Java Developer",
    "rajmohan Spring Boot",
    "rajmohan GitHub",
    "rajmohan LinkedIn",
    "rajmohan Resume",
    "rajmohan Full Stack Developer",
    "rajmohan Backend Developer",
    "rajmohan Software Engineer",
    "rajmohan Software Developer",
  ],

  authors: [
    {
      name: "Raj Mohan",
      url: siteUrl,
    },
  ],

  creator: "Raj Mohan",
  publisher: "Raj Mohan",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title,
    description,
    siteName: "Raj Mohan",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Raj Mohan — Full Stack Java Developer",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Raj Mohan — Full Stack Java Developer",
    description,
    images: [`${siteUrl}/opengraph-image`],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "hWZNtoNyL5OvqpiEuUpQgsUDO_t4rAX8F2dTpewUd8E",

    other: {
      "msvalidate.01": "2BBB7A961E8FDAF35986BF5482030F67",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />

        {/* Profile image preload */}
        {/* <link
          rel="preload"
          as="image"
          href="/Profile.png"
          type="image/png"
        /> */}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${siteUrl}/#person`,

                  name: "Raj Mohan",
                  givenName: "Raj",
                  familyName: "Mohan",

                  url: siteUrl,

                  image: {
                    "@type": "ImageObject",
                    url: `${siteUrl}/Profile.png`,
                    contentUrl: `${siteUrl}/Profile.png`,
                    width: 1024,
                    height: 1375,
                    caption: "Raj Mohan - Full Stack Java Developer",
                  },

                  jobTitle: "Full Stack Java Developer",

                  description:
                    "Raj Mohan is a Full Stack Java Developer with 4+ years of experience in Java, Spring Boot, Microservices, Apache Kafka, Redis, PostgreSQL, Docker, Kubernetes, AWS and REST API development. Explore my projects, experience and technical skills.",

                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Chennai",
                    addressCountry: "IN",
                  },

                  alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "MR College of Arts & Science",
                  },

                  worksFor: {
                    "@type": "Organization",
                    name: "Machint Solutions Ltd",
                    url: "https://machint.com/",
                  },

                  knowsAbout: [
                    "Java",
                    "Spring Boot",
                    "Microservices",
                    "REST APIs",
                    "Apache Kafka",
                    "PostgreSQL",
                    "Redis",
                    "Docker",
                    "Kubernetes",
                    "AWS",
                    "Hibernate",
                    "JPA",
                  ],

                  sameAs: [
                    "https://www.linkedin.com/in/rajmohan5323/",
                    "https://github.com/rajmohan5323",
                    "https://www.instagram.com/rajmohan_5323/",
                    "https://www.facebook.com/rajmohan5323",
                  ],
                },

                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,

                  url: siteUrl,

                  name: "Raj Mohan — Full Stack Java Developer",

                  alternateName: [
                    "Raj Mohan Java Developer",
                    "Raj Mohan Full Stack Java Developer",
                    "Raj Mohan Portfolio",
                  ],

                  description:
                    "Official portfolio website of Raj Mohan, a Full Stack Java Developer with 4+ years of experience in Java, Spring Boot, Microservices, Kafka, Redis, AWS and REST API development.",

                  publisher: {
                    "@id": `${siteUrl}/#person`,
                  },
                },

                {
                  "@type": "WebPage",
                  "@id": `${siteUrl}/#webpage`,

                  url: siteUrl,

                  name: "Raj Mohan — Full Stack Java Developer | Portfolio",

                  description:
                    "Portfolio of Raj Mohan, a Full Stack Java Developer specializing in Java, Spring Boot, Microservices, Kafka, Redis, Docker, Kubernetes, AWS and REST APIs.",

                  isPartOf: {
                    "@id": `${siteUrl}/#website`,
                  },

                  about: {
                    "@id": `${siteUrl}/#person`,
                  },

                  mainEntity: {
                    "@id": `${siteUrl}/#person`,
                  },
                },
              ],
            }),
          }}
        />

        {/* Theme initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('theme');

                  if (mode === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>

      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>

        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}