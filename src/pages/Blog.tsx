import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Header from '../components/Header';

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
  "January 2025": 31.2,
  "February 2025": 35.0,
  "March 2025": 46.9,
  "April 2025": 55.3,
  "May 2025": 62.3,
  "June 2025": 73.8,
  "July 2025": 78.6,
  "August 2025": 73.8,
  "September 2025": 73.8 // Using August 2025 temp for September 2025 as fallback
};

// Function to convert temperature to hue (cold = blue/purple, hot = red/orange)
const getTemperatureColor = (month: string): string => {
  const temp = temperatureData[month] || 50; // Default fallback temp
  // Map temperature range (31-80°F) to hue range (240-0 degrees)
  // Cold temps (31°F) = blue (240°), hot temps (80°F) = red (0°)
  const normalizedTemp = Math.max(0, Math.min(1, (temp - 31) / (80 - 31)));
  const hue = Math.round(240 * (1 - normalizedTemp));
  
  return `hsl(${hue}, 70%, 60%)`;
};
const readingLogs = [{
  id: 1,
  month: "September 2025",
  booksRead: 4,
  averageRating: 2.7,
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
  }]
}, {
  id: 2,
  month: "August 2025",
  booksRead: 10,
  averageRating: 3.6,
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
  id: 3,
  month: "July 2025",
  booksRead: 3,
  averageRating: 4.3,
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
  }]
}, {
  id: 4,
  month: "June 2025",
  booksRead: 4,
  averageRating: 4.5,
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
  id: 5,
  month: "May 2025",
  booksRead: 8,
  averageRating: 4.3,
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
  id: 6,
  month: "April 2025",
  booksRead: 8,
  averageRating: 4.5,
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
  id: 7,
  month: "March 2025",
  booksRead: 8,
  averageRating: 4.2,
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
  id: 8,
  month: "February 2025",
  booksRead: 14,
  averageRating: 3.5,
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
  id: 9,
  month: "January 2025",
  booksRead: 9,
  averageRating: 3.4,
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
  id: 10,
  month: "December 2024",
  booksRead: 7,
  averageRating: 3.1,
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
  id: 11,
  month: "November 2024",
  booksRead: 6,
  averageRating: 3.5,
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
  id: 12,
  month: "September 2024",
  booksRead: 3,
  averageRating: 3.8,
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
  id: 13,
  month: "August 2024",
  booksRead: 10,
  averageRating: 3.6,
  books: [{
    title: "Burn",
    author: "Peter Heller",
    review: "This book felt like it was trying to be edgy hard to dramatize politics without following through on some of it's most compelling ideas around a US state succession.",
    rating: 2,
    coverUrl: ""
  }, {
    title: "He Who Drowned the World",
    author: "Shelley Parker-Chan",
    review: "An excelent sequel to She Who Became the Sun however at times it felt like it was trying to hit you on the head with metaphors that the reader can understand the first time.",
    rating: 4,
    coverUrl: ""
  }, {
    title: "The Financial Diet",
    author: "Chelsea Fagan",
    review: "This beginner book on personal finance might be better for a high school students but feels to simple to be marketed towards people in their early 20s.",
    rating: 2,
    coverUrl: ""
  }, {
    title: "Your Money or Your Life",
    author: "Joe Dominguez",
    review: "This book was convincing and practical in it's advice for personal finance, but was repetitive at times.",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Worry",
    author: "Alexandra Tanner",
    review: "This was an interesting read and there were points that reminded me of my jewish family, but it also felt like it was trying to take that to a too quirky level that sometimes lost me as a reader.",
    rating: 3,
    coverUrl: ""
  }, {
    title: "My Year of Rest and Relaxation",
    author: "Ottessa Moshfegh",
    review: "This was well written but felt like it heavily romanticized depression rather than depicting the difficulties and often tradgedy of it.",
    rating: 2,
    coverUrl: ""
  }, {
    title: "How We Named the Stars",
    author: "Andrés N. Ordorica",
    review: "This book was such a sweet heartfull queer love story, and then I had to keep trying not to cry for the last 100 pages.",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Interesting Facts about Space",
    author: "Emily R. Austin",
    review: "The strangeness of the main character and this book made me feel both understood and upset in a wierdly good way.",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Secret City: The Hidden History of Gay Washington",
    author: "James Kirchick",
    review: "This book was an incredibly comprehensive look at queer life in the capitol, everyone involved in politics should read it.",
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
  id: 14,
  month: "July 2024",
  booksRead: 7,
  averageRating: 3.5,
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
  id: 15,
  month: "June 2024",
  booksRead: 5,
  averageRating: 3.9,
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
  id: 16,
  month: "May 2024",
  booksRead: 7,
  averageRating: 3.7,
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
    review: "While there was definitely some bias/oversimplication of some social issues in this book, I think everyone could benefit from reading it.",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Tender Is the Flesh",
    author: "Agustina Bazterrica",
    review: "I really wanted to like this book but it felt too much like it was motivated by veganism rather than it's own premise/plot",
    rating: 2,
    coverUrl: ""
  }, {
    title: "The Dead Take the A Train",
    author: "Cassandra Khaw",
    review: "This was a surprisingly fun monster hunter read, with a great sense of humor",
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
  id: 17,
  month: "April 2024",
  booksRead: 5,
  averageRating: 3.8,
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
    review: "This book was difficut to read at times but worth the effort, also trigger warning for anything you can think of.",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Gathering Moss: A Natural and Cultural History of Mosses",
    author: "Robin Wall Kimmerer",
    review: "I enjoyed this book more than I expected, and liked the back and forth between",
    rating: 4,
    coverUrl: ""
  }]
}, {
  id: 18,
  month: "March 2024",
  booksRead: 13,
  averageRating: 3.6,
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
    review: "It is a remarkable narrative that brings to life the seldom-explored intersection of wildlife and female labor in the oil industry, shedding light on the resilience of nature and the author herself amidst the stark landscapes of industrial progress",
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
    review: "I just couldn't buy into the angst of ahhaf, she was too hard for me to root for in this book",
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
  id: 19,
  month: "February 2024",
  booksRead: 10,
  averageRating: 3.9,
  books: [{
    title: "The Happiness Project",
    author: "Gretchen Rubin",
    review: "The author focuses too much on perfectionism, little truisms, and is way too repetitive",
    rating: 1,
    coverUrl: ""
  }, {
    title: "The Pull of the Stars",
    author: "Emma Donoghue",
    review: "Incredible book for anyone interested in the role of women in medical history as well as ireland just after WW1, all wrapped up with a wondfully heart wrenching plot",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Outliers: The Story of Success",
    author: "Malcolm Gladwell",
    review: "a thought-provoking exploration of success, delving into factors like opportunity, cultural legacy, and the 10,000-hour rule that shape exceptional achievement, though it falls just short of a 5 star rating as it does get a little repetitive.",
    rating: 4,
    coverUrl: ""
  }, {
    title: "Going Postal",
    author: "Terry Pratchett",
    review: "This book has awesome satirical takes on the postal service, corporate corruption, and biblical references, this book deserves a solid",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Better Than the Movies",
    author: "Lynn Painter",
    review: "One of the cheesiest romance books I have read in a long time, and yet so fun to read",
    rating: 5,
    coverUrl: ""
  }, {
    title: "Flowers for Algernon",
    author: "Daniel Keyes",
    review: "I Can't believe I havent read this book before, amazing dive into the relationship between happiness, intelligence, and empathy.",
    rating: 5,
    coverUrl: ""
  }, {
    title: "The Good Life: Lessons from the World's Longest Scientific Study of Happiness",
    author: "Robert Waldinger",
    review: "This book offers insightful reflections on the key factors contributing to a fulfilling life, though it falls short in providing actionable guidance beyond already having strong relationships, earning it a",
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
    review: "Pretty much exactly what I expected from this book, I got to learn more about Britney's conservatorship and life, but it wasn't anything special",
    rating: 3,
    coverUrl: ""
  }, {
    title: "The Golem of Brooklyn",
    author: "Adam Mansbach",
    review: "This book was an interesting retelling into one of my favorite jewish folktales, The Golem of Prague, as well as the state of modern antisemitism.",
    rating: 4,
    coverUrl: ""
  }]
}, {
  id: 20,
  month: "January 2024",
  booksRead: 8,
  averageRating: 3.8,
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
const Blog = () => {
  const [openMonths, setOpenMonths] = useState<{
    [key: number]: boolean;
  }>({
    1: true, // September 2025 open by default (most recent)
    2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false,
    11: false, 12: false, 13: false, 14: false, 15: false, 16: false, 17: false, 18: false, 19: false, 20: false
  });
  const toggleMonth = (monthId: number) => {
    setOpenMonths(prev => ({
      ...prev,
      [monthId]: !prev[monthId]
    }));
  };
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
            <p className="text-lg text-text-secondary leading-relaxed">
              My monthly reading adventures - the good, the bad, and the just okay. Honest thoughts on everything I pick up. 📚 
            </p>
            <p className="text-sm italic text-text-muted max-w-3xl">Colors are scaled to New York City's average monthly high temp for the month and year the books were read</p>
            <p className="text-sm italic text-text-muted max-w-3xl">
              Data source: 
              <a href="https://mesonet1.agron.iastate.edu/sites/monthlysum.php?network=NY_DCP&station=WTCN6&utm_" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                Iowa State Mesonet
              </a>
            </p>
          </div>

          {/* Reading Logs */}
          <div className="space-y-6">
            {readingLogs.map(log => {

            // Scientific temperature-to-color mapping using actual NYC data
            const getMonthBackground = (month: string) => {
              const temp = temperatureData[month] || 50;
              
              // Light mode colors (pastels) and dark mode colors (muted darks)
              if (temp <= 35) return 'bg-blue-50 border-blue-200 dark:bg-blue-900/50 dark:border-blue-700';
              if (temp <= 40) return 'bg-blue-100 border-blue-300 dark:bg-blue-800/50 dark:border-blue-600';
              if (temp <= 50) return 'bg-indigo-50 border-indigo-200 dark:bg-indigo-900/50 dark:border-indigo-700';
              if (temp <= 60) return 'bg-purple-50 border-purple-200 dark:bg-purple-900/50 dark:border-purple-700';
              if (temp <= 70) return 'bg-fuchsia-50 border-fuchsia-200 dark:bg-fuchsia-900/50 dark:border-fuchsia-700';
              if (temp <= 75) return 'bg-pink-50 border-pink-200 dark:bg-pink-900/50 dark:border-pink-700';
              if (temp <= 80) return 'bg-rose-50 border-rose-200 dark:bg-rose-900/50 dark:border-rose-700';
              return 'bg-red-50 border-red-200 dark:bg-red-900/50 dark:border-red-700';
            };

            const getMonthHover = (month: string) => {
              const temp = temperatureData[month] || 50;
              
              if (temp <= 35) return 'hover:bg-blue-100 dark:hover:bg-blue-800/60';
              if (temp <= 40) return 'hover:bg-blue-200 dark:hover:bg-blue-700/60';
              if (temp <= 50) return 'hover:bg-indigo-100 dark:hover:bg-indigo-800/60';
              if (temp <= 60) return 'hover:bg-purple-100 dark:hover:bg-purple-800/60';
              if (temp <= 70) return 'hover:bg-fuchsia-100 dark:hover:bg-fuchsia-800/60';
              if (temp <= 75) return 'hover:bg-pink-100 dark:hover:bg-pink-800/60';
              if (temp <= 80) return 'hover:bg-rose-100 dark:hover:bg-rose-800/60';
              return 'hover:bg-red-100 dark:hover:bg-red-800/60';
            };
            return <Collapsible key={log.id} open={openMonths[log.id]} onOpenChange={() => toggleMonth(log.id)}>
                  <div className={`${getMonthBackground(log.month)} rounded-lg overflow-hidden shadow-sm`}>
                    <CollapsibleTrigger className="w-full text-left">
                      <div className={`flex items-center justify-between p-6 ${getMonthHover(log.month)} transition-colors cursor-pointer`}>
                        <div className="space-y-2">
                          <div className="flex items-baseline gap-3">
                            <h2 className="text-2xl md:text-3xl font-medium text-foreground">
                              {log.month}
                            </h2>
                            <span className="text-lg text-foreground/70 font-medium">
                              {temperatureData[log.month] ? `${temperatureData[log.month]}°F` : ''}
                            </span>
                          </div>
                          <p className="text-foreground/80">
                            <strong className="text-foreground">Books Read:</strong> {log.booksRead}, <strong className="text-foreground">Average Rating:</strong> {log.averageRating} Stars
                          </p>
                        </div>
                        <div className="text-foreground/60 hover:text-foreground/80 transition-colors p-2">
                          {openMonths[log.id] ? <ChevronDown className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="p-6 pt-0 border-t border-border-subtle">
                        {/* Book List */}
                        <div className="space-y-3 pt-4">
                          {log.books.map((book, bookIndex) => {
                        // Temperature-based book cover colors using scientific scaling
                        const getSeasonalColor = (month: string, index: number) => {
                          const temp = temperatureData[month] || 50;
                          
                          // Map temperatures to color families, then select from variations
                          let colors: string[];
                          
                          if (temp <= 40) {
                            // Very Cold: Blue family
                            colors = [
                              'bg-gradient-to-br from-blue-400 to-blue-600',
                              'bg-gradient-to-br from-blue-500 to-blue-700',
                              'bg-gradient-to-br from-sky-400 to-sky-600',
                              'bg-gradient-to-br from-cyan-400 to-cyan-600',
                              'bg-gradient-to-br from-blue-600 to-blue-800',
                              'bg-gradient-to-br from-sky-500 to-sky-700'
                            ];
                          } else if (temp <= 50) {
                            // Cold: Indigo family  
                            colors = [
                              'bg-gradient-to-br from-indigo-400 to-indigo-600',
                              'bg-gradient-to-br from-violet-400 to-violet-600', 
                              'bg-gradient-to-br from-indigo-500 to-indigo-700',
                              'bg-gradient-to-br from-blue-500 to-indigo-600',
                              'bg-gradient-to-br from-violet-500 to-violet-700',
                              'bg-gradient-to-br from-indigo-600 to-purple-600'
                            ];
                          } else if (temp <= 60) {
                            // Cool: Purple family
                            colors = [
                              'bg-gradient-to-br from-purple-400 to-purple-600',
                              'bg-gradient-to-br from-purple-500 to-purple-700',
                              'bg-gradient-to-br from-violet-500 to-purple-600',
                              'bg-gradient-to-br from-purple-600 to-purple-800',
                              'bg-gradient-to-br from-indigo-500 to-purple-600',
                              'bg-gradient-to-br from-purple-500 to-fuchsia-600'
                            ];
                          } else if (temp <= 70) {
                            // Moderate: Fuchsia family
                            colors = [
                              'bg-gradient-to-br from-fuchsia-400 to-fuchsia-600',
                              'bg-gradient-to-br from-pink-400 to-pink-600',
                              'bg-gradient-to-br from-fuchsia-500 to-fuchsia-700',
                              'bg-gradient-to-br from-pink-500 to-pink-700',
                              'bg-gradient-to-br from-purple-500 to-fuchsia-600',
                              'bg-gradient-to-br from-fuchsia-600 to-pink-600'
                            ];
                          } else if (temp <= 75) {
                            // Warm: Rose family
                            colors = [
                              'bg-gradient-to-br from-rose-400 to-rose-600',
                              'bg-gradient-to-br from-rose-500 to-rose-700',
                              'bg-gradient-to-br from-pink-500 to-rose-600',
                              'bg-gradient-to-br from-rose-600 to-red-600',
                              'bg-gradient-to-br from-rose-500 to-red-500',
                              'bg-gradient-to-br from-pink-600 to-rose-700'
                            ];
                          } else {
                            // Hot: Red family
                            colors = [
                              'bg-gradient-to-br from-red-400 to-red-600',
                              'bg-gradient-to-br from-red-500 to-red-700',
                              'bg-gradient-to-br from-rose-500 to-red-600',
                              'bg-gradient-to-br from-red-600 to-red-800',
                              'bg-gradient-to-br from-orange-500 to-red-600',
                              'bg-gradient-to-br from-red-500 to-orange-600'
                            ];
                          }
                          
                          return colors[index % colors.length];
                        };
                        return <div key={bookIndex} className="bg-card rounded-lg p-4 flex gap-4 border border-border shadow-sm">
                                {/* Custom Book Cover */}
                                <div className="flex-shrink-0">
                                  <div className={`w-16 h-24 rounded shadow-sm ${getSeasonalColor(log.month, bookIndex)} flex flex-col justify-between p-2 text-white`}>
                                    <div className="text-[6px] font-bold leading-tight overflow-hidden drop-shadow-sm">
                                      {book.title.length > 30 ? book.title.substring(0, 27) + '...' : book.title}
                                    </div>
                                    <div className="text-[5px] opacity-90 leading-tight drop-shadow-sm">
                                      {book.author.length > 20 ? book.author.substring(0, 17) + '...' : book.author}
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Book Info */}
                                <div className="flex-1 space-y-2">
                                  <div className="flex items-start justify-between gap-3">
                                    <div>
                                      <p className="text-text-primary font-medium">
                                        {book.title}
                                      </p>
                                      <p className="text-text-secondary text-sm">
                                        by {book.author}
                                      </p>
                                    </div>
                                    <div className="flex items-center space-x-1 flex-shrink-0">
                                      {[...Array(5)].map((_, i) => <span key={i} className={`text-sm ${i < book.rating ? 'text-yellow-400' : 'text-muted-foreground'}`}>
                                          ★
                                        </span>)}
                                    </div>
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
                </Collapsible>;
          })}
          </div>
        </div>
      </main>
    </div>;
};
export default Blog;