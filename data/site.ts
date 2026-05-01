export type NavItem = {
  label: string;
  href: string;
};

export type CardItem = {
  title: string;
  description: string;
  href?: string;
  meta?: string;
  image?: string;
  label?: string;
};

export type StaffMember = {
  name: string;
  role: string;
  group: string;
  email: string;
  image?: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type StudentLifeItem = CardItem & {
  image: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Principal", href: "/principals-message" },
  { label: "Programs", href: "/programs-services" },
  { label: "Families", href: "/students-families" },
  { label: "Calendar", href: "/calendar-events" },
  { label: "Staff", href: "/staff-directory" },
  { label: "News", href: "/news-announcements" },
  { label: "Contact", href: "/contact" },
];

export const quickLinks: CardItem[] = [
  {
    title: "Call in an absence",
    description:
      "Let the office know when a student is away so staff can follow up with care and accuracy.",
    href: "/contact",
    label: "Office",
  },
  {
    title: "Transportation",
    description:
      "Find bus expectations, pickup reminders, and how families are notified when routes change.",
    href: "/students-families#transportation",
    label: "Routes",
  },
  {
    title: "Nutrition Program",
    description:
      "Learn how breakfast, snacks, and meal routines support students through the school day.",
    href: "/students-families#nutrition",
    label: "Meals",
  },
  {
    title: "Calendar",
    description:
      "See family nights, student showcases, professional learning days, and community dates.",
    href: "/calendar-events",
    label: "Dates",
  },
];

export const programs: CardItem[] = [
  {
    title: "Classroom Learning",
    description:
      "Reading, writing, math, inquiry, and classroom routines shaped around steady student growth.",
    href: "/programs-services#classroom-learning",
    image: "/images/okanese-building-close.jpg",
    label: "Okanese Learning Center building and school grounds",
  },
  {
    title: "Language and Culture",
    description:
      "Local language learning, cultural teaching, and community knowledge are treated as living parts of school life.",
    href: "/programs-services#language-culture",
    image: "/images/okanese-valley.jpg",
    label: "Okanese land and valley surrounding the school",
  },
  {
    title: "Student Support",
    description:
      "Students can access check-ins, learning support, wellness referrals, and clear communication between home and school.",
    href: "/programs-services#student-support",
    image: "/images/okanese-campus-close.jpg",
    label: "Okanese Learning Center campus and outdoor play areas",
  },
  {
    title: "Nutrition and Transportation",
    description:
      "Daily services help students arrive safely, settle in, eat well, and begin the day ready to learn.",
    href: "/programs-services#family-services",
    image: "/images/okanese-overhead.jpg",
    label: "Overhead view of Okanese Learning Center daily routines",
  },
];

export const announcements: CardItem[] = [
  {
    title: "Spring learning and family updates",
    description:
      "Classroom activities, permission forms, and family reminders are shared early so home and school can plan together.",
    meta: "Families",
    image: "/images/okanese-school-front.jpg",
  },
  {
    title: "Registration and school supply notes",
    description:
      "Families can check the office for registration support, student forms, and grade-level supply information.",
    meta: "Office",
    image: "/images/okanese-building-close.jpg",
  },
  {
    title: "Transportation and weather reminders",
    description:
      "When weather affects routes or school routines, the office shares updates through family contact channels.",
    meta: "Operations",
    image: "/images/okanese-landscape-road.jpg",
  },
];

export const events: CardItem[] = [
  {
    title: "Community breakfast",
    description:
      "Families are invited to start the morning together, visit with staff, and hear what students are working on.",
    meta: "May 8",
    image: "/images/okanese-campus-close.jpg",
  },
  {
    title: "Student showcase",
    description:
      "Students share classroom projects, creative work, and learning highlights with families and community members.",
    meta: "May 16",
    image: "/images/okanese-building-close.jpg",
  },
  {
    title: "Staff learning day",
    description:
      "No regular classes while staff focus on planning, student supports, and school improvement work.",
    meta: "May 20",
    image: "/images/okanese-valley.jpg",
  },
];

export const staff: StaffMember[] = [
  {
    name: "School Principal",
    role: "Principal",
    group: "Leadership",
    email: "office@okaneselearning.ca",
    image: "/images/okanese-learning-center-logo.png",
  },
  {
    name: "Office Team",
    role: "Attendance, records, and family communication",
    group: "Office",
    email: "office@okaneselearning.ca",
    image: "/images/okanese-first-nation-logo.png",
  },
  {
    name: "Classroom Teachers",
    role: "Instruction and classroom updates",
    group: "Teaching Staff",
    email: "teachers@okaneselearning.ca",
    image: "/images/okanese-building-close.jpg",
  },
  {
    name: "Student Support Team",
    role: "Wellness, learning support, and referrals",
    group: "Support Services",
    email: "support@okaneselearning.ca",
    image: "/images/okanese-campus-close.jpg",
  },
];

export const studentLife: StudentLifeItem[] = [
  {
    title: "Classrooms that feel calm and ready",
    description:
      "Predictable routines, clear expectations, and relationships help students ask for support and take pride in their work.",
    image: "/images/okanese-campus-close.jpg",
    label: "Okanese Learning Center campus and learning spaces",
  },
  {
    title: "Learning beyond the desk",
    description:
      "Outdoor learning, community visits, and school activities help students connect lessons to place, people, and responsibility.",
    image: "/images/okanese-valley.jpg",
    label: "Outdoor learning connected to the Okanese landscape",
  },
  {
    title: "A place families recognize",
    description:
      "The site is designed to make school feel familiar: real routines, real supports, and a clear path to the office.",
    image: "/images/okanese-school-front.jpg",
    label: "Okanese Learning Center school community place",
  },
];

export const communityValues: ValueItem[] = [
  {
    title: "Students are known by name",
    description:
      "A strong school day begins with relationships, belonging, and staff who notice the whole child.",
  },
  {
    title: "Culture is handled with care",
    description:
      "Language, land, and cultural learning are presented through respectful school and community voice.",
  },
  {
    title: "Families get clear next steps",
    description:
      "Every key page helps families know what to do, who to contact, and how school routines work.",
  },
];

export const footerLinks: NavItem[] = [
  { label: "FHQTC", href: "https://fhqtc.com/" },
  { label: "FHQTC Education", href: "https://fhqtc.com/programs-services/education/" },
  { label: "Office 365", href: "https://www.office.com/" },
  { label: "Contact OLC", href: "/contact" },
];
