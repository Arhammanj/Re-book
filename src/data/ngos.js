export const ngos = [
  {
    id: 1,
    name: "Read for Education",
    description: "Providing books to underprivileged children in rural areas",
    logo: "📚",
    totalDonations: 1250,
    booksDistributed: 3400,
    beneficiaries: 850,
    founded: 2015,
    location: "Multiple States",
    impact: "Improved literacy rates by 35% in target communities",
    transparencyScore: 98
  },
  {
    id: 2,
    name: "Books for All",
    description: "Building community libraries in underserved neighborhoods",
    logo: "📖",
    totalDonations: 980,
    booksDistributed: 2800,
    beneficiaries: 620,
    founded: 2018,
    location: "Urban Centers",
    impact: "Established 45 community libraries",
    transparencyScore: 95
  },
  {
    id: 3,
    name: "Knowledge Bridge",
    description: "Connecting students with educational resources",
    logo: "🌉",
    totalDonations: 1560,
    booksDistributed: 4200,
    beneficiaries: 1100,
    founded: 2012,
    location: "Nationwide",
    impact: "95% of beneficiaries showed improved academic performance",
    transparencyScore: 97
  },
  {
    id: 4,
    name: "Learning Light Foundation",
    description: "Empowering youth through access to quality reading materials",
    logo: "💡",
    totalDonations: 750,
    booksDistributed: 2100,
    beneficiaries: 480,
    founded: 2020,
    location: "Rural Areas",
    impact: "Reached 150+ villages with mobile libraries",
    transparencyScore: 93
  }
];

export const donations = [
  {
    id: 1,
    donorName: "Anonymous",
    ngoId: 1,
    ngoName: "Read for Education",
    amount: 25,
    books: ["Clean Code", "Introduction to Algorithms"],
    date: "2026-01-03",
    status: "Delivered",
    trackingId: "RFE-2026-001"
  },
  {
    id: 2,
    donorName: "John Doe",
    ngoId: 2,
    ngoName: "Books for All",
    amount: 15,
    books: ["The Great Gatsby"],
    date: "2025-12-28",
    status: "In Transit",
    trackingId: "BFA-2025-089"
  },
  {
    id: 3,
    donorName: "Jane Smith",
    ngoId: 3,
    ngoName: "Knowledge Bridge",
    amount: 40,
    books: ["Sapiens", "Educated", "1984"],
    date: "2025-12-20",
    status: "Delivered",
    trackingId: "KB-2025-156"
  },
  {
    id: 4,
    donorName: "Mike Johnson",
    ngoId: 1,
    ngoName: "Read for Education",
    amount: 30,
    books: ["To Kill a Mockingbird", "The Psychology of Money"],
    date: "2026-01-01",
    status: "Processing",
    trackingId: "RFE-2026-002"
  }
];

export const impactStats = {
  totalBooksCollected: 12500,
  totalBooksDonated: 10800,
  booksInTransit: 450,
  activeBeneficiaries: 3050,
  partneredNGOs: 4,
  co2Saved: "2.4 tons",
  treesEquivalent: 48
};
