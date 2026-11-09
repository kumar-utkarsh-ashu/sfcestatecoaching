export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  organization?: string;
  location?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables?: string[];
}

export const SITE_INFO = {
  name: "SFC Estate Coaching",
  legalName: "SFC Estate Coaching LLC",
  tagline: "Creating Legacies One Family at a Time",
  mission:
    "Creating lasting financial resources for Non-Profit organizations by Educating their Donors about Charitable opportunities and options within their Estate Plan.",
  coreValues: [
    "Honesty",
    "Confidentiality",
    "Empathy",
    "Integrity",
    "Encouragement"
  ],
  phone: "414-885-4587",
  phoneFormatted: "(414) 885-4587",
  email: "info@sfcestatecoaching.com",
  address: "PO Box 63",
  cityStateZip: "Thiensville WI 53092",
  bookingUrl: "https://letsmeet.io/sfcestatecoaching/estate-planningcoaching",
  stats: {
    estatePlans: "500+",
    organizationsHelped: "50+",
    plannedGiftsMillion: "$100M+"
  }
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Help for Individuals", href: "/help-for-individuals" },
  { label: "Help for Organizations", href: "/help-for-organizations" },
  { label: "SFC Difference", href: "/sfc-difference" },
  { label: "About Us", href: "/about-sfc-estate" },
  { label: "Owner & CEO", href: "/team" },
  { label: "Reviews", href: "/testimonials" },
  { label: "Contact Us", href: "/contact-us" }
];

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Help for Individuals", href: "/help-for-individuals" },
  { label: "Help for Organizations", href: "/help-for-organizations" },
  { label: "SFC Difference", href: "/sfc-difference" },
  { label: "About SFC Estate Coaching", href: "/about-sfc-estate" },
  { label: "Owner & CEO", href: "/team" },
  { label: "Estate Planning Reviews", href: "/testimonials" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "COVID-19 Response", href: "/covid-19-pandemic" },
  { label: "Privacy Policy & ADA", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-and-conditions" },
  { label: "Sitemap", href: "/sitemap" }
];

export const INDIVIDUAL_PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Step 1",
    subtitle: "Data Gathering - Disclosure",
    description:
      "The first appointment will be to gather all the necessary information to create the Personal Plan. We will gather Family Information, Professional Advisors Information, Providing for Children, Power of Attorneys, Gift Planning Information and Financial Information.",
    deliverables: [
      "Family Information",
      "Professional Advisors Information",
      "Providing for Children",
      "Power of Attorneys",
      "Gift Planning Information",
      "Financial Information"
    ]
  },
  {
    step: 2,
    title: "Step 2",
    subtitle: "Plan Presentation - The Personal Estate Plan",
    description:
      "In the second meeting we review with you the Personal Estate Plan our team produced from the information you gave us in the first meeting. Our goal is to ensure you feel comfortable with the plan we suggest and answer any questions you have.",
    deliverables: [
      "Review Personalized Estate Plan",
      "Clarify and answer any remaining questions",
      "Provide summary to take to your attorney",
      "Achieve full Attorney Ready status"
    ]
  }
];

