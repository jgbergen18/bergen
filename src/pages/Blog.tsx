import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Header from '../components/Header';
import BookCover from '../components/BookCover';
import { usePageMeta } from '../lib/usePageTitle';

// NYC Temperature data for color scaling
const temperatureData: Record<string, number> = {
  "January 2024": 37.0,
  "February 2024": 40.1,
  "March 2024": 48.1,
  "April 2024": 55.6,
  "May 2024": 65.0,
  "June 2024": 75.1,
  "July 2024": 79.6,
  "August 2024": 75.1,
  "September 2024": 68.8,
  "October 2024": 60.9,
  "November 2024": 51.4,
  "December 2024": 38.2,
  "January 2026": 36.1,
  "February 2026": 37.6,
  "March 2026": 55.1,
  "April 2026": 64.4,
  "May 2026": 71.5,
  "June 2026": 81.4,
  "July 2026": 83.7,
  "August 2026": 82.6,
  "September 2026": 74.4,
  "October 2026": 66.3,
  "November 2026": 60.4,
  "January 2025": 31.2,
  "February 2025": 35.0,
  "March 2025": 46.9,
  "April 2025": 55.3,
  "May 2025": 62.3,
  "June 2025": 73.8,
  "July 2025": 78.6,
  "August 2025": 73.8,
  "September 2025": 73.8,
  "October 2025": 58.5,
  "November 2025": 47.6,
  "December 2025": 34.22
};

/** Which step of the diverging cool-to-warm ramp a month sits on (0 = coldest). */
const tempStep = (temp: number) => {
  if (temp <= 35) return 0;
  if (temp <= 40) return 1;
  if (temp <= 50) return 2;
  if (temp <= 60) return 3;
  if (temp <= 70) return 4;
  if (temp <= 75) return 5;
  if (temp <= 80) return 6;
  return 7;
};

