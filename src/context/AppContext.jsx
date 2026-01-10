import { createContext, useContext, useState, useEffect } from 'react';
import { books as initialBooks } from '../data/books';
import { users } from '../data/users';
import { donations as initialDonations } from '../data/ngos';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // Auth state
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Books state
  const [books, setBooks] = useState(initialBooks);
  const [cart, setCart] = useState([]);

  // Donations state
  const [donations, setDonations] = useState(initialDonations);

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('rebookUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setCurrentUser(user);
      setIsAuthenticated(true);
    }
  }, []);

  // Auth functions
  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      const userWithoutPassword = { ...user };
      delete userWithoutPassword.password;
      setCurrentUser(userWithoutPassword);
      setIsAuthenticated(true);
      localStorage.setItem('rebookUser', JSON.stringify(userWithoutPassword));
      return { success: true, user: userWithoutPassword };
    }
    return { success: false, message: 'Invalid email or password' };
  };

  const register = (userData) => {
    const emailExists = users.find(u => u.email === userData.email);
    if (emailExists) {
      return { success: false, message: 'Email already registered' };
    }

    const newUser = {
      id: users.length + 1,
      ...userData,
      role: 'seller',
      subscription: 'Basic',
      joinedDate: new Date().toISOString().split('T')[0],
      rating: 5.0,
      totalSales: 0,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
    };

    users.push(newUser);
    const userWithoutPassword = { ...newUser };
    delete userWithoutPassword.password;
    setCurrentUser(userWithoutPassword);
    setIsAuthenticated(true);
    localStorage.setItem('rebookUser', JSON.stringify(userWithoutPassword));
    return { success: true, user: userWithoutPassword };
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('rebookUser');
  };

  // Book functions
  const addBook = (bookData) => {
    const newBook = {
      id: books.length + 1,
      ...bookData,
      sellerId: currentUser?.id,
      sellerName: currentUser?.name,
      sold: false,
      listedDate: new Date().toISOString().split('T')[0]
    };
    setBooks([...books, newBook]);
    return newBook;
  };

  const updateBook = (bookId, updates) => {
    setBooks(books.map(book => 
      book.id === bookId ? { ...book, ...updates } : book
    ));
  };

  const deleteBook = (bookId) => {
    setBooks(books.filter(book => book.id !== bookId));
  };

  // Cart functions
  const addToCart = (book) => {
    if (!cart.find(item => item.id === book.id)) {
      setCart([...cart, book]);
    }
  };

  const removeFromCart = (bookId) => {
    setCart(cart.filter(item => item.id !== bookId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Donation functions
  const addDonation = (donationData) => {
    const newDonation = {
      id: donations.length + 1,
      ...donationData,
      date: new Date().toISOString().split('T')[0],
      status: 'Processing',
      trackingId: `TRK-${Date.now()}`
    };
    setDonations([...donations, newDonation]);
    return newDonation;
  };

  const value = {
    // Auth
    currentUser,
    isAuthenticated,
    login,
    register,
    logout,
    
    // Books
    books,
    addBook,
    updateBook,
    deleteBook,
    
    // Cart
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    
    // Donations
    donations,
    addDonation
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
