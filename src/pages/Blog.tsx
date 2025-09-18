import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const readingLogs = [
  {
    id: 1,
    month: "August 2024",
    booksRead: 10,
    averageRating: 3.6,
    books: [
      {
        title: "Burn",
        author: "Peter Heller",
        review: "This book felt like it was trying to be edgy hard to dramatize politics without following through on some of it's most compelling ideas around a US state succession.",
        rating: 2,
        coverUrl: ""
      },
      {
        title: "He Who Drowned the World",
        author: "Shelley Parker-Chan",
        review: "An excelent sequel to She Who Became the Sun however at times it felt like it was trying to hit you on the head with metaphors that the reader can understand the first time.",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "The Financial Diet",
        author: "Chelsea Fagan",
        review: "This beginner book on personal finance might be better for a high school students but feels to simple to be marketed towards people in their early 20s.",
        rating: 2,
        coverUrl: ""
      },
      {
        title: "Your Money or Your Life",
        author: "Joe Dominguez",
        review: "This book was convincing and practical in it's advice for personal finance, but was repetitive at times.",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "Worry",
        author: "Tanner Alexandra",
        review: "This was an interesting read and there were points that reminded me of my jewish family, but it also felt like it was trying to take that to a too quirky level that sometimes lost me as a reader.",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "My Year of Rest and Relaxation",
        author: "Ottessa Moshfegh",
        review: "This was well written but felt like it heavily romanticized depression rather than depicting the difficulties and often tradgedy of it.",
        rating: 2,
        coverUrl: ""
      },
      {
        title: "How We Named the Stars",
        author: "Andrés N. Ordorica",
        review: "This book was such a sweet heartfull queer love story, and then I had to keep trying not to cry for the last 100 pages.",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "Interesting Facts about Space",
        author: "Emily Austin",
        review: "The strangeness of the main character and this book made me feel both understood and upset in a wierdly good way.",
        rating: 5,
        coverUrl: ""
      },
      {
        title: "Secret City: The Hidden History of Gay Washington",
        author: "James Kirchick",
        review: "This book was an incredibly comprehensive look at queer life in the capitol, everyone involved in politics should read it.",
        rating: 5,
        coverUrl: ""
      },
      {
        title: "The Wealth of Shadows",
        author: "Graham Moore",
        review: "Graham Moore has done it again! He continues to be my favorite author writing incredible historical fiction.",
        rating: 5,
        coverUrl: ""
      }
    ]
  },
  {
    id: 2,
    month: "July 2024",
    booksRead: 6,
    averageRating: 3.8,
    books: [
      {
        title: "On Tyranny: Twenty Lessons from the Twentieth Century",
        author: "Timothy Snyder",
        review: "",
        rating: 5,
        coverUrl: ""
      },
      {
        title: "Yellowface",
        author: "R.F. Kuang",
        review: "",
        rating: 2,
        coverUrl: ""
      },
      {
        title: "The Left hand of Darkness",
        author: "Ursula K. Le Guin",
        review: "",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "The Poppy War",
        author: "R.F. Kuang",
        review: "",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "Interview with the Vampire",
        author: "Anne Rice",
        review: "",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "A Court of Frost and Starlight",
        author: "Sarah J. Mass",
        review: "",
        rating: 3,
        coverUrl: ""
      }
    ]
  },
  {
    id: 3,
    month: "June 2024",
    booksRead: 8,
    averageRating: 3.5,
    books: [
      {
        title: "The Nickel Boys",
        author: "Colson Whitehead",
        review: "",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "Remarkably Bright Creatures",
        author: "Shelby Van Pelt",
        review: "Very fun",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "After Sappho",
        author: "Selby Wynn Schwartz",
        review: "",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "Poor Things",
        author: "Alasdair Gray",
        review: "",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "HumanKind: A Hopeful History",
        author: "Rutger Bregman",
        review: "While there was definitely some bias/oversimplication of some social issues in this book, I think everyone could benefit from reading it.",
        rating: 5,
        coverUrl: ""
      },
      {
        title: "Tender is the Flesh",
        author: "Agustina Bazterrica",
        review: "I really wanted to like this book but it felt too much like it was motivated by veganism rather than it's own premise/plot",
        rating: 2,
        coverUrl: ""
      },
      {
        title: "The Dead take the A train",
        author: "Cassandra Khaw",
        review: "This was a surprisingly fun monster hunter read, with a great sense of humor",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "Utopia for Realists: How We Can Build the Ideal World",
        author: "Rutger Bregman",
        review: "",
        rating: 3,
        coverUrl: ""
      }
    ]
  },
  {
    id: 4,
    month: "May 2024",
    booksRead: 8,
    averageRating: 3.5,
    books: [
      {
        title: "The Nickel Boys",
        author: "Colson Whitehead",
        review: "",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "Remarkably Bright Creatures",
        author: "Shelby Van Pelt",
        review: "Very fun",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "After Sappho",
        author: "Selby Wynn Schwartz",
        review: "",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "Poor Things",
        author: "Alasdair Gray",
        review: "",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "HumanKind: A Hopeful History",
        author: "Rutger Bregman",
        review: "While there was definitely some bias/oversimplication of some social issues in this book, I think everyone could benefit from reading it.",
        rating: 5,
        coverUrl: ""
      },
      {
        title: "Tender is the Flesh",
        author: "Agustina Bazterrica",
        review: "I really wanted to like this book but it felt too much like it was motivated by veganism rather than it's own premise/plot",
        rating: 2,
        coverUrl: ""
      },
      {
        title: "The Dead take the A train",
        author: "Cassandra Khaw",
        review: "This was a surprisingly fun monster hunter read, with a great sense of humor",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "Utopia for Realists: How We Can Build the Ideal World",
        author: "Rutger Bregman",
        review: "",
        rating: 3,
        coverUrl: ""
      }
    ]
  },
  {
    id: 5,
    month: "April 2024",
    booksRead: 10,
    averageRating: 3.5,
    books: [
      {
        title: "In Limbo",
        author: "Deb J.J. Lee",
        review: "",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "Sharp Objects",
        author: "Gillian Flynn",
        review: "",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "March: Book One",
        author: "John Lewis",
        review: "",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "Blink: The Power of Thinking Without Thinking",
        author: "Malcom Gladwell",
        review: "",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "The Tipping Point: How Little Things can Make a Big Difference",
        author: "Malcom Gladwell",
        review: "",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "A Court of Mist and Fury",
        author: "Sarah J. Maas",
        review: "",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "March: Book Two",
        author: "John Lewis",
        review: "",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "How Not to Diet",
        author: "Michael Greger",
        review: "",
        rating: 2,
        coverUrl: ""
      },
      {
        title: "A Little Life",
        author: "Hanya Yanagihara",
        review: "This book was difficut to read at times but worth the effort, also trigger warning for anything you can think of.",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "Gathering Moss: A Natural and Cultural History of Mosses",
        author: "Robin Wall Kimmerer",
        review: "I enjoyed this book more than I expected, and liked the back and forth between",
        rating: 4,
        coverUrl: ""
      }
    ]
  },
  {
    id: 6,
    month: "March 2024",
    booksRead: 8,
    averageRating: 4.0,
    books: [
      {
        title: "Deacon King Kong",
        author: "James McBride",
        review: "Deacon King Kong by James McBride is a vibrant, character-rich novel set in 1969 Brooklyn, praised for its humor and humanity, but its complex structure lost me at times.",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "A Court of Thorns and Roses",
        author: "Sarah J. Mass",
        review: "",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "When the Angels Left the Old Country",
        author: "Sacha Lamb",
        review: "",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "Anita de Monte Laughs Last",
        author: "Xóchitl González",
        review: "",
        rating: 5,
        coverUrl: ""
      },
      {
        title: "It's Lonely at the Centre of the Earth",
        author: "Zoe Thorogood",
        review: "",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "How Not to Die: Discover the Foods Scientifically Proven to Prevent and Reverse Disease",
        author: "Michael Greger",
        review: "",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "Ducks: Two Years in the Oil Sands",
        author: "Kate Beaton",
        review: "It is a remarkable narrative that brings to life the seldom-explored intersection of wildlife and female labor in the oil industry, shedding light on the resilience of nature and the author herself amidst the stark landscapes of industrial progress",
        rating: 5,
        coverUrl: ""
      },
      {
        title: "Gone Girl",
        author: "Gillian Flynn",
        review: "I just couldn't buy into the angst of ahhaf, she was too hard for me to root for in this book",
        rating: 2,
        coverUrl: ""
      }
    ]
  },
  {
    id: 7,
    month: "February 2024", 
    booksRead: 10,
    averageRating: 3.9,
    books: [
      {
        title: "The Happiness Project",
        author: "Gretchen Rubin",
        review: "The author focuses too much on perfectionism, little truisms, and is way too repetitive",
        rating: 1,
        coverUrl: ""
      },
      {
        title: "The Pull of the Stars",
        author: "Emma Donoghue",
        review: "Incredible book for anyone interested in the role of women in medical history as well as ireland just after WW1, all wrapped up with a wondfully heart wrenching plot",
        rating: 5,
        coverUrl: ""
      },
      {
        title: "Outliers: The Story of Success",
        author: "Malcom Gladwell",
        review: "a thought-provoking exploration of success, delving into factors like opportunity, cultural legacy, and the 10,000-hour rule that shape exceptional achievement, though it falls just short of a 5 star rating as it does get a little repetitive.",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "Going Postal",
        author: "Terry Pratchett",
        review: "This book has awesome satirical takes on the postal service, corporate corruption, and biblical references, this book deserves a solid",
        rating: 5,
        coverUrl: ""
      },
      {
        title: "Better than the Movies",
        author: "Lunn Painter",
        review: "One of the cheesiest romance books I have read in a long time, and yet so fun to read",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "Flowers for Algernon",
        author: "Daniel Keyes",
        review: "I Can't believe I havent read this book before, amazing dive into the relationship between happiness, intelligence, and empathy.",
        rating: 5,
        coverUrl: ""
      },
      {
        title: "The Good Life: Lessons from the Longest Scientific Study of Happiness",
        author: "Robert Waldinger",
        review: "This book offers insightful reflections on the key factors contributing to a fulfilling life, though it falls short in providing actionable guidance beyond already having strong relationships, earning it a",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "The Perks of Being a Wallflower",
        author: "Stephen Chbosky",
        review: "An emotionally charged exploration of adolescence and self-discovery, delivering a raw and authentic narrative that tugs at the heartstrings.",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "The Woman in Me",
        author: "Britney Spears",
        review: "Pretty much exactly what I expected from this book, I got to learn more about Britney's conservatorship and life, but it wasn't anything special",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "The Golem of Brooklyn",
        author: "Adam Mansbach",
        review: "This book was an interesting retelling into one of my favorite jewish folktales, The Golem of Prague, as well as the state of modern antisemitism.",
        rating: 4,
        coverUrl: ""
      }
    ]
  },
  {
    id: 8,
    month: "January 2024",
    booksRead: 8,
    averageRating: 3.8,
    books: [
      {
        title: "If We Were Villains",
        author: "M.L Rio",
        review: "Perfect for Shakespeare nerds, although a bit cheesy.",
        rating: 4,
        coverUrl: ""
      },
      {
        title: "We are Never Meeting in Real Life", 
        author: "Samantha Irby",
        review: "Some of the essays were great, other ones fell flat, way too many of them involved shit.",
        rating: 2,
        coverUrl: ""
      },
      {
        title: "Time is a Mother",
        author: "Ocean Vuong",
        review: "Gorgeous poetry, thoughtfully compiled.",
        rating: 5,
        coverUrl: ""
      },
      {
        title: "The Road to Roswell",
        author: "Connie Willis",
        review: "This was a fun, campy, and comedic book involving alien abduction; it would make a good beach read.",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "Caste: The Origins of Our Discontents",
        author: "Isabel Wilkerson",
        review: "One of the best and most thoughtful books I've read in awhile, highly informative about how much racism/caste has informed the structure of the US.",
        rating: 5,
        coverUrl: ""
      },
      {
        title: "Why Fish Don't Exist: A Story of Loss, Love, and the Hidden order of Life",
        author: "Lulu Miller",
        review: "I was surprised by how much I liked this book, makes me think a lot about the responsibility scientists have to ethics.",
        rating: 5,
        coverUrl: ""
      },
      {
        title: "When We Cease to Understand the World",
        author: "Benjamin Labatut", 
        review: "This book was an interesting exploration of the role scientists play in shaping the world but the writing was just okay.",
        rating: 3,
        coverUrl: ""
      },
      {
        title: "Sula",
        author: "Toni Morrison",
        review: "Potent, poetic, tragic, and difficult to read at times, certainly worth the effort.",
        rating: 4,
        coverUrl: ""
      }
    ]
  }
];