const readingLogData = [{
  month: "November 2026",
  books: [{
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "The Well of Ascension",
    author: "Brandon Sanderson",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "The Hero of Ages",
    author: "Brandon Sanderson",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Hollywood Ending",
    author: "John Green",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "As You Wake, Break the Shell",
    author: "Becky Chambers",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Tress of the Emerald Sea",
    author: "Brandon Sanderson",
    review: "",
    rating: 3,
    coverUrl: ""
  }]
}, {
  month: "September 2026",
  books: [{
    title: "The Butcher's Masquerade",
    author: "Matt Dinniman",
    review: "",
    coverUrl: ""
  }, {
    title: "The Eye of the Bedlam Bride",
    author: "Matt Dinniman",
    review: "",
    coverUrl: ""
  }, {
    title: "This Inevitable Ruin",
    author: "Matt Dinniman",
    review: "",
    coverUrl: ""
  }]
}, {
  month: "August 2026",
  books: [{
    title: "The Da Vinci Code",
    author: "Dan Brown",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Angel Down",
    author: "Daniel Kraus",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Everything I Know About Love",
    author: "Dolly Alderton",
    review: "",
    rating: 2,
    coverUrl: ""
  }, {
    title: "The Dungeon Anarchist's Cookbook",
    author: "Matt Dinniman",
    review: "",
    coverUrl: ""
  }, {
    title: "The Gate of the Feral Gods",
    author: "Matt Dinniman",
    review: "",
    coverUrl: ""
  }]
}, {
  month: "July 2026",
  books: [{
    title: "The Bell Jar",
    author: "Sylvia Plath",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Dungeon Crawler Carl",
    author: "Matt Dinniman",
    review: "",
    coverUrl: ""
  }, {
    title: "Carl's Doomsday Scenario",
    author: "Matt Dinniman",
    review: "",
    coverUrl: ""
  }]
}, {
  month: "June 2026",
  books: [{
    title: "My Friends",
    author: "Fredrik Backman",
    review: "",
    coverUrl: ""
  }, {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    review: "",
    coverUrl: ""
  }, {
    title: "The Correspondent",
    author: "Virginia Evans",
    review: "",
    coverUrl: ""
  }]
}, {
  month: "May 2026",
  books: [{
    title: "Great Expectations",
    author: "Charles Dickens",
    review: "",
    coverUrl: ""
  }]
}, {
  month: "April 2026",
  books: [{
    title: "Butter",
    author: "Asako Yuzuki",
    review: "",
    coverUrl: ""
  }, {
    title: "The Name of the Rose",
    author: "Umberto Eco",
    review: "",
    coverUrl: ""
  }, {
    title: "Red Rising",
    author: "Pierce Brown",
    review: "",
    coverUrl: ""
  }, {
    title: "Old Man's War",
    author: "John Scalzi",
    review: "",
    coverUrl: ""
  }]
}, {
  month: "March 2026",
  books: [{
    title: "Table for Two",
    author: "Amor Towles",
    review: "",
    coverUrl: ""
  }, {
    title: "A Gentleman in Moscow",
    author: "Amor Towles",
    review: "",
    coverUrl: ""
  }, {
    title: "What Kind of Paradise",
    author: "Janelle Brown",
    review: "",
    coverUrl: ""
  }, {
    title: "Atmosphere",
    author: "Taylor Jenkins Reid",
    review: "",
    coverUrl: ""
  }]
}, {
  month: "February 2026",
  books: [{
    title: "The Value of Everything",
    author: "Mariana Mazzucato",
    review: "",
    coverUrl: ""
  }, {
    title: "House of Earth and Blood",
    author: "Sarah J. Maas",
    review: "",
    coverUrl: ""
  }]
}, {
  month: "January 2026",
  books: [{
    title: "Hard-Boiled and Hard Luck",
    author: "Banana Yoshimoto",
    review: "",
    coverUrl: ""
  }, {
    title: "Swordheart",
    author: "T. Kingfisher",
    review: "",
    coverUrl: ""
  }, {
    title: "House of Day, House of Night",
    author: "Olga Tokarczuk",
    review: "",
    coverUrl: ""
  }]
}, {
  month: "December 2025",
  books: [{
    title: "Haroun and the Sea of Stories",
    author: "Salman Rushdie",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Wintering: The Power of Rest and Retreat in Difficult Times",
    author: "Katherine May",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "The Vegetarian",
    author: "Han Kang",
    review: "",
    rating: 5,
    coverUrl: ""
  }]
}, {
  month: "November 2025",
  books: [{
    title: "All the Way to the River",
    author: "Elizabeth Gilbert",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Hamnet",
    author: "Maggie O'Farrell",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Katabasis",
    author: "R.F. Kuang",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "The Light Eaters: How the Unseen World of Plant Intelligence Offers a New Understanding of Life on Earth",
    author: "Zoë Schlanger",
    review: "",
    rating: 3,
    coverUrl: ""
  }]
}, {
  month: "October 2025",
  books: [{
    title: "Of Monsters and Mainframes",
    author: "Barbara Truelove",
    review: "",
    rating: 2,
    coverUrl: ""
  }, {
    title: "Yours Truly",
    author: "Abby Jimenez",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "The Bewitching",
    author: "Silvia Moreno-Garcia",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Four Thousand Weeks: Time Management for Mortals",
    author: "Oliver Burkeman",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Careless People: A Cautionary Tale of Power, Greed, and Lost Idealism",
    author: "Sarah Wynn-Williams",
    review: "",
    rating: 3,
    coverUrl: ""
  }]
}, {
  month: "September 2025",
  books: [{
    title: "Part of Your World",
    author: "Abby Jimenez",
    review: "",
    rating: 2,
    coverUrl: ""
  }, {
    title: "Trust",
    author: "Hernan Diaz",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "The Lilac People",
    author: "Milo Todd",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "I Have Some Questions for You",
    author: "Rebecca Makkai",
    review: "",
    rating: 2,
    coverUrl: ""
  }, {
    title: "The Names",
    author: "Florence Knapp",
    review: "",
    rating: 4,
    coverUrl: ""
  }]
}, {
  month: "August 2025",
  books: [{
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Iron Flame",
    author: "Rebecca Yarros",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Onyx Storm",
    author: "Rebecca Yarros",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "The Longing for Less: Living with Minimalism",
    author: "Kyle Chayka",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Goodbye, Things: The New Japanese Minimalism",
    author: "Fumio Sasaki",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Stop Me If You've Heard This One",
    author: "Kristen Arnett",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Stag Dance",
    author: "Torrey Peters",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Annihilation",
    author: "Jeff VanderMeer",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "The Art of Frugal Hedonism: A Guide to Spending Less While Enjoying Everything",
    author: "Annie Raser-Rowland",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Just for the Summer",
    author: "Abby Jimenez",
    review: "",
    rating: 4,
    coverUrl: ""
  }]
}, {
  month: "July 2025",
  books: [{
    title: "Station Eleven",
    author: "Emily St. John Mandel",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Small Things Like These",
    author: "Claire Keegan",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Dune",
    author: "Frank Herbert",
    review: "",
    rating: 5,
    coverUrl: ""
  }]
}, {
  month: "June 2025",
  books: [{
    title: "The Ministry of Time",
    author: "Kaliane Bradley",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "North Woods",
    author: "Daniel Mason",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "We Could Be Rats",
    author: "Emily R. Austin",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "The Haunting of Hill House",
    author: "Shirley Jackson",
    review: "",
    rating: 5,
    coverUrl: ""
  }]
}, {
  month: "May 2025",
  books: [{
    title: "Crown of Midnight",
    author: "Sarah J. Maas",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Throne of Glass",
    author: "Sarah J. Maas",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Yumi and the Nightmare Painter",
    author: "Brandon Sanderson",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Abundance",
    author: "Ezra Klein",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "The Myth of Normal: Trauma, Illness, and Healing in a Toxic Culture",
    author: "Gabor Maté",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Heir of Fire",
    author: "Sarah J. Maas",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Strange Pictures",
    author: "Uketsu",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "How High We Go in the Dark",
    author: "Sequoia Nagamatsu",
    review: "",
    rating: 5,
    coverUrl: ""
  }]
}, {
  month: "April 2025",
  books: [{
    title: "The God of the Woods",
    author: "Liz Moore",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Do Hard Things: Why We Get Resilience Wrong and the Surprising Science of Real Toughness",
    author: "Steve Magness",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Sunrise on the Reaping",
    author: "Suzanne Collins",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Everything Is Tuberculosis: The History and Persistence of Our Deadliest Infection",
    author: "John Green",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Days at the Morisaki Bookshop",
    author: "Satoshi Yagisawa",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "The Four Winds",
    author: "Kristin Hannah",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "1984",
    author: "George Orwell",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "The Wedding People",
    author: "Alison Espach",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Language City: The Fight to Preserve Endangered Mother Tongues in New York",
    author: "Ross Perlin",
    review: "",
    rating: 5,
    coverUrl: ""
  }]
}, {
  month: "March 2025",
  books: [{
    title: "Yerba Buena",
    author: "Nina LaCour",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "James",
    author: "Percival Everett",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Stolen Focus: Why You Can't Pay Attention— and How to Think Deeply Again",
    author: "Johann Hari",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Digital Minimalism: Choosing a Focused Life in a Noisy World",
    author: "Cal Newport",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "The Wild Robot",
    author: "Peter Brown",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "The Tattooist of Auschwitz",
    author: "Heather Morris",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Orbital",
    author: "Samantha Harvey",
    review: "",
    rating: 5,
    coverUrl: ""
  }]
}, {
  month: "February 2025",
  books: [{
    title: "Crook Manifesto",
    author: "Colson Whitehead",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Run: Book One",
    author: "John Lewis",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Good Dirt",
    author: "Charmaine Wilkerson",
    review: "",
    rating: 2,
    coverUrl: ""
  }, {
    title: "The Well of Ascension",
    author: "Brandon Sanderson",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "The Hero of Ages",
    author: "Brandon Sanderson",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Martyr!",
    author: "Kaveh Akbar",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Framed: Astonishing True Stories of Wrongful Convictions",
    author: "John Grisham",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Predictably Irrational: The Hidden Forces That Shape Our Decisions",
    author: "Dan Ariely",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "I Heard Her Call My Name: A Memoir of Transition",
    author: "Lucy Sante",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Memory Piece",
    author: "Lisa Ko",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Queer Data: Using Gender, Sex and Sexuality Data for Action",
    author: "Kevin Guyan",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "ADD-Friendly Ways to Organize Your Life",
    author: "Judith Kolberg",
    review: "",
    rating: 2,
    coverUrl: ""
  }, {
    title: "The Year of Magical Thinking",
    author: "Joan Didion",
    review: "",
    rating: 4,
    coverUrl: ""
  }]
}, {
  month: "January 2025",
  books: [{
    title: "The Dutch House",
    author: "Ann Patchett",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Someone Like Us",
    author: "Dinaw Mengestu",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Hillbilly Elegy: A Memoir of a Family and Culture in Crisis",
    author: "J.D. Vance",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Divine Rivals",
    author: "Rebecca Ross",
    review: "",
    rating: 2,
    coverUrl: ""
  }, {
    title: "The Wager: A Tale of Shipwreck, Mutiny and Murder",
    author: "David Grann",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "The Backyard Bird Chronicles",
    author: "Amy Tan",
    review: "",
    rating: 2,
    coverUrl: ""
  }, {
    title: "Revenge of the Tipping Point: Overstories, Superspreaders, and the Rise of Social Engineering",
    author: "Malcolm Gladwell",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "The Underground Railroad",
    author: "Colson Whitehead",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "The Message",
    author: "Ta-Nehisi Coates",
    review: "",
    rating: 3,
    coverUrl: ""
  }]
}, {
  month: "December 2024",
  books: [{
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Daisy Jones & The Six",
    author: "Taylor Jenkins Reid",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Beautiful World, Where Are You",
    author: "Sally Rooney",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Her Body and Other Parties: Stories",
    author: "Carmen Maria Machado",
    review: "",
    rating: 2,
    coverUrl: ""
  }, {
    title: "I Cheerfully Refuse",
    author: "Leif Enger",
    review: "",
    rating: 2,
    coverUrl: ""
  }, {
    title: "Dopamine Nation: Finding Balance in the Age of Indulgence",
    author: "Anna Lembke",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "You Dreamed of Empires",
    author: "Álvaro Enrigue",
    review: "",
    rating: 4,
    coverUrl: ""
  }]
}, {
  month: "November 2024",
  books: [{
    title: "Being Mortal: Medicine and What Matters in the End",
    author: "Atul Gawande",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "The Raven Boys",
    author: "Maggie Stiefvater",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Atomic Accidents: A History of Nuclear Meltdowns and Disasters: From the Ozark Mountains to Fukushima",
    author: "James Mahaffey",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Long Island Compromise",
    author: "Taffy Brodesser-Akner",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Why We Sleep: Unlocking the Power of Sleep and Dreams",
    author: "Matthew Walker",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Normal People",
    author: "Sally Rooney",
    review: "",
    rating: 4,
    coverUrl: ""
  }]
}, {
  month: "September 2024",
  books: [{
    title: "Let the Record Show: A Political History of ACT UP New York, 1987-1993",
    author: "Sarah Schulman",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Black Friend: Essays",
    author: "Ziwe",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Somewhere Beyond the Sea",
    author: "T.J. Klune",
    review: "",
    rating: 4,
    coverUrl: ""
  }]
}, {
  month: "August 2024",
  books: [{
    title: "Burn",
    author: "Peter Heller",
    review: "This book felt like it was trying to be edgy hard to dramatize politics without following through on some of its most compelling ideas around a US state secession.",
    rating: 2,
    coverUrl: ""
  }, {
    title: "He Who Drowned the World",
    author: "Shelley Parker-Chan",
    review: "An excellent sequel to She Who Became the Sun, however at times it felt like it was trying to hit you on the head with metaphors that the reader can understand the first time.",
    rating: 4,
    coverUrl: ""
  }, {
    title: "The Financial Diet",
    author: "Chelsea Fagan",
    review: "This beginner book on personal finance might be better for high school students but feels too simple to be marketed towards people in their early 20s.",
    rating: 2,
    coverUrl: ""
  }, {
    title: "Your Money or Your Life",
    author: "Joe Dominguez",
    review: "This book was convincing and practical in its advice for personal finance, but was repetitive at times.",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Worry",
    author: "Alexandra Tanner",
    review: "This was an interesting read and there were points that reminded me of my Jewish family, but it also felt like it was trying to take that to a too quirky level that sometimes lost me as a reader.",
    rating: 3,
    coverUrl: ""
  }, {
    title: "My Year of Rest and Relaxation",
    author: "Ottessa Moshfegh",
    review: "This was well written but felt like it heavily romanticized depression rather than depicting the difficulties and often tragedy of it.",
    rating: 2,
    coverUrl: ""
  }, {
    title: "How We Named the Stars",
    author: "Andrés N. Ordorica",
    review: "This book was such a sweet heartfelt queer love story, and then I had to keep trying not to cry for the last 100 pages.",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Interesting Facts about Space",
    author: "Emily R. Austin",
    review: "The strangeness of the main character and this book made me feel both understood and upset in a weirdly good way.",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Secret City: The Hidden History of Gay Washington",
    author: "James Kirchick",
    review: "This book was an incredibly comprehensive look at queer life in the capital, everyone involved in politics should read it.",
    rating: 5,
    coverUrl: ""
  }, {
    title: "The Wealth of Shadows",
    author: "Graham Moore",
    review: "Graham Moore has done it again! He continues to be my favorite author writing incredible historical fiction.",
    rating: 5,
    coverUrl: ""
  }]
}, {
  month: "July 2024",
  books: [{
    title: "A Court of Silver Flames",
    author: "Sarah J. Maas",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "A Court of Frost and Starlight",
    author: "Sarah J. Maas",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Interview with the Vampire",
    author: "Anne Rice",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "The Poppy War",
    author: "R.F. Kuang",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "On Tyranny: Twenty Lessons from the Twentieth Century",
    author: "Timothy Snyder",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Yellowface",
    author: "R.F. Kuang",
    review: "",
    rating: 2,
    coverUrl: ""
  }]
}, {
  month: "June 2024",
  books: [{
    title: "Demon Copperhead",
    author: "Barbara Kingsolver",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "A Court of Wings and Ruin",
    author: "Sarah J. Maas",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Better Living Through Birding: Notes from a Black Man in the Natural World",
    author: "Christian Cooper",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "In the Lives of Puppets",
    author: "T.J. Klune",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Paul Takes the Form of a Mortal Girl",
    author: "Andrea Lawlor",
    review: "",
    rating: 4,
    coverUrl: ""
  }]
}, {
  month: "May 2024",
  books: [{
    title: "The Nickel Boys",
    author: "Colson Whitehead",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Remarkably Bright Creatures",
    author: "Shelby Van Pelt",
    review: "Very fun",
    rating: 4,
    coverUrl: ""
  }, {
    title: "After Sappho",
    author: "Selby Wynn Schwartz",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Poor Things",
    author: "Alasdair Gray",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Humankind: A Hopeful History",
    author: "Rutger Bregman",
    review: "While there was definitely some bias/oversimplification of some social issues in this book, I think everyone could benefit from reading it.",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Tender Is the Flesh",
    author: "Agustina Bazterrica",
    review: "I really wanted to like this book but it felt too much like it was motivated by veganism rather than its own premise/plot.",
    rating: 2,
    coverUrl: ""
  }, {
    title: "The Dead Take the A Train",
    author: "Cassandra Khaw",
    review: "This was a surprisingly fun monster hunter read, with a great sense of humor.",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Utopia for Realists: How We Can Build the Ideal World",
    author: "Rutger Bregman",
    review: "",
    rating: 3,
    coverUrl: ""
  }]
}, {
  month: "April 2024",
  books: [{
    title: "A Court of Mist and Fury",
    author: "Sarah J. Maas",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "March: Book Two",
    author: "John Lewis",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "How Not to Diet",
    author: "Michael Greger",
    review: "",
    rating: 2,
    coverUrl: ""
  }, {
    title: "A Little Life",
    author: "Hanya Yanagihara",
    review: "This book was difficult to read at times but worth the effort, also trigger warning for anything you can think of.",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Gathering Moss: A Natural and Cultural History of Mosses",
    author: "Robin Wall Kimmerer",
    review: "I enjoyed this book more than I expected.",
    rating: 4,
    coverUrl: ""
  }]
}, {
  month: "March 2024",
  books: [{
    title: "Deacon King Kong",
    author: "James McBride",
    review: "Deacon King Kong by James McBride is a vibrant, character-rich novel set in 1969 Brooklyn, praised for its humor and humanity, but its complex structure lost me at times.",
    rating: 4,
    coverUrl: ""
  }, {
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "When the Angels Left the Old Country",
    author: "Sacha Lamb",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Anita de Monte Laughs Last",
    author: "Xóchitl González",
    review: "",
    rating: 5,
    coverUrl: ""
  }, {
    title: "It's Lonely at the Centre of the Earth",
    author: "Zoe Thorogood",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Ducks: Two Years in the Oil Sands",
    author: "Kate Beaton",
    review: "It is a remarkable narrative that brings to life the seldom-explored intersection of wildlife and female labor in the oil industry, shedding light on the resilience of nature and the author herself amidst the stark landscapes of industrial progress.",
    rating: 5,
    coverUrl: ""
  }, {
    title: "How Not to Die: Discover the Foods Scientifically Proven to Prevent and Reverse Disease",
    author: "Michael Greger",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Gone Girl",
    author: "Gillian Flynn",
    review: "I just couldn't buy into the angst, she was too hard for me to root for in this book.",
    rating: 2,
    coverUrl: ""
  }, {
    title: "In Limbo",
    author: "Deb J.J. Lee",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Sharp Objects",
    author: "Gillian Flynn",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "March: Book One",
    author: "John Lewis",
    review: "",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Blink: The Power of Thinking Without Thinking",
    author: "Malcolm Gladwell",
    review: "",
    rating: 3,
    coverUrl: ""
  }, {
    title: "The Tipping Point: How Little Things Can Make a Big Difference",
    author: "Malcolm Gladwell",
    review: "",
    rating: 4,
    coverUrl: ""
  }]
}, {
  month: "February 2024",
  books: [{
    title: "The Happiness Project",
    author: "Gretchen Rubin",
    review: "The author focuses too much on perfectionism, little truisms, and is way too repetitive",
    rating: 1,
    coverUrl: ""
  }, {
    title: "The Pull of the Stars",
    author: "Emma Donoghue",
    review: "Incredible book for anyone interested in the role of women in medical history as well as Ireland just after WW1, all wrapped up with a wonderfully heart-wrenching plot.",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Outliers: The Story of Success",
    author: "Malcolm Gladwell",
    review: "A thought-provoking exploration of success, delving into factors like opportunity, cultural legacy, and the 10,000-hour rule that shape exceptional achievement, though it falls just short of a 5 star rating as it does get a little repetitive.",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Going Postal",
    author: "Terry Pratchett",
    review: "This book has awesome satirical takes on the postal service, corporate corruption, and biblical references.",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Better Than the Movies",
    author: "Lynn Painter",
    review: "One of the cheesiest romance books I have read in a long time, and yet so fun to read.",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Flowers for Algernon",
    author: "Daniel Keyes",
    review: "I can't believe I haven't read this book before, amazing dive into the relationship between happiness, intelligence, and empathy.",
    rating: 5,
    coverUrl: ""
  }, {
    title: "The Good Life: Lessons from the World's Longest Scientific Study of Happiness",
    author: "Robert Waldinger",
    review: "This book offers insightful reflections on the key factors contributing to a fulfilling life, though it falls short in providing actionable guidance beyond already having strong relationships.",
    rating: 3,
    coverUrl: ""
  }, {
    title: "The Perks of Being a Wallflower",
    author: "Stephen Chbosky",
    review: "An emotionally charged exploration of adolescence and self-discovery, delivering a raw and authentic narrative that tugs at the heartstrings.",
    rating: 4,
    coverUrl: ""
  }, {
    title: "The Woman in Me",
    author: "Britney Spears",
    review: "Pretty much exactly what I expected from this book, I got to learn more about Britney's conservatorship and life, but it wasn't anything special.",
    rating: 3,
    coverUrl: ""
  }, {
    title: "The Golem of Brooklyn",
    author: "Adam Mansbach",
    review: "This book was an interesting retelling into one of my favorite Jewish folktales, The Golem of Prague, as well as the state of modern antisemitism.",
    rating: 4,
    coverUrl: ""
  }]
}, {
  month: "January 2024",
  books: [{
    title: "If We Were Villains",
    author: "M.L. Rio",
    review: "Perfect for Shakespeare nerds, although a bit cheesy.",
    rating: 4,
    coverUrl: ""
  }, {
    title: "We Are Never Meeting in Real Life.",
    author: "Samantha Irby",
    review: "Some of the essays were great, other ones fell flat, way too many of them involved shit.",
    rating: 2,
    coverUrl: ""
  }, {
    title: "Time Is a Mother",
    author: "Ocean Vuong",
    review: "Gorgeous poetry, thoughtfully compiled.",
    rating: 5,
    coverUrl: ""
  }, {
    title: "The Road to Roswell",
    author: "Connie Willis",
    review: "This was a fun, campy, and comedic book involving alien abduction; it would make a good beach read.",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Caste: The Origins of Our Discontents",
    author: "Isabel Wilkerson",
    review: "One of the best and most thoughtful books I've read in awhile, highly informative about how much racism/caste has informed the structure of the US.",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Why Fish Don't Exist: A Story of Loss, Love, and the Hidden Order of Life",
    author: "Lulu Miller",
    review: "I was surprised by how much I liked this book, makes me think a lot about the responsibility scientists have to ethics.",
    rating: 5,
    coverUrl: ""
  }, {
    title: "When We Cease to Understand the World",
    author: "Benjamín Labatut",
    review: "This book was an interesting exploration of the role scientists play in shaping the world but the writing was just okay.",
    rating: 3,
    coverUrl: ""
  }, {
    title: "Sula",
    author: "Toni Morrison",
    review: "Potent, poetic, tragic, and difficult to read at times, certainly worth the effort.",
    rating: 4,
    coverUrl: ""
  }]
}];

