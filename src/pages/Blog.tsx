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
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              My monthly reading adventures - the good, the bad, and the DNFs. Honest thoughts on everything I pick up. 📚
            </p>
          </div>

          {/* Reading Logs */}
          <div className="space-y-6">
            {readingLogs.map((log) => {
              // Get seasonal pastel background for each month
              const getMonthBackground = (month: string) => {
                const monthKey = month.split(' ')[0];
                const backgrounds = {
                  'August': 'bg-amber-50 border-amber-100',     // Late summer gold
                  'July': 'bg-orange-50 border-orange-100',    // Summer orange
                  'June': 'bg-yellow-50 border-yellow-100',    // Early summer yellow
                  'May': 'bg-pink-50 border-pink-100',         // Late spring pink
                  'April': 'bg-lime-50 border-lime-100',       // Spring lime
                  'March': 'bg-emerald-50 border-emerald-100', // Spring green
                  'February': 'bg-blue-50 border-blue-100',    // Winter blue  
                  'January': 'bg-slate-50 border-slate-100'    // Winter gray
                };
                return backgrounds[monthKey as keyof typeof backgrounds] || 'bg-background border-border';
              };

              const getMonthHover = (month: string) => {
                const monthKey = month.split(' ')[0];
                const hovers = {
                  'August': 'hover:bg-amber-100',
                  'July': 'hover:bg-orange-100',
                  'June': 'hover:bg-yellow-100', 
                  'May': 'hover:bg-pink-100',
                  'April': 'hover:bg-lime-100',
                  'March': 'hover:bg-emerald-100',
                  'February': 'hover:bg-blue-100', 
                  'January': 'hover:bg-slate-100'
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
                          <h2 className="text-2xl md:text-3xl font-medium text-text-primary">
                            {log.month}
                          </h2>
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
                            // Seasonal colors based on month - cohesive shades
                            const getSeasonalColor = (month: string, index: number) => {
                              const colors = {
                                'August': [ // Late summer golds - light to dark
                                  'bg-gradient-to-br from-amber-200 to-amber-300',
                                  'bg-gradient-to-br from-amber-300 to-amber-400',
                                  'bg-gradient-to-br from-amber-400 to-amber-500',
                                  'bg-gradient-to-br from-amber-500 to-amber-600',
                                  'bg-gradient-to-br from-amber-600 to-amber-700',
                                  'bg-gradient-to-br from-amber-700 to-amber-800',
                                  'bg-gradient-to-br from-yellow-400 to-yellow-500',
                                  'bg-gradient-to-br from-yellow-500 to-yellow-600',
                                  'bg-gradient-to-br from-yellow-600 to-yellow-700',
                                  'bg-gradient-to-br from-orange-400 to-orange-500'
                                ],
                                'July': [ // Summer oranges - light to dark
                                  'bg-gradient-to-br from-orange-200 to-orange-300',
                                  'bg-gradient-to-br from-orange-300 to-orange-400',
                                  'bg-gradient-to-br from-orange-400 to-orange-500',
                                  'bg-gradient-to-br from-orange-500 to-orange-600',
                                  'bg-gradient-to-br from-orange-600 to-orange-700',
                                  'bg-gradient-to-br from-red-400 to-red-500'
                                ],
                                'June': [ // Early summer yellows - light to dark
                                  'bg-gradient-to-br from-yellow-200 to-yellow-300',
                                  'bg-gradient-to-br from-yellow-300 to-yellow-400',
                                  'bg-gradient-to-br from-yellow-400 to-yellow-500',
                                  'bg-gradient-to-br from-yellow-500 to-yellow-600',
                                  'bg-gradient-to-br from-yellow-600 to-yellow-700',
                                  'bg-gradient-to-br from-amber-400 to-amber-500',
                                  'bg-gradient-to-br from-amber-500 to-amber-600',
                                  'bg-gradient-to-br from-lime-400 to-lime-500'
                                ],
                                'May': [ // Late spring pinks - light to dark
                                  'bg-gradient-to-br from-pink-200 to-pink-300',
                                  'bg-gradient-to-br from-pink-300 to-pink-400',
                                  'bg-gradient-to-br from-pink-400 to-pink-500',
                                  'bg-gradient-to-br from-pink-500 to-pink-600',
                                  'bg-gradient-to-br from-rose-400 to-rose-500',
                                  'bg-gradient-to-br from-rose-500 to-rose-600',
                                  'bg-gradient-to-br from-fuchsia-400 to-fuchsia-500',
                                  'bg-gradient-to-br from-fuchsia-500 to-fuchsia-600'
                                ],
                                'April': [ // Spring limes - light to dark
                                  'bg-gradient-to-br from-lime-200 to-lime-300',
                                  'bg-gradient-to-br from-lime-300 to-lime-400',
                                  'bg-gradient-to-br from-lime-400 to-lime-500',
                                  'bg-gradient-to-br from-lime-500 to-lime-600',
                                  'bg-gradient-to-br from-green-300 to-green-400',
                                  'bg-gradient-to-br from-green-400 to-green-500',
                                  'bg-gradient-to-br from-emerald-300 to-emerald-400',
                                  'bg-gradient-to-br from-emerald-400 to-emerald-500',
                                  'bg-gradient-to-br from-teal-400 to-teal-500',
                                  'bg-gradient-to-br from-cyan-400 to-cyan-500'
                                ],
                                'March': [ // Spring greens - light to dark
                                  'bg-gradient-to-br from-emerald-200 to-emerald-300',
                                  'bg-gradient-to-br from-emerald-300 to-emerald-400',
                                  'bg-gradient-to-br from-emerald-400 to-emerald-500', 
                                  'bg-gradient-to-br from-emerald-500 to-emerald-600',
                                  'bg-gradient-to-br from-emerald-600 to-emerald-700',
                                  'bg-gradient-to-br from-emerald-700 to-emerald-800',
                                  'bg-gradient-to-br from-green-500 to-green-600',
                                  'bg-gradient-to-br from-teal-500 to-teal-600'
                                ],
                                'February': [ // Winter blues - light to dark
                                  'bg-gradient-to-br from-blue-200 to-blue-300',
                                  'bg-gradient-to-br from-blue-300 to-blue-400',
                                  'bg-gradient-to-br from-blue-400 to-blue-500',
                                  'bg-gradient-to-br from-blue-500 to-blue-600',
                                  'bg-gradient-to-br from-blue-600 to-blue-700',
                                  'bg-gradient-to-br from-blue-700 to-blue-800',
                                  'bg-gradient-to-br from-blue-800 to-blue-900',
                                  'bg-gradient-to-br from-indigo-400 to-indigo-500',
                                  'bg-gradient-to-br from-indigo-500 to-indigo-600',
                                  'bg-gradient-to-br from-indigo-600 to-indigo-700'
                                ],
                                'January': [ // Winter grays - light to dark
                                  'bg-gradient-to-br from-slate-300 to-slate-400',
                                  'bg-gradient-to-br from-slate-400 to-slate-500',
                                  'bg-gradient-to-br from-slate-500 to-slate-600',
                                  'bg-gradient-to-br from-slate-600 to-slate-700',
                                  'bg-gradient-to-br from-slate-700 to-slate-800',
                                  'bg-gradient-to-br from-gray-500 to-gray-600',
                                  'bg-gradient-to-br from-gray-600 to-gray-700',
                                  'bg-gradient-to-br from-gray-700 to-gray-800'
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