export const INSTITUTIONAL_PARTNER_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Initial Consultation",
    subtitle: "Fit and Alignment",
    description:
      "First, we come to you to discuss if Estate Planning is a good fit for you and your non-profit organization or church community."
  },
  {
    step: 2,
    title: "Strategy & Plan Setup",
    subtitle: "20x Investment Guarantee",
    description:
      "Second, we setup a plan of how many estate plans we will do and during what time frame. We guarantee you will get at least 20 times your investment promised back to you from the estates we plan for you."
  },
  {
    step: 3,
    title: "Supporter Outreach",
    subtitle: "No-Cost Gift to Donors",
    description:
      "Third, you communicate with your current supporters and fans the opportunity to get personalized estate planning at no cost to them."
  },
  {
    step: 4,
    title: "Coaching Sessions",
    subtitle: "Confidential Appointments",
    description:
      "Fourth, we schedule individual times with each person or couple. There are normally two face-to-face appointments (or virtual video conference) along with follow-up communication over 2-3 months."
  },
  {
    step: 5,
    title: "Voluntary Gift Reporting",
    subtitle: "Donor Choice",
    description:
      "Fifth, individuals can voluntarily elect to share with you how much they intend to gift to you as part of their estate. We share grouped metrics with you when planning is complete."
  },
  {
    step: 6,
    title: "Legal Codification",
    subtitle: "Attorney Ready",
    description:
      "Sixth, the individuals or couples take their complete plan and codify it into a legally binding will or trust with their legal counsel."
  },
  {
    step: 7,
    title: "Endowment Growth",
    subtitle: "Generational Impact",
    description:
      "Seventh, your organization achieves lasting financial resources, securing planned legacy gifts that fund your mission for decades."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "ken-jill",
    quote:
      "While Estate planning is not the most exciting thing to think about and one of those things you keep putting off, it is so extremely important to complete. My wife and I knew we needed to do it but just kept putting it off. Working with Craig made the process enjoyable and easy. The way that he walked us through each of the steps was great. Thanks Craig for leading us through the process. I recommend Craig to anyone who asks me about how we went about completing our estate plan.",
    author: "Ken & Jill Gaschk"
  },
  {
    id: "lee-galien",
    quote:
      "It has been a pleasure to work with Craig Mellendorf through this estate planning process. He is polite, on time with all appointments, and very knowledgeable. I thought this would be a complicated process, but Craig made it very simple. I feel blessed to have had this opportunity and to be able to have peace of mind, knowing that I can leave a legacy behind to the people and organizations that have given me so much in this life. I would highly recommend Craig and the estate planning process to anyone.",
    author: "Lee Galien",
    location: "Milwaukee"
  },
  {
    id: "cl-whiteside",
    quote:
      "Craig has been a pleasure to work with, not only because of his knowledge but also because he makes sure the information and suggestions he gives are best for YOU and your situation. 'One glove fits all' is not his approach. I appreciate him taking the time out to get to know me as a person. The will and estate planning has been smooth and enjoyable and that is because of Craig's approach and care.",
    author: "C.L. Whiteside",
    role: "Assistant Principal",
    organization: "Wisconsin Lutheran High School"
  },
  {
    id: "sherry-mccombe",
    quote:
      "I must say we were very pleased with the work Craig did to get us to this point in our planning and think this is an amazing service you are offering to the Faith community. Thank you for making this available.",
    author: "Sherry McCombe",
    location: "Nevada"
  },
  {
    id: "andrew-locke",
    quote:
      "I have known Craig for over 30 years and have benefited from his friendship, his wisdom and his expertise. On a professional level, Craig has worked with donors, faculty and staff. At his core, he is a teacher and coach. His process of getting a client 'attorney ready' has been a valued service we provide. And he is excellent at keeping people motivated to finish the process. On a personal level, Jenni and I went through his estate coaching process and found it valuable as we needed to make some changes to our own estate plan.",
    author: "Andrew G. Locke",
    organization: "Lutheran High School Association of Greater Milwaukee"
  },
  {
    id: "chris-root",
    quote:
      "Working with Craig has been a wonderful experience. Estate planning is not something most look forward to taking care of but Craig helps keep it simple and painless. The program has helped my wife and I feel secure in what we are leaving behind for our children and charity. Craig taught us many new things that we were not aware of in order to better serve our children and charity's with the gifts that God has bestowed upon us. I would highly recommend Craig to anyone that has not completed their estate planning or is looking to update their estate plan.",
    author: "Chris Root",
    role: "Advancement",
    organization: "The Lutheran High School Association of Greater Milwaukee"
  },
  {
    id: "bruce-sally-flunker",
    quote:
      "My name is Bruce Flunker and I am Co-Owner of a company that has approximately 80 employees around the United States. My wife Sally and I were looking to update our will that is 15 years old. We were presented with the opportunity to use SFC Estate Coaching through Christ Church in Mequon WI. We were not sure that this service would meet our needs but since it was free to the members of the congregation we decided to go through the process. We were extremely happy with the results. Craig did an excellent job of explaining the different options and opportunities that we had to reduce our taxes and still give generously to our children and the charities that are important to us all the while creating the will/trust that was perfect for us. We felt after the two appointments that we were 'Attorney Ready' and have since completed our trust through an Attorney and are very satisfied that we went through the process with Craig. Sally and I would highly recommend anyone who does not have a will or have a will that is over five years old to go through the process with Craig.",
    author: "Bruce & Sally Flunker",
    location: "Mequon, Wisconsin"
  },
  {
    id: "derek-angela-fischer",
    quote:
      "Derek and I enjoyed getting to know Craig. He is very approachable and easy to work with. He is knowledgeable and answered all of our questions. We feel good about the Will we put into place and making sure our family is well taken care of. Thank you!",
    author: "Derek and Angela Fischer",
    role: "High School Teacher"
  }
];

