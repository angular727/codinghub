// Long-form information for each service, shown on /services/[slug]
export type ServiceDetail = {
  overview: string[];
  deliver: { t: string; d: string }[];
  tech: string[];
  examples: { t: string; d: string; slug: string }[];
  steps: { t: string; d: string }[];
  faq: { q: string; a: string }[];
};

const steps = (build: string): { t: string; d: string }[] => [
  { t: "Discover", d: "We learn about your business, your users and what you want to achieve." },
  { t: "Design", d: "We plan the structure and design the screens, and agree them with you." },
  { t: "Build", d: build },
  { t: "Launch & support", d: "We deploy it securely and keep supporting and improving it with you." },
];

const commonFaq = (): { q: string; a: string }[] => [
  { q: "How long does a project take?", a: "It depends on the size. After we understand your needs, we give you a clear plan and timeline before any work begins." },
  { q: "Will you support it after launch?", a: "Yes. CodingHub provides ongoing support and updates after your system goes live." },
  { q: "Can you work with what I already have?", a: "Yes. We can build on your existing data and systems, and import records from spreadsheets or files." },
];

export const serviceDetails: Record<string, ServiceDetail> = {
  "cloud-web-applications": {
    overview: [
      "Cloud-based web applications are business software that runs in the browser, so your team can use it from any computer or phone without installing anything. We design and build the whole thing: the screens people use, the server behind them and the database that stores your data.",
      "Because it runs in the cloud, the system is always up to date, easy to back up and simple to scale as your business grows.",
    ],
    deliver: [
      { t: "Custom business software", d: "Systems built around your workflow, such as point-of-sale, clinic, lab, restaurant or complaint management." },
      { t: "Admin dashboards", d: "A clear dashboard that shows the numbers that matter the moment you log in." },
      { t: "Users, roles & security", d: "Separate logins for each person, with access limited to what their job needs." },
      { t: "Reports & exports", d: "Printable reports and exports to Excel, CSV or PDF." },
      { t: "Multi-business platforms", d: "One platform that serves many businesses, each with its own private data." },
      { t: "Cloud hosting & updates", d: "Secure hosting, regular updates and support from our team." },
    ],
    tech: ["Angular", "Node.js", "Express", "MongoDB", "REST APIs", "Cloud hosting"],
    examples: [
      { t: "Point-of-Sale System", d: "Multi-business POS with inventory, purchases, ledgers and reports.", slug: "point-of-sale-system" },
      { t: "Patient Care System", d: "Clinic management from reception to lab and billing.", slug: "patient-care-system" },
      { t: "Complaints Management System", d: "Complaint intake, assignment and resolution for several teams.", slug: "complaints-management-system" },
      { t: "Restaurant Management", d: "Tables, kitchen, billing and stock in one system.", slug: "restaurant-management" },
    ],
    steps: steps("We develop the system in stages and show you working versions along the way."),
    faq: [
      { q: "Do my staff need to install anything?", a: "No. The application runs in a web browser, on a computer, tablet or phone." },
      { q: "Can it handle many users and businesses?", a: "Yes. The platform can serve many users, and multi-business setups keep every business's data separate." },
      ...commonFaq(),
    ],
  },
  "cross-platform-mobile-apps": {
    overview: [
      "We build mobile apps that work on both Android and iPhone from a single codebase. They install on the phone's home screen like a normal app, load quickly and are easy to update, because there is only one version to maintain.",
      "This approach keeps development faster and more affordable than building two separate native apps, while still giving your users a smooth experience on their phones.",
    ],
    deliver: [
      { t: "One app for Android and iOS", d: "A single codebase that serves both platforms, so every feature reaches everyone at the same time." },
      { t: "Installable on the home screen", d: "Users add the app to their phone and open it like any other app." },
      { t: "Designed for small screens", d: "Layouts, buttons and forms built for touch and for use on the go." },
      { t: "Works with weak connections", d: "Smart caching so the app stays responsive when the signal is poor." },
      { t: "Connected to your system", d: "The app talks to your existing software, so everyone works with the same data." },
      { t: "Easy updates", d: "Updates reach users without waiting for store approval." },
    ],
    tech: ["Angular", "Progressive web apps", "Service workers", "REST APIs"],
    examples: [
      { t: "Field-team mobile app", d: "A companion mobile app for teams working in the field, connected to the complaint system.", slug: "complaints-management-system" },
      { t: "Mobile-friendly business software", d: "Our systems such as POS and restaurant management also work on phones and tablets.", slug: "point-of-sale-system" },
    ],
    steps: steps("We build the app in stages and test it on real phones."),
    faq: [
      { q: "Is it a real app?", a: "It installs on the home screen and runs full screen like an app. It is built as a progressive web app, so it works on both Android and iPhone." },
      { q: "Does it need an app store?", a: "Not necessarily. Users can install it straight from the browser, and updates arrive automatically." },
      ...commonFaq(),
    ],
  },
  "iot-solutions": {
    overview: [
      "IoT, the Internet of Things, means connecting physical devices such as access readers, sensors and controllers to software, so you can see and control them from one place. We build the server that devices report to and the dashboard people use to manage them.",
      "You can see which devices are online, change their settings remotely and keep a log of everything that happens.",
    ],
    deliver: [
      { t: "Device connection", d: "Devices report to a central server over the internet." },
      { t: "Live status monitoring", d: "See at a glance which devices are online, offline or asleep." },
      { t: "Remote configuration", d: "Change a device's settings from the dashboard without visiting it." },
      { t: "Data and event logs", d: "Every event is recorded, so you can look back at what happened and when." },
      { t: "Dashboards and statistics", d: "Summary numbers and lists that make large device fleets easy to manage." },
      { t: "Secure access", d: "Signed-in administrators only, with secure authentication." },
    ],
    tech: ["Node.js", "Express", "SQLite", "REST APIs", "Secure authentication", "Scheduled jobs"],
    examples: [
      { t: "University Access & Attendance", d: "Access devices across campus, student records, bulk site access and entry logs.", slug: "university-access-attendance" },
    ],
    steps: steps("We build the device server and the dashboard, and test them with your real devices."),
    faq: [
      { q: "Which devices can you connect?", a: "We design the connection around your devices. Tell us what you use and we will confirm how it can be integrated." },
      { q: "Can I manage devices remotely?", a: "Yes. Settings can be changed and devices monitored from the web dashboard." },
      ...commonFaq(),
    ],
  },
  "ai-integration": {
    overview: [
      "AI integration means adding smart features to the software you already use, or to a new system, so routine work gets faster. Typical examples are searching and summarising text, reading and sorting documents, answering common questions and spotting patterns in your data.",
      "We start from a real task in your business and choose the simplest AI approach that does that job well, instead of adding AI for its own sake.",
    ],
    deliver: [
      { t: "Smart search & assistants", d: "Let staff or customers ask questions in plain language and get useful answers from your own information." },
      { t: "Document and text processing", d: "Read, sort and summarise documents, messages and forms." },
      { t: "Data insights", d: "Turn your records into summaries and trends that are easy to understand." },
      { t: "Workflow helpers", d: "Suggestions and drafts inside your existing screens to save typing and time." },
      { t: "Integration with your software", d: "AI features connected to your current systems and data." },
      { t: "Review and safeguards", d: "People stay in control, with checks so results are reviewed before they matter." },
    ],
    tech: ["Language models", "AI services & APIs", "Your existing data", "REST APIs"],
    examples: [
      { t: "AI inside business software", d: "Our products are built so smart features can be added where they help most.", slug: "point-of-sale-system" },
    ],
    steps: steps("We build and test the AI feature on your own examples, and improve it until it is reliable."),
    faq: [
      { q: "Do I need a lot of data?", a: "Not always. Many useful features work with the information you already have. We will tell you honestly what is realistic." },
      { q: "Is my data kept private?", a: "We design the integration with privacy in mind and agree with you what data may be used." },
      ...commonFaq(),
    ],
  },
  "website-development": {
    overview: [
      "We design and build professional websites that present your business clearly and bring in enquiries. Each site is made around your brand, loads quickly and works well on phones, tablets and computers.",
      "You can update the content yourself or ask us to do it, and the site is built so search engines can find and understand it.",
    ],
    deliver: [
      { t: "Brand-led design", d: "A look and feel that reflects your company, not a generic template." },
      { t: "Responsive on every device", d: "Pages that adapt cleanly to phones, tablets and desktops." },
      { t: "Fast loading", d: "Optimised images and code, so visitors do not wait." },
      { t: "Search-friendly structure", d: "Clean structure and page titles that help people find you." },
      { t: "Contact and lead forms", d: "Enquiries sent straight to your inbox or WhatsApp." },
      { t: "Online stores", d: "Product catalogues, carts and orders for businesses that sell online." },
    ],
    tech: ["Next.js", "Angular", "Responsive design", "SEO-ready", "Cloud hosting"],
    examples: [
      { t: "Grocery Store Website", d: "An online catalogue, cart and checkout with an admin dashboard for the store.", slug: "grocery-store-website" },
      { t: "Custom Website Solutions", d: "Tailored websites built around a brand and its goals.", slug: "custom-website-solutions" },
    ],
    steps: steps("We build the pages, connect the forms and test everything on real devices."),
    faq: [
      { q: "Can I edit the content myself?", a: "Yes. We can set the site up so you can change text and images, or we can handle updates for you." },
      { q: "Will it show up on Google?", a: "We build the site so search engines can read it. Rankings also depend on your content and competition over time." },
      ...commonFaq(),
    ],
  },
  "business-automation": {
    overview: [
      "Business automation replaces repeated manual work with software that does it for you. That can mean moving from spreadsheets and paper registers to one system, importing data from files, and letting stock, balances and reports update by themselves.",
      "The goal is simple: fewer mistakes, less time spent on routine tasks and clear numbers whenever you need them.",
    ],
    deliver: [
      { t: "Paper and spreadsheets to software", d: "Replace registers and Excel sheets with one connected system." },
      { t: "Automatic stock and balances", d: "Sales and purchases update stock, customer balances and ledgers automatically." },
      { t: "Bulk import and export", d: "Load many records from Excel or CSV, and export reports when you need them." },
      { t: "Scheduled tasks", d: "Routine jobs run on their own at the times you choose." },
      { t: "Messaging", d: "Send orders and updates through channels such as WhatsApp." },
      { t: "Automatic reports", d: "Daily and monthly reports that are ready without manual counting." },
    ],
    tech: ["Node.js", "Scheduled jobs", "Excel / CSV import and export", "REST APIs", "WhatsApp links"],
    examples: [
      { t: "Point-of-Sale System", d: "Stock, ledgers and reports update automatically from sales and purchases.", slug: "point-of-sale-system" },
      { t: "Complaints Management System", d: "Complaints are uploaded in bulk from Excel and moved through approval and assignment.", slug: "complaints-management-system" },
      { t: "Lab Management System", d: "Patients, tests, reports, invoices and balances in one place.", slug: "lab-management-system" },
    ],
    steps: steps("We automate the process step by step and check each result with you."),
    faq: [
      { q: "Which processes can be automated?", a: "Any repeated, rule-based task: billing, stock updates, reports, imports and routine messages. We will point out where it saves the most time." },
      { q: "Will my team need training?", a: "Only a little. We keep the screens simple, and we help your team get started." },
      ...commonFaq(),
    ],
  },
};

export const getServiceDetail = (slug: string) => serviceDetails[slug];
