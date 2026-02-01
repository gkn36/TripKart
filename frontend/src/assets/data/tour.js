import tourImg01 from "../t1.jpg";
import tourImg02 from "../t2.jpg";
import tourImg03 from "../t3.jpg";
import tourImg04 from "../t4.jpg";
import tourImg05 from "../t5.jpg";
import tourImg06 from "../t6.jpg";
import tourImg07 from "../t7.jpg";
import tourImg08 from "../t8.png";

const tours = [
  {
    id: "01",
    title: "Taj Mahal , Agra",
    city: "Agra",
    distance: 300,
    price: 5000,
    maxGroupSize: 10,
    desc: "Experience the timeless beauty of the Taj Mahal, where love, history, and breathtaking architecture come together in Agra.",
    availableDates: ["25-1-2026", "2-2-2026", "7-2-2026"],
    reviews: [
      {
        name: "Harsh",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Golden Temple , Amritsar",
    city: "Amritsar",
    distance: 400,
    price: 2999,
    maxGroupSize: 8,
    desc: "Discover the serene beauty of the Golden Temple, where spirituality, harmony, and devotion shine in the heart of Amritsar.",
    availableDates: ["25-2-2025", "2-1-2026", "7-2-2026"],
    reviews: [
      {
        name: "Akshay",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Amer Fort , Jaipur",
    city: "Jaipur",
    distance: 500,
    price: 5999,
    maxGroupSize: 8,
    desc: "Step into royal history at Amer Fort, where majestic architecture and timeless Rajput grandeur overlook the hills of Jaipur",
    availableDates: ["5-1-2026", "2-1-2026", "7-2-2026"],
    reviews: [
      {
        name: "Harshit",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Promenade Beach ",
    city: "Puducherry",
    distance: 500,
    price: 9000,
    maxGroupSize: 8,
    desc: "Relax along Promenade Beach, Puducherry, where gentle waves, sea breeze, and colonial charm meet the Bay of Bengal",
    availableDates: ["5-1-2025", "2-1-2025", "7-2-2025"],
    reviews: [
      {
        name: "Abhishek",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Dudhsagar Waterfalls , Goa ",
    city: "Goa",
    distance: 500,
    price: 7000,
    maxGroupSize: 8,
    desc: "Located inside the Bhagwan Mahaveer Sanctuary and Mollem National Park, this multi-tiered milky white waterfall gushes down from a height of 310 metres, making it India’s fifth-highest waterfall. It is at its maximum glory just after the rains.",
    availableDates: ["5-1-2025", "2-1-2025", "7-2-2025"],
    reviews: [
      {
        name: "Mohit",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Nubra Valley , Leh",
    city: "Leh",
    distance: 500,
    price: 12000,
    maxGroupSize: 8,
    desc: "Explore the breathtaking Nubra Valley in Leh, where sand dunes, snow-clad mountains, and serene monasteries create a landscape like no other.",
    availableDates: ["5-5-2026", "2-4-2026", "7-3-2026"],
    reviews: [
      {
        name: "Harsh",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Hawa Mahal ",
    city: "Jaipur",
    distance: 500,
    price: 4000,
    maxGroupSize: 8,
    desc: "“Admire the iconic Hawa Mahal, Jaipur’s Palace of Winds, where intricate pink sandstone windows reflect royal elegance and heritage",
    availableDates: ["5-1-2026", "2-1-2026", "7-2-2026"],
    reviews: [
      {
        name: "AKshay",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Jag Mandir Palace",
    city: "Udaipur",
    distance: 500,
    price: 6000,
    maxGroupSize: 8,
    desc: "Also known as 'Lake Garden Palace', this floating marvel will take your breath away with its magnificent architecture and gorgeous setting in the middle of the Lake Pichola.",
    availableDates: ["5-1-2026", "2-1-2026", "7-2-2026"],
    reviews: [
      {
        name: "Abhishek",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
