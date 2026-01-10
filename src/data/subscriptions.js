export const subscriptionPlans = [
  {
    id: 1,
    name: "Starter",
    price: 0,
    duration: "Free Forever",
    platformFee: 10,
    features: [
      "10% platform fee on each sale",
      "List up to 10 books per month",
      "Basic listing visibility",
      "Email support",
      "Standard seller badge",
      "Access to marketplace analytics"
    ],
    savings: "Pay as you sell",
    recommended: false,
    color: "from-blue-500 to-cyan-500",
    icon: "🌟"
  },
  {
    id: 2,
    name: "Growth",
    price: 14.99,
    duration: "per month",
    platformFee: 5,
    features: [
      "Only 5% platform fee on each sale",
      "List up to 50 books per month",
      "Enhanced listing visibility",
      "Priority email support",
      "Featured seller badge",
      "Advanced analytics dashboard",
      "Early access to new buyers",
      "Monthly performance reports"
    ],
    savings: "Save 5% on every sale",
    recommended: true,
    color: "from-purple-500 to-pink-500",
    icon: "🚀"
  },
  {
    id: 3,
    name: "Enterprise",
    price: 29.99,
    duration: "per month",
    platformFee: 2,
    features: [
      "Minimal 2% platform fee on each sale",
      "Unlimited book listings",
      "Premium listing visibility",
      "24/7 priority support",
      "VIP seller badge",
      "Advanced AI-powered analytics",
      "Promoted listings on homepage",
      "Direct buyer messaging",
      "Custom seller storefront",
      "Dedicated account manager"
    ],
    savings: "Save 8% on every sale + premium features",
    recommended: false,
    color: "from-orange-500 to-red-500",
    icon: "👑"
  }
];

export const userSubscription = {
  userId: 1,
  currentPlan: "Basic",
  startDate: "2025-12-01",
  renewalDate: "2026-01-01",
  listingsUsed: 3,
  listingsLimit: 5,
  totalSales: 12,
  totalRevenue: 156.88
};