const Blog = () => {
  const [openMonths, setOpenMonths] = useState<{ [key: number]: boolean }>({
    1: true,  // August open by default (most recent)
    2: false, // July closed
    3: false, // June closed
    4: false, // May closed  
    5: false, // April closed
    6: false, // March closed
    7: false, // February closed
    8: false  // January closed
  });

  const toggleMonth = (monthId: number) => {
    setOpenMonths(prev => ({
      ...prev,
      [monthId]: !prev[monthId]
    }));
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Page Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-medium text-text-primary">
              Reading Log
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              My monthly reading adventures - the good, the bad, and the DNFs. Honest thoughts on everything I pick up. 📚 
            </p>
            <p className="text-sm italic text-text-muted max-w-3xl">
              Colors for each month reflect New York City's average monthly high temperature on a red and blue scale. Data source: 
              <a 
                href="https://mesonet1.agron.iastate.edu/sites/monthlysum.php?network=NY_DCP&station=WTCN6&utm_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-1"
              >
                Iowa State Mesonet
              </a>
            </p>
          </div>

          {/* Reading Logs */}
          <div className="space-y-6">
            {readingLogs.map((log) => {
              // Get temperature-based pastel background for each month (proper blue-to-red scale)
              const getMonthBackground = (month: string) => {
                const monthKey = month.split(' ')[0];
                const backgrounds = {
                  'January': 'bg-blue-50 border-blue-100',        // 42.0°F - Coldest (blue)
                  'February': 'bg-indigo-50 border-indigo-100',   // 47.0°F - Cold (indigo)
                  'March': 'bg-purple-50 border-purple-100',      // 55.2°F - Cool (purple)
                  'April': 'bg-violet-50 border-violet-100',      // 62.0°F - Cool-warm (violet)
                  'May': 'bg-pink-50 border-pink-100',            // 72.7°F - Warm (pink)
                  'June': 'bg-rose-50 border-rose-100',           // 84.2°F - Hot (rose)
                  'July': 'bg-red-50 border-red-100',             // 87.4°F - Hottest (red)
                  'August': 'bg-orange-50 border-orange-100',     // 84.0°F - Hot (orange-red)
                };
                return backgrounds[monthKey as keyof typeof backgrounds] || 'bg-background border-border';
              };

              const getMonthHover = (month: string) => {
                const monthKey = month.split(' ')[0];
                const hovers = {
                  'January': 'hover:bg-blue-100',       // 42.0°F
                  'February': 'hover:bg-indigo-100',    // 47.0°F
                  'March': 'hover:bg-purple-100',       // 55.2°F
                  'April': 'hover:bg-violet-100',       // 62.0°F
                  'May': 'hover:bg-pink-100',           // 72.7°F
                  'June': 'hover:bg-rose-100',          // 84.2°F
                  'July': 'hover:bg-red-100',           // 87.4°F
                  'August': 'hover:bg-orange-100',      // 84.0°F
                };
                return hovers[monthKey as keyof typeof hovers] || 'hover:bg-surface-hover';
              };

              return (
                <Collapsible
                  key={log.id}
                  open={openMonths[log.id]}
                  onOpenChange={() => toggleMonth(log.id)}
                >
                  <div className={`${getMonthBackground(log.month)} rounded-lg overflow-hidden shadow-sm`}>
                    <CollapsibleTrigger className="w-full text-left">
                      <div className={`flex items-center justify-between p-6 ${getMonthHover(log.month)} transition-colors cursor-pointer`}>
                        <div className="space-y-2">
                          <div className="flex items-baseline gap-3">
                            <h2 className="text-2xl md:text-3xl font-medium text-text-primary">
                              {log.month}
                            </h2>
                            <span className="text-lg text-text-muted font-medium">
                              {(() => {
                                const monthKey = log.month.split(' ')[0];
                                const temps = {
                                  'January': '42.0°F',
                                  'February': '47.0°F', 
                                  'March': '55.2°F',
                                  'April': '62.0°F',
                                  'May': '72.7°F',
                                  'June': '84.2°F',
                                  'July': '87.4°F',
                                  'August': '84.0°F'
                                };
                                return temps[monthKey as keyof typeof temps] || '';
                              })()}
                            </span>
                          </div>
                          <p className="text-text-secondary">
                            <strong>Books Read:</strong> {log.booksRead}, <strong>Average Rating:</strong> {log.averageRating} Stars
                          </p>
                        </div>
                        <div className="text-text-muted hover:text-text-secondary transition-colors p-2">
                          {openMonths[log.id] ? (
                            <ChevronDown className="h-6 w-6" />
                          ) : (
                            <ChevronRight className="h-6 w-6" />
                          )}
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="p-6 pt-0 border-t border-border-subtle">
                        {/* Book List */}
                        <div className="space-y-3 pt-4">
                          {log.books.map((book, bookIndex) => {
                            // Proper blue-to-red temperature scale for book covers
                            const getSeasonalColor = (month: string, index: number) => {
                              const colors = {
                                'January': [ // 42.0°F - Coldest (blue tones)
                                  'bg-gradient-to-br from-blue-200 to-blue-300',
                                  'bg-gradient-to-br from-blue-300 to-blue-400',
                                  'bg-gradient-to-br from-blue-400 to-blue-500',
                                  'bg-gradient-to-br from-blue-500 to-blue-600',
                                  'bg-gradient-to-br from-sky-300 to-sky-400',
                                  'bg-gradient-to-br from-sky-400 to-sky-500',
                                  'bg-gradient-to-br from-blue-600 to-blue-700',
                                  'bg-gradient-to-br from-sky-500 to-sky-600'
                                ],
                                'February': [ // 47.0°F - Cold (indigo tones)
                                  'bg-gradient-to-br from-indigo-200 to-indigo-300',
                                  'bg-gradient-to-br from-indigo-300 to-indigo-400',
                                  'bg-gradient-to-br from-indigo-400 to-indigo-500',
                                  'bg-gradient-to-br from-indigo-500 to-indigo-600',
                                  'bg-gradient-to-br from-blue-400 to-blue-500',
                                  'bg-gradient-to-br from-blue-500 to-blue-600',
                                  'bg-gradient-to-br from-violet-300 to-violet-400',
                                  'bg-gradient-to-br from-violet-400 to-violet-500',
                                  'bg-gradient-to-br from-indigo-600 to-indigo-700',
                                  'bg-gradient-to-br from-blue-600 to-blue-700'
                                ],
                                'March': [ // 55.2°F - Cool (purple tones)
                                  'bg-gradient-to-br from-purple-200 to-purple-300',
                                  'bg-gradient-to-br from-purple-300 to-purple-400',
                                  'bg-gradient-to-br from-purple-400 to-purple-500',
                                  'bg-gradient-to-br from-violet-300 to-violet-400',
                                  'bg-gradient-to-br from-violet-400 to-violet-500',
                                  'bg-gradient-to-br from-indigo-400 to-indigo-500',
                                  'bg-gradient-to-br from-purple-500 to-purple-600',
                                  'bg-gradient-to-br from-violet-500 to-violet-600'
                                ],
                                'April': [ // 62.0°F - Cool-warm (violet tones)
                                  'bg-gradient-to-br from-violet-200 to-violet-300',
                                  'bg-gradient-to-br from-violet-300 to-violet-400',
                                  'bg-gradient-to-br from-violet-400 to-violet-500',
                                  'bg-gradient-to-br from-violet-500 to-violet-600',
                                  'bg-gradient-to-br from-purple-300 to-purple-400',
                                  'bg-gradient-to-br from-purple-400 to-purple-500',
                                  'bg-gradient-to-br from-fuchsia-300 to-fuchsia-400',
                                  'bg-gradient-to-br from-fuchsia-400 to-fuchsia-500',
                                  'bg-gradient-to-br from-violet-600 to-violet-700',
                                  'bg-gradient-to-br from-purple-500 to-purple-600'
                                ],
                                'May': [ // 72.7°F - Warm (pink tones)
                                  'bg-gradient-to-br from-pink-200 to-pink-300',
                                  'bg-gradient-to-br from-pink-300 to-pink-400',
                                  'bg-gradient-to-br from-pink-400 to-pink-500',
                                  'bg-gradient-to-br from-fuchsia-300 to-fuchsia-400',
                                  'bg-gradient-to-br from-fuchsia-400 to-fuchsia-500',
                                  'bg-gradient-to-br from-rose-300 to-rose-400',
                                  'bg-gradient-to-br from-rose-400 to-rose-500',
                                  'bg-gradient-to-br from-pink-500 to-pink-600'
                                ],
                                'June': [ // 84.2°F - Hot (rose tones)
                                  'bg-gradient-to-br from-rose-200 to-rose-300',
                                  'bg-gradient-to-br from-rose-300 to-rose-400',
                                  'bg-gradient-to-br from-rose-400 to-rose-500',
                                  'bg-gradient-to-br from-rose-500 to-rose-600',
                                  'bg-gradient-to-br from-pink-400 to-pink-500',
                                  'bg-gradient-to-br from-pink-500 to-pink-600',
                                  'bg-gradient-to-br from-red-300 to-red-400',
                                  'bg-gradient-to-br from-red-400 to-red-500'
                                ],
                                'July': [ // 87.4°F - Hottest (red tones)
                                  'bg-gradient-to-br from-red-200 to-red-300',
                                  'bg-gradient-to-br from-red-300 to-red-400',
                                  'bg-gradient-to-br from-red-400 to-red-500',
                                  'bg-gradient-to-br from-red-500 to-red-600',
                                  'bg-gradient-to-br from-red-600 to-red-700',
                                  'bg-gradient-to-br from-rose-400 to-rose-500'
                                ],
                                'August': [ // 84.0°F - Hot (orange-red tones)
                                  'bg-gradient-to-br from-orange-200 to-orange-300',
                                  'bg-gradient-to-br from-orange-300 to-orange-400',
                                  'bg-gradient-to-br from-orange-400 to-orange-500',
                                  'bg-gradient-to-br from-red-300 to-red-400',
                                  'bg-gradient-to-br from-red-400 to-red-500',
                                  'bg-gradient-to-br from-rose-400 to-rose-500',
                                  'bg-gradient-to-br from-orange-500 to-orange-600',
                                  'bg-gradient-to-br from-red-500 to-red-600',
                                  'bg-gradient-to-br from-rose-500 to-rose-600',
                                  'bg-gradient-to-br from-orange-600 to-orange-700'
                                ]
                              };
                              
                              const monthKey = month.split(' ')[0] as keyof typeof colors;
                              const monthColors = colors[monthKey] || colors['January'];
                              return monthColors[index % monthColors.length];
                            };

                            return (
                              <div key={bookIndex} className="bg-background rounded-lg p-4 flex gap-4 border border-border-subtle">
                                {/* Custom Book Cover */}
                                <div className="flex-shrink-0">
                                  <div className={`w-16 h-24 rounded shadow-sm ${getSeasonalColor(log.month, bookIndex)} flex flex-col justify-between p-2 text-white`}>
                                    <div className="text-[6px] font-bold leading-tight overflow-hidden">
                                      {book.title.length > 30 ? book.title.substring(0, 27) + '...' : book.title}
                                    </div>
                                    <div className="text-[5px] opacity-90 leading-tight">
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
                                      {[...Array(5)].map((_, i) => (
                                        <span 
                                          key={i} 
                                          className={`text-sm ${i < book.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        >
                                          ★
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                  <p className="text-text-secondary text-sm leading-relaxed">
                                    {book.review}
                                  </p>
                                </div>
                              </div>
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
    </div>
  );
};

export default Blog;