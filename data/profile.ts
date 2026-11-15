/**
 * All website content lives in this one file.
 *
 * Everything below is SAMPLE content for a fictional person. Replace it with
 * your own details and swap the photos in /public/images.
 *
 * Privacy (NFR-008): this file ships to every visitor's browser. Only include
 * information you are happy to make public. Leave out home addresses, phone
 * numbers, ID numbers, dates of birth and anything about family members they
 * have not agreed to share. Family entries have an `approved` flag: entries
 * set to `false` are not rendered.
 */

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type IconName =
  | "camera"
  | "bike"
  | "map"
  | "gardening"
  | "mail"
  | "linkedin"
  | "github"
  | "globe"
  | "location";

export const profile = {
  meta: {
    title: "MD Rezwan Nabi",
    description:
      "MD Rezwan Nabi is a computer science student and frontend developer based in Dhaka. Education, career, family, interests and goals.",
    url: "https://example.com",
  },

  hero: {
    firstName: "MD Rezwan",
    lastName: "Nabi",
    greeting: "Hello, I'm",
    intro:
      "Currently studying Computer Science and Engineering, building my journey in software engineering, and exploring the world one trip at a time. Outside of coding, technology, I'm probably watching movies, web series, or planning my next adventure.",
    photo: {
      src: "/images/portrait.jpg",
      alt: "Portrait of MD Rezwan Nabi",
      width: 1200,
      height: 1500,
    } satisfies Photo,
  },

  about: {
    biography: [
      "I was born in Dhaka but my hometown is Comilla. As a Computer Science student, I enjoy developing creative solutions and building web applications. In the testing sector, I enjoy identifying errors, bugs, and other issues.",
      "Beyond technology, I enjoy traveling and experiencing different things. I'm also a movie and web series enthusiast who appreciates good storytelling. I believe in maintaining a balance between professional growth, personal interests, and exploring new opportunities.",
    ],
    facts: [
      { label: "Based in", value: "Dhaka, Bangladesh" },
      { label: "From", value: "Comilla" },
      { label: "Languages", value: "Bangla, English, Hindi" },
      { label: "Studying", value: "BSc in Computer Science & Engineering" },
      { label: "Working", value: "Frontend Developer, SQA Engineer" },
    ],
    personality:
      "Quiet in a crowd, talkative in a small room, and usually the one asking why.",
  },

  education: [
    {
      years: "2023 – 2027",
      qualification: "BSc in Computer Science & Engineering",
      institution: "North Point University, Dhaka",
      status: "Final year",
      current: true,
      note: "Thesis on accessible navigation patterns for low-bandwidth mobile web. CGPA 3.82 to date.",
    },
    {
      years: "2021 – 2023",
      qualification: "Higher Secondary Certificate, Science",
      institution: "Riverside College, Chattogram",
      status: "Completed",
      current: false,
      note: "GPA 5.00. Captain of the college debate team.",
    },
    {
      years: "2011 – 2021",
      qualification: "Secondary School Certificate, Science",
      institution: "Greenfield High School, Chattogram",
      status: "Completed",
      current: false,
      note: "GPA 5.00. First taught myself HTML in the school computer lab.",
    },
  ],

  career: {
    status:
      "I'm finishing my degree while working three days a week as a frontend intern. From mid-2027 I'm looking for a full-time role in design engineering.",
    experience: [
      {
        role: "Frontend Intern",
        organisation: "Lumen Studio",
        years: "2025 – present",
        summary:
          "Build marketing sites and client dashboards in Next.js. Led the accessibility pass that brought two client sites to WCAG AA.",
      },
      {
        role: "Teaching Assistant, Web Programming",
        organisation: "North Point University",
        years: "2024",
        summary:
          "Ran weekly lab sessions for 60 second-year students and rewrote the course's HTML and CSS exercises.",
      },
      {
        role: "Freelance Web Designer",
        organisation: "Self-employed",
        years: "2023 – 2024",
        summary:
          "Designed and built websites for a bakery, a tutoring centre and two local photographers.",
      },
    ],
    skills: [
      {
        group: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      },
      {
        group: "Design",
        items: ["Figma", "Typography", "Design systems", "Prototyping"],
      },
      {
        group: "Practice",
        items: ["Accessibility testing", "Responsive layout", "Git", "Technical writing"],
      },
    ],
    achievements: [
      "Winner, NPU inter-department hackathon, 2024",
      "Dean's list, 2023 and 2024",
      "Built a volunteer sign-up site used by more than 400 students",
    ],
    interests: ["Design engineering", "Accessibility", "Education technology"],
  },

  family: {
    introduction:
      "I grew up in a family of four in Chattogram, where dinner was the one hour of the day nobody was allowed near a phone. Most of what I know about patience, I learned at that table.",
    members: [
      {
        relation: "Father",
        title: "Civil engineer",
        description:
          "Has spent thirty years designing bridges and roads, and still sketches on every napkin he finds.",
        approved: true,
      },
      {
        relation: "Mother",
        title: "Mathematics teacher",
        description:
          "Teaches secondary-school maths and is the reason I check my work twice.",
        approved: true,
      },
      {
        relation: "Younger brother",
        title: "Class 10 student",
        description:
          "Plays chess competitively and beats me at it without looking up.",
        approved: true,
      },
    ],
  },

  interests: {
    hobbies: [
      { icon: "camera", title: "Photography", text: "Street and film photography on weekend walks." },
      { icon: "bike", title: "Cycling", text: "Early-morning rides before the city wakes up." },
      { icon: "map", title: "Travel", text: "Small towns over big cities, by train when I can." },
      { icon: "gardening", title: "Gardening", text: "Growing herbs and caring for plants at home." },
    ] satisfies { icon: IconName; title: string; text: string }[],
    values: [
      { title: "Curiosity", text: "Ask the question, even when it sounds obvious." },
      { title: "Honesty", text: "Say what I think, kindly, and admit what I don't know." },
      { title: "Patience", text: "Good work and good relationships both take time." },
      { title: "Care", text: "Build things the way I'd want them built for my family." },
    ],
    lifestyle: ["Early mornings", "Long walks", "Tea over coffee", "One screen-free day a week"],
  },

  goals: {
    personal: [
      "Learn to speak Japanese well enough to travel without a phrasebook",
      "Cycle the length of the Cox's Bazar marine drive",
      "Publish a small book of my film photographs",
    ],
    professional: [
      "Join a product team as a full-time design engineer",
      "Contribute regularly to an open-source design system",
      "Mentor students who are new to frontend development",
    ],
    horizons: [
      { when: "Within a year", goal: "Graduate and start a full-time design engineering role." },
      { when: "In five years", goal: "Lead frontend and accessibility work on a product used across Bangladesh." },
      { when: "Long term", goal: "Help start a design and technology school for students outside the capital." },
    ],
  },

  gallery: [
    { src: "/images/gallery-1.jpg", alt: "Coastline at dusk with low clouds", width: 1200, height: 1500, caption: "Patenga beach, the evening before I left for university." },
    { src: "/images/gallery-2.jpg", alt: "Rows of hills fading into mist", width: 1500, height: 1000, caption: "Morning fog in Sreemangal tea gardens." },
    { src: "/images/gallery-3.jpg", alt: "A desk by a window with a laptop and notebook", width: 1200, height: 1200, caption: "My desk, where most of this site was built." },
    { src: "/images/gallery-4.jpg", alt: "Low sun over a wide river", width: 1500, height: 1000, caption: "Sunset over the Karnaphuli river." },
    { src: "/images/gallery-5.jpg", alt: "A tall arched doorway in an old building", width: 1200, height: 1600, caption: "Old Dhaka, photographed on film." },
    { src: "/images/gallery-6.jpg", alt: "Family dinner table seen from above", width: 1500, height: 1100, caption: "Eid dinner at home in Chattogram." },
  ] satisfies Photo[],

  contact: {
    closing:
      "Thank you for reading this far. If you'd like to work together, talk about accessibility or recommend a good book, I'd love to hear from you.",
    links: [
      { icon: "mail", label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
      { icon: "linkedin", label: "LinkedIn", value: "linkedin.com/in/your-handle", href: "https://www.linkedin.com/in/your-handle" },
      { icon: "github", label: "GitHub", value: "github.com/your-handle", href: "https://github.com/your-handle" },
      { icon: "location", label: "Location", value: "Dhaka, Bangladesh" },
    ] satisfies { icon: IconName; label: string; value: string; href?: string }[],
  },
};

export const sections = [
  { id: "about", number: "01", label: "About" },
  { id: "education", number: "02", label: "Education" },
  { id: "career", number: "03", label: "Career" },
  { id: "family", number: "04", label: "Family" },
  { id: "interests", number: "05", label: "Interests" },
  { id: "goals", number: "06", label: "Goals" },
  { id: "gallery", number: "07", label: "Gallery" },
  { id: "contact", number: "08", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
