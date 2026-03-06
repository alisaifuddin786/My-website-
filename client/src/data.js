export const categories = [
  { id: 'tours', label: 'Tours & Experiences', icon: '🎈' },
  { id: 'tickets', label: 'Attraction Tickets', icon: '🎟️' },
  { id: 'hotels', label: 'Hotels', icon: '🏨' },
  { id: 'transport', label: 'Transport', icon: '🚆' },
  { id: 'cars', label: 'Car Rentals', icon: '🚗' },
  { id: 'all', label: 'All Services', icon: '🔶' }
];

export const destinations = [
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'phuket',
    name: 'Phuket',
    country: 'Thailand',
    image:
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    image:
      'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1200&q=80'
  }
];

export const hotels = [
  {
    id: 'h1',
    name: 'Skyline Grand Dubai',
    location: 'Downtown Dubai',
    rating: 4.8,
    pricePerNight: 220,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    amenities: ['Free breakfast', 'Rooftop pool', 'Airport transfer']
  },
  {
    id: 'h2',
    name: 'Andaman Cove Resort',
    location: 'Patong, Phuket',
    rating: 4.6,
    pricePerNight: 165,
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    amenities: ['Beach access', 'Family rooms', 'Spa & wellness']
  },
  {
    id: 'h3',
    name: 'Royal Piazza Suites',
    location: 'Rome Historic Center',
    rating: 4.7,
    pricePerNight: 205,
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
    amenities: ['City tours', 'Concierge', 'Romantic dining']
  }
];

export const tourPackages = [
  {
    id: 't1',
    title: 'Desert Safari & Burj Khalifa Combo',
    location: 'Dubai',
    duration: '2 Days',
    price: 149,
    image:
      'https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=1200&q=80',
    highlights: ['4x4 dune bashing', 'Sunset BBQ camp', '124th floor Burj entry']
  },
  {
    id: 't2',
    title: 'Island Hopping & Coral Snorkel',
    location: 'Phuket',
    duration: '3 Days',
    price: 189,
    image:
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Phi Phi speedboat tour', 'Snorkeling gear included', 'Seaside night market']
  },
  {
    id: 't3',
    title: 'Roman Heritage Explorer',
    location: 'Rome',
    duration: '2 Days',
    price: 139,
    image:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Colosseum fast-track', 'Vatican guided visit', 'Local food tasting']
  }
];

export const adminStats = [
  { label: 'Total bookings', value: '1,284' },
  { label: 'Pending confirmations', value: '46' },
  { label: 'Revenue this month', value: '$182,400' },
  { label: 'Support tickets', value: '12' }
];

export const recentBookings = [
  {
    id: 'BK-1092',
    customer: 'Ava Johnson',
    packageName: 'Desert Safari & Burj Khalifa Combo',
    date: '2026-05-14',
    status: 'Confirmed'
  },
  {
    id: 'BK-1093',
    customer: 'Rahul Sharma',
    packageName: 'Andaman Cove Resort',
    date: '2026-05-18',
    status: 'Pending'
  },
  {
    id: 'BK-1094',
    customer: 'Elena Rossi',
    packageName: 'Roman Heritage Explorer',
    date: '2026-05-21',
    status: 'Paid'
  }
];
