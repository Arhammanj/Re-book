import { useState } from 'react';
import './FAQs.css';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is ReBook?",
          a: "ReBook is a platform that connects book buyers and sellers, giving books a second life. You can buy used books at affordable prices, sell your books to others, or donate them to NGOs."
        },
        {
          q: "Is ReBook free to use?",
          a: "Yes! Creating an account and browsing books is completely free. We offer optional subscription plans for sellers who want to list more books and access premium features."
        },
        {
          q: "How does ReBook work?",
          a: "Sellers list their books with photos and descriptions. Buyers browse the marketplace and contact sellers directly. Sellers can also donate books to partner NGOs."
        }
      ]
    },
    {
      category: "Buying Books",
      questions: [
        {
          q: "How do I buy a book?",
          a: "Browse the marketplace, click on any book you're interested in, and use the 'Contact Seller' button to connect with the seller directly. Arrange payment and delivery together."
        },
        {
          q: "Can I return a book?",
          a: "Return policies are set by individual sellers. We recommend discussing this with the seller before completing your purchase."
        },
        {
          q: "What payment methods are accepted?",
          a: "Payment is arranged directly between buyer and seller. Common methods include cash on delivery, bank transfer, and mobile payment apps."
        },
        {
          q: "What do the condition ratings mean?",
          a: "Like New: Appears unread, perfect condition. Very Good: Minimal wear. Good: Normal reading wear, may have notes. Acceptable: Heavily used but readable."
        }
      ]
    },
    {
      category: "Selling Books",
      questions: [
        {
          q: "How do I list a book for sale?",
          a: "Click 'Sell Books' in the navigation, fill in the book details, upload photos, set your price, and submit. Your listing will appear in the marketplace immediately."
        },
        {
          q: "How much should I charge for my book?",
          a: "We recommend pricing 30-60% off the original price, depending on condition. Check similar books in the marketplace for guidance."
        },
        {
          q: "How many books can I list?",
          a: "Free accounts can list up to 5 books at a time. Upgrade to a subscription plan to list more books and access premium features."
        },
        {
          q: "How do I get paid?",
          a: "Payment is arranged directly with buyers. You can accept cash, bank transfer, or mobile payments - whatever works best for you."
        }
      ]
    },
    {
      category: "Subscriptions",
      questions: [
        {
          q: "What are the subscription plans?",
          a: "We offer Basic (free), Pro (PKR 499/month), and Premium (PKR 999/month) plans with increasing limits on listings and features."
        },
        {
          q: "Can I cancel my subscription?",
          a: "Yes, you can cancel anytime from your dashboard. You'll retain access until the end of your billing period."
        },
        {
          q: "Do I need a subscription to sell books?",
          a: "No! Free accounts can list up to 5 books. Subscriptions are optional for sellers who want to list more books."
        }
      ]
    },
    {
      category: "Donations",
      questions: [
        {
          q: "How do I donate books?",
          a: "Visit the NGO Partners page, select an organization, and follow their donation process. Some NGOs offer pickup services."
        },
        {
          q: "Which NGOs can I donate to?",
          a: "We partner with verified educational NGOs. Visit the NGO Partners page to see all available organizations."
        },
        {
          q: "Do I get any benefit from donating?",
          a: "Yes! Donations help communities access education. Some NGOs provide donation receipts for tax purposes."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <div className="faqs-header">
        <h1>❓ Frequently Asked Questions</h1>
        <p>Find answers to common questions about ReBook</p>
      </div>

      <div className="faqs-content">
        {faqs.map((category, catIndex) => (
          <div key={catIndex} className="faq-category">
            <h2>{category.category}</h2>
            <div className="faq-questions">
              {category.questions.map((faq, qIndex) => {
                const index = `${catIndex}-${qIndex}`;
                const isOpen = openIndex === index;
                
                return (
                  <div 
                    key={qIndex} 
                    className={`faq-item ${isOpen ? 'open' : ''}`}
                    onClick={() => toggleFAQ(catIndex, qIndex)}
                  >
                    <div className="faq-question">
                      <h3>{faq.q}</h3>
                      <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
                    </div>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="faqs-contact">
        <h2>Still have questions?</h2>
        <p>Can't find what you're looking for? Reach out to our support team.</p>
        <button className="btn btn-primary">Contact Support</button>
      </div>
    </div>
  );
};

export default FAQs;
