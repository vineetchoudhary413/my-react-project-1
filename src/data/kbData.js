// -----------------------------------------------------------------------
// This file is our "fake database".
// In a real project this data would come from an API call (fetch/axios).
// Keeping it here as plain JS makes it easy to see how props flow
// from data -> pages -> components without worrying about a backend yet.
// -----------------------------------------------------------------------

export const categories = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: "🚀",
    description: "Let's get you started with the platform",
    articles: [
      {
        id: "create-account",
        title: "How to create an account?",
        content: `In this article, we will walk you through how to sign up and create your account.

1. Go to the website and click "Sign Up" in the top right corner.
2. Enter your name, email address, and a secure password.
3. Check your inbox for a verification email and click the confirmation link.
4. Once verified, log in and complete your profile details.

That's it — your account is ready to use!`,
      },
      {
        id: "connect-calendar",
        title: "How to connect your calendar?",
        content: `You can sync your calendar so bookings automatically show up.

1. Open Settings from your dashboard.
2. Select "Integrations" from the left menu.
3. Click "Connect" next to Google Calendar or Outlook Calendar.
4. Sign in and approve the requested permissions.

Your events will now stay in sync automatically.`,
      },
      {
        id: "default-theme",
        title: "Understanding the default theme",
        content: `Every new page starts with our default theme so you can launch quickly.

- Colors and fonts follow your brand settings automatically.
- You can override any section by clicking "Customize" while editing a page.
- Changes are saved as drafts until you hit "Publish".

You can always reset back to the default theme from Settings > Appearance.`,
      },
    ],
  },
  {
    id: "quick-guides",
    title: "Quick Guides",
    icon: "📘",
    description: "Learn about all the product features",
    articles: [
      {
        id: "issue-refund",
        title: "How to issue a full or partial refund?",
        content: `Refunds can be issued directly from an order's details page.

1. Go to Orders and open the order you want to refund.
2. Click "Refund" in the top right corner.
3. Choose "Full refund" or enter a custom "Partial amount".
4. Confirm the refund — the customer is notified automatically.

Refunds usually reflect in the customer's account within 5-7 business days.`,
      },
      {
        id: "customer-checkout",
        title: "How do customers checkout on my products?",
        content: `Customers can purchase your products through a simple, guided checkout.

1. They click "Buy Now" on your product page.
2. They enter their email and payment details.
3. Payment is processed securely and a receipt is emailed instantly.
4. They get immediate access based on the product type (course, file, etc.)

You can track every purchase from your Orders dashboard.`,
      },
    ],
  },
  {
    id: "payment-page",
    title: "Payment Page",
    icon: "💳",
    description: "Learn all about creating payment pages",
    articles: [
      {
        id: "create-payment-page",
        title: "How to create a payment page?",
        content: `Payment pages let you collect one-time or recurring payments.

1. From your dashboard, click "Create New" then "Payment Page".
2. Add a title, description, and price.
3. Choose one-time or subscription billing.
4. Click "Publish" to get your shareable payment link.

You can share this link anywhere — social media, email, or your website.`,
      },
    ],
  },
  {
    id: "events",
    title: "Events",
    icon: "🎟️",
    description: "Learn all about creating events and webinars",
    articles: [
      {
        id: "create-event",
        title: "How to create an event or webinar?",
        content: `You can host live or pre-recorded events for your audience.

1. Go to Events and click "Create Event".
2. Set a title, date, time, and description.
3. Choose live (Zoom/Google Meet link) or on-demand video.
4. Set a price, or make it free, then publish.

Attendees will receive reminder emails automatically before the event starts.`,
      },
    ],
  },
  {
    id: "courses",
    title: "Courses",
    icon: "📝",
    description: "Learn all about creating courses",
    articles: [
      {
        id: "create-course",
        title: "How to create a course?",
        content: `Courses let you organize content into modules and lessons.

1. Go to Courses and click "New Course".
2. Add a course title and cover image.
3. Create modules, then add lessons (video, text, or quiz) inside each module.
4. Set pricing and click "Publish".

Students who enroll will get access based on the drip schedule you configure.`,
      },
    ],
  },
];

// Helper: find a category by its id
export function getCategoryById(categoryId) {
  return categories.find((category) => category.id === categoryId);
}

// Helper: find a single article by category id + article id
export function getArticle(categoryId, articleId) {
  const category = getCategoryById(categoryId);
  if (!category) return null;
  return category.articles.find((article) => article.id === articleId);
}