// Counts and averages are derived from the book lists so they cannot drift.
// Not every book has a rating, so averages are taken over the rated ones only
// and are null when a month has none.
const readingLogs = readingLogData.map((log) => {
  const rated = log.books.filter((b) => typeof b.rating === "number");
  return {
    month: log.month,
    books: log.books,
    booksRead: log.books.length,
    ratedCount: rated.length,
    averageRating: rated.length
      ? Math.round((rated.reduce((sum, b) => sum + b.rating, 0) / rated.length) * 10) / 10
      : null,
  };
});

const Blog = () => {
  usePageMeta('/blog');
  // Keyed by month name; the most recent month starts open.
  const [openMonths, setOpenMonths] = useState<Record<string, boolean>>({
    [readingLogs[0].month]: true,
  });

  // Most recent year open by default, derived so a new year needs no edit here.
  const [openYears, setOpenYears] = useState<Record<string, boolean>>({
    [readingLogs[0].month.split(" ")[1]]: true,
  });

  const [openPosts, setOpenPosts] = useState<{
    [key: string]: boolean;
  }>({
    "2025": false,
    "2024": false
  });

  const toggleMonth = (month: string) => {
    setOpenMonths(prev => ({
      ...prev,
      [month]: !prev[month]
    }));
  };

  const toggleYear = (year: string) => {
    setOpenYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const togglePost = (year: string) => {
    setOpenPosts(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  // Group reading logs by year
  const readingLogsByYear = readingLogs.reduce((acc, log) => {
    const year = log.month.split(' ')[1];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(log);
    return acc;
  }, {} as Record<string, typeof readingLogs>);

  // Sort years in descending order (newest first)
  const sortedYears = Object.keys(readingLogsByYear).sort((a, b) => b.localeCompare(a));
  return <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16" style={{paddingTop: '6rem'}}>
        <div className="space-y-12">
          {/* Page Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-medium text-text-primary">
              Reading Log
            </h1>
            <p className="text-sm text-text-muted max-w-3xl">
              Each month is colored by New York City's average daily high that month, cold to warm.
            </p>
            <p className="text-sm text-text-muted max-w-3xl">
              Temperatures from the{' '}
              <a href="https://mesonet1.agron.iastate.edu/sites/monthlysum.php?network=NY_DCP&station=WTCN6&utm_" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                Iowa State Mesonet
              </a>
            </p>
          </div>

          {/* Special Posts */}
          <div className="space-y-8 mb-12">
            {/* Top 10 Books of 2025 */}
            <Collapsible open={openPosts['2025']} onOpenChange={() => togglePost('2025')}>
              <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
                <CollapsibleTrigger className="w-full text-left">
                  <div className="flex items-center justify-between p-6 hover:bg-surface-hover transition-colors cursor-pointer">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-medium text-text-primary">
                        Top 10 Books of 2025
                      </h2>
                    </div>
                    <div className="text-text-secondary hover:text-text-primary transition-colors">
                      {openPosts['2025'] ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </div>
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="px-6 pb-6 border-t border-border-subtle">
                    <div className="space-y-3 pt-4">
                      {[
                        { rank: 1, title: "The Lilac People", author: "Milo Todd" },
                        { rank: 2, title: "James", author: "Percival Everett" },
                        { rank: 3, title: "How High We Go in the Dark", author: "Sequoia Nagamatsu" },
                        { rank: 4, title: "Language City: The Fight to Preserve Endangered Mother Tongues in New York", author: "Ross Perlin" },
                        { rank: 5, title: "Everything Is Tuberculosis", author: "John Green" },
                        { rank: 6, title: "Martyr!", author: "Kaveh Akbar" },
                        { rank: 7, title: "Yumi and the Nightmare Painter", author: "Brandon Sanderson" },
                        { rank: 8, title: "The Vegetarian", author: "Han Kang" },
                        { rank: 9, title: "Dune", author: "Frank Herbert" },
                        { rank: 10, title: "Stag Dance", author: "Torrey Peters" }
                      ].map((book) => (
                        <div key={book.rank} className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border-subtle hover:bg-surface-hover transition-colors">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground font-medium rounded-full flex items-center justify-center text-sm">
                            {book.rank}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-text-primary mb-1 leading-tight">
                              {book.title}
                            </h3>
                            <p className="text-text-secondary text-sm">
                              by {book.author}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
</div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Top 10 Books of 2024 */}
            <Collapsible open={openPosts['2024']} onOpenChange={() => togglePost('2024')}>
              <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
                <CollapsibleTrigger className="w-full text-left">
                  <div className="flex items-center justify-between p-6 hover:bg-surface-hover transition-colors cursor-pointer">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-medium text-text-primary">
                        Top 10 Books of 2024
                      </h2>
                    </div>
                    <div className="text-text-secondary hover:text-text-primary transition-colors">
                      {openPosts['2024'] ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </div>
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="px-6 pb-6 border-t border-border-subtle">
                    <div className="space-y-3 pt-4">
                      {[
                        { rank: 1, title: "The Pull of the Stars", author: "Emma Donoghue", rating: 5 },
                        { rank: 2, title: "Demon Copperhead", author: "Barbara Kingsolver", rating: 5 },
                        { rank: 3, title: "Ducks: Two Years in the Oil Sands", author: "Kate Beaton", rating: 5 },
                        { rank: 4, title: "Caste: The Origins of Our Discontents", author: "Isabel Wilkerson", rating: 5 },
                        { rank: 5, title: "Humankind: A Hopeful History", author: "Rutger Bregman", rating: 5 },
                        { rank: 6, title: "Secret City: The Hidden History of Gay Washington", author: "James Kirchick", rating: 5 },
                        { rank: 7, title: "Atomic Accidents: A History of Nuclear Meltdowns and Disasters: From the Ozark Mountains to Fukushima", author: "James Mahaffey", rating: 4 },
                        { rank: 8, title: "The Dead Take the A Train", author: "Cassandra Khaw", rating: 4 },
                        { rank: 9, title: "You Dreamed of Empires", author: "Álvaro Enrigue", rating: 4 },
                        { rank: 10, title: "He Who Drowned the World", author: "Shelley Parker-Chan", rating: 4 }
                      ].map((book) => (
                        <div key={book.rank} className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border-subtle hover:bg-surface-hover transition-colors">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground font-medium rounded-full flex items-center justify-center text-sm">
                            {book.rank}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-text-primary mb-1 leading-tight">
                              {book.title}
                            </h3>
                            <p className="text-text-secondary text-sm mb-2">
                              by {book.author}
                            </p>
                            <div
                              className="flex items-center space-x-1"
                              role="img"
                              aria-label={`${book.rating} out of 5`}
                            >
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  aria-hidden="true"
                                  className={`text-xs ${i < book.rating ? 'text-text-primary' : 'text-text-muted'}`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
</div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>

          {/* Reading Logs */}
          <div className="space-y-8">
            {sortedYears.map(year => {
              const yearLogs = readingLogsByYear[year];
              const totalBooksInYear = yearLogs.reduce((sum, log) => sum + log.booksRead, 0);
              const ratedInYear = yearLogs.reduce((sum, log) => sum + log.ratedCount, 0);
              const avgRatingInYear = ratedInYear
                ? yearLogs.reduce((sum, log) => sum + (log.averageRating ?? 0) * log.ratedCount, 0) / ratedInYear
                : null;

              return (
                <Collapsible key={year} open={openYears[year]} onOpenChange={() => toggleYear(year)}>
                  <div className="bg-card/50 border border-border rounded-xl overflow-hidden shadow-lg">
                    <CollapsibleTrigger className="w-full text-left">
                      <div className="flex items-center justify-between p-8 hover:bg-card/80 transition-colors cursor-pointer">
                        <div className="space-y-2">
                          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
                            {year}
                          </h2>
                          <p className="text-text-secondary text-lg">
                            <strong className="text-text-primary">{totalBooksInYear} books read</strong>
                            {avgRatingInYear !== null && (
                              <>
                                {" • "}
                                <strong className="text-text-primary">{avgRatingInYear.toFixed(1)}</strong> average rating
                              </>
                            )}
                          </p>
                        </div>
                        <div className="text-text-secondary hover:text-text-primary transition-colors p-3">
                          {openYears[year] ? <ChevronDown className="h-8 w-8" /> : <ChevronRight className="h-8 w-8" />}
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="px-8 pb-8 border-t border-border-subtle">
                        <div className="space-y-6 pt-6">
                          {yearLogs.map(log => {

                          // Each month is tinted by its average daily high.
                          const getMonthBackground = (month: string) => {
                            const temp = temperatureData[month];
                            if (temp === undefined) return 'bg-surface border-border';
                            return `month-t${tempStep(temp)}`;
                          };

                          const getMonthHover = (month: string) => {
                            const temp = temperatureData[month];
                            return temp === undefined ? 'hover:bg-surface-hover' : '';
                          };
                          
                          return (
                            <Collapsible key={log.month} open={!!openMonths[log.month]} onOpenChange={() => toggleMonth(log.month)}>
                              <div className={`${getMonthBackground(log.month)} rounded-lg overflow-hidden border shadow-sm`}>
                                <CollapsibleTrigger className="w-full text-left">
                                  <div className={`flex items-center justify-between p-6 ${getMonthHover(log.month)} transition-colors cursor-pointer`}>
                                    <div className="space-y-2">
                                      <div className="flex items-baseline gap-3">
                                        <h3 className="text-2xl md:text-3xl font-medium text-foreground">
                                          {log.month.split(' ')[0]} {/* Just month name */}
                                        </h3>
                                        <span className="text-lg text-foreground/70 font-medium">
                                          {temperatureData[log.month] ? `${temperatureData[log.month]}°F` : ''}
                                        </span>
                                      </div>
                                      <p className="text-foreground/80">
                                        <strong className="text-foreground">Books Read:</strong> {log.booksRead}
                                        {log.averageRating !== null && (
                                          <>
                                            , <strong className="text-foreground">Average Rating:</strong> {log.averageRating} Stars
                                            {log.ratedCount < log.booksRead && ` (${log.ratedCount} of ${log.booksRead} rated)`}
                                          </>
                                        )}
                                      </p>
                                    </div>
                                    <div className="text-foreground/60 hover:text-foreground/80 transition-colors p-2">
                                      {openMonths[log.month] ? <ChevronDown className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
                                    </div>
                                  </div>
                                </CollapsibleTrigger>
                                
                                <CollapsibleContent>
                                  <div className="p-6 pt-0 border-t border-border-subtle">
                                    {/* Book List */}
                                    <div className="space-y-3 pt-4">
                                      {log.books.map((book, bookIndex) => {
                                    // Placeholder covers follow the same ramp as their month.
                                    const getSeasonalColor = (month: string) => {
                                      const temp = temperatureData[month];
                                      return temp === undefined ? 'bg-surface' : `cover-t${tempStep(temp)}`;
                                    };
                                    return <div key={bookIndex} className="bg-card rounded-lg p-4 flex gap-4 border border-border shadow-sm">
                                            {/* Custom Book Cover */}
                                            <div className="flex-shrink-0">
                                              <BookCover
                                                title={book.title}
                                                author={book.author}
                                                fallbackClass={getSeasonalColor(log.month)}
                                              />
                                            </div>
                                            
                                            {/* Book Info */}
                                            <div className="flex-1 space-y-2">
                                              <div className="flex items-start justify-between gap-3">
                                                <div>
                                                  <p className="text-text-primary font-medium">
                                                    {book.title}
                                                  </p>
                                                  {book.author && (
                                                    <p className="text-text-secondary text-sm">
                                                      by {book.author}
                                                    </p>
                                                  )}
                                                </div>
                                                {typeof book.rating === "number" ? (
                                                  <div
                                                    className="flex items-center space-x-1 flex-shrink-0"
                                                    role="img"
                                                    aria-label={`${book.rating} out of 5`}
                                                  >
                                                    {[...Array(5)].map((_, i) => <span key={i} aria-hidden="true" className={`text-sm ${i < book.rating ? 'text-amber-700 dark:text-amber-400' : 'text-muted-foreground'}`}>
                                                        ★
                                                      </span>)}
                                                  </div>
                                                ) : (
                                                  <span className="flex-shrink-0 text-xs text-text-muted">Not rated</span>
                                                )}
                                              </div>
                                              <p className="text-text-secondary text-sm leading-relaxed">
                                                {book.review}
                                              </p>
                                            </div>
                                          </div>;
                                  })}
                                    </div>
                                  </div>
                                </CollapsibleContent>
                              </div>
                            </Collapsible>
                          );
                        })}
                        </div>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </main>
    </div>;
};
export default Blog;