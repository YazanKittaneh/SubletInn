export interface House {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  neighborhood: string;
  city: string;
  state: string;
  address: string;
  priceFrom: number;
  priceTo: number;
  totalRooms: number;
  amenities: string[];
  highlights: string[];
  images: {
    hero: string;
    gallery: string[];
  };
  nearbySpots: NearbySpot[];
  faqs: FAQ[];
}

export interface NearbySpot {
  name: string;
  category: string;
  image: string;
  url?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const houses: House[] = [
  {
    slug: "francis",
    name: "Francis",
    tagline: "Where ambition meets community in Logan Square",
    description:
      "Francis is more than just a regular house. When you put interesting, smart, and enthusiastic people together in one of the coolest neighborhoods in Chicago, it's bound to be amazing. It's a hotspot for students and interns who want to live with people who share the same drive and motivation.",
    neighborhood: "Logan Square",
    city: "Chicago",
    state: "IL",
    address: "2748 W Francis Pl, Chicago, IL 60647",
    priceFrom: 750,
    priceTo: 950,
    totalRooms: 12,
    amenities: [
      "Furnished rooms with bed, desk & storage",
      "Fully equipped kitchen",
      "Furnished living room",
      "Wi-Fi included",
      "All utilities covered (gas, water, electricity)",
      "Coin-operated laundry",
      "Communal bathrooms",
      "Modern decor throughout",
    ],
    highlights: [
      "Community of young professionals & interns",
      "5 min walk to CTA California stop",
      "Heart of Logan Square nightlife",
      "Regular community events & gatherings",
      "International community from 19+ countries",
    ],
    images: {
      hero: "/images/subletinn/homepage/hero-dinner.jpg",
      gallery: [
        "/images/subletinn/homepage/rooms-overview.jpg",
        "/images/subletinn/homepage/bedroom.jpg",
        "/images/subletinn/francis/room1.jpg",
        "/images/subletinn/francis/living1.jpg",
        "/images/subletinn/francis/living2.jpg",
        "/images/subletinn/francis/room2.jpg",
      ],
    },
    nearbySpots: [
      {
        name: "Wormhole Coffee",
        category: "Coffee",
        image: "/images/subletinn/neighborhood/coffee.jpg",
      },
      {
        name: "Subterranean",
        category: "Live Music",
        image: "/images/subletinn/neighborhood/farmers-market.jpg",
      },
      {
        name: "Furious Spoon",
        category: "Ramen",
        image: "/images/subletinn/neighborhood/ramen.jpg",
      },
      {
        name: "Bang Bang Pie",
        category: "Bakery",
        image: "/images/subletinn/neighborhood/coffee.jpg",
      },
      {
        name: "Umami Burger",
        category: "Burgers",
        image: "/images/subletinn/neighborhood/ramen.jpg",
      },
      {
        name: "Cozy Corner",
        category: "Brunch",
        image: "/images/subletinn/neighborhood/farmers-market.jpg",
      },
    ],
    faqs: [
      {
        question: "How many people live in the house?",
        answer:
          "There are 12 rooms available, so there'll be a maximum of 12 people living with you at any given time. It's a great size for building a close community while still having your own space.",
      },
      {
        question: "Are the rooms furnished?",
        answer:
          "Yes! All rooms come with a bed set, desk, and storage. The public spaces like the kitchen and living room are fully furnished too.",
      },
      {
        question: "What's included in the rent?",
        answer:
          "Utilities are fully covered - Wi-Fi, gas, water, and electricity. No surprise bills at the end of the month.",
      },
      {
        question: "Is there laundry?",
        answer:
          "Yes, there are coin-operated laundry machines available on-site.",
      },
      {
        question: "Can I bring a roommate?",
        answer:
          "Rooms are single-occupancy only - one person per room. This helps ensure everyone has their own comfortable space.",
      },
      {
        question: "Are pets allowed?",
        answer:
          "Unfortunately, pets are not allowed at this time.",
      },
      {
        question: "Why is there an application process?",
        answer:
          "The backbone of our houses is the community we build. We look for a certain passion for work and outside interests, which translates into a community full of ambitious, interesting, and fun people. We want everyone to thrive here.",
      },
      {
        question: "What are the lease terms?",
        answer:
          "We offer flexible terms: 1-month ($950/mo), 2-month ($850/mo), and 3+ month ($750+/mo) packages. All rooms are rented by the calendar month.",
      },
    ],
  },
];

export const countries = [
  "Czech Republic",
  "Germany",
  "Denmark",
  "Italy",
  "Poland",
  "Ukraine",
  "Canada",
  "Mexico",
  "Puerto Rico",
  "USA",
  "Argentina",
  "Chile",
  "Ghana",
  "Zimbabwe",
  "China",
  "India",
  "Jordan",
  "South Korea",
  "Australia",
];

export const siteConfig = {
  name: "SubletInn",
  tagline: "Creating communities for young professionals",
  description:
    "SubletInn is a coliving company focused on creating communities of young professionals within fast-moving cities through the medium of shared houses.",
  email: "chicagosubletinn@gmail.com",
  phone: "(312) 714-0294",
  social: {
    instagram: "https://www.instagram.com/explore/tags/subletinn/",
    medium: "https://medium.com/chicago-subletinn",
  },
};