export const DIFFERENCE_POINTS = [
  {
    title: "We have no hidden agenda",
    description:
      "We like to help people and non-profits out and we have found walking people through their estate plans a very rewarding job."
  },
  {
    title: "We are a 3rd party independent guide",
    description:
      "Some gift planners work directly for the organization offering the gift planning and they may (intentionally or unintentionally) pressure you to give to their employer. As an objective 3rd party, donors can feel open to honestly discuss their giving which gives the donor an enjoyable estate planning process without pressure. Furthermore, people are more likely to give to a sponsoring agency when not pressured."
  },
  {
    title: "We have unlimited resources and flexibility",
    description:
      "As an independent company working with many organizations, we have the ability to scale our resources quickly to match what is currently needed while balancing work between different organizations."
  },
  {
    title: "We work with anyone regardless of age, income or estate value",
    description:
      "There are no 'minimum requirements' with us. Whether you are 18 or 81, wealthy or just getting by, everyone deserves a personalized plan."
  },
  {
    title: "We make suggestions and not recommendations",
    description:
      "Think of us as a wise advisor, not a strong arm who is going to tell you what you need to do. You stay in 100% control of your estate and legacy."
  }
];

export const FAQS_DATA = [
  {
    question: "What is Estate Planning?",
    answer:
      "Estate Planning is simply writing down answers to important decisions regarding end-of-life issues. It normally includes preparing a will and covers what happens to your estate, gift planning, guardianship desires if you are currently a parent or guardian of minors, and other important decisions. When you are done, you will have all the information together for the decisions you have made in one place ready to be finalized by a lawyer into legally binding documents."
  },
  {
    question: "How Does the Estate Planning Process Work?",
    answer:
      "Every donor will go through a two-step process to become attorney ready. You will still want to meet with an attorney to finalize your will and estate plan (and we can recommend one for you too). We have two appointments with you that will be approximately 60-90 minutes in length. It is important to note that each meeting will be completely confidential. We will also make any necessary follow up phone calls or emails to ensure you are ready for each step of the way."
  },
  {
    question: "Why is the service completely free for donors?",
    answer:
      "We get paid by sponsoring agencies (normally the nonprofit foundation or church who told you about this opportunity). We have nothing to buy or sell; our sole focus is guiding you through the estate plan. Sponsoring agencies hire us because most people like to support nonprofits during their lifetime, but never make a will. This service is a gift from the organization to thank donors."
  },
  {
    question: "Is my personal and financial information kept confidential?",
    answer:
      "Yes, completely. The information gathered and presented is kept strictly confidential between your Estate Coach and you. Potential gifts will only be shared with the organization if the donor explicitly signs a Permission Form desiring to share that decision."
  },
  {
    question: "What is the 20x Guarantee for Organizations?",
    answer:
      "We are so sure estate planning works, we guarantee your non-profit or foundation will get at least 20 times your investment promised back to you from the estates we plan for your supporters. In practice, 50 times or more of the investment is commonly promised in the completed estate plans."
  }
];

