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
    month: "March 2024",
    booksRead: 6,
    averageRating: 4.2,
    books: [
      {
        title: "Fourth Wing",
        author: "Rebecca Yarros",
        review: "Dragon academia with romance - predictable but addictive. Perfect guilty pleasure read.",
        rating: 4,
        coverUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=180&fit=crop"
      },
      {
        title: "The Seven Moons of Maali Almeida",
        author: "Shehan Karunatilaka",
        review: "Darkly funny and inventive take on afterlife bureaucracy. The magical realism worked perfectly here.",
        rating: 5,
        coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=120&h=180&fit=crop"
      },
      {
        title: "Lessons in Chemistry",
        author: "Bonnie Garmus",
        review: "Charming but felt a bit too quirky-for-quirky's-sake. Elizabeth was a great character though.",
        rating: 4,
        coverUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=180&fit=crop"
      },
      {
        title: "The Atlas Six",
        author: "Olivie Blake",
        review: "Beautiful writing but the plot went nowhere. All vibes, no substance.",
        rating: 3,
        coverUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&h=180&fit=crop"
      },
      {
        title: "Mexican Gothic",
        author: "Silvia Moreno-Garcia",
        review: "Atmospheric horror done right. The house felt like a character itself.",
        rating: 5,
        coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=120&h=180&fit=crop"
      },
      {
        title: "The Poppy War",
        author: "R.F. Kuang",
        review: "Brutal military fantasy that doesn't pull punches. Emotionally devastating in the best way.",
        rating: 4,
        coverUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=120&h=180&fit=crop"
      }
    ]
  },
  {
    id: 2,
    month: "February 2024", 
    booksRead: 10,
    averageRating: 3.9,
    books: [
      {
        title: "The Happiness Project",
        author: "Gretchen Rubin",
        review: "The author focuses too much on perfectionism, little truisms, and is way too repetitive",
        rating: 1,
        coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=120&h=180&fit=crop"
      },
      {
        title: "The Pull of the Stars",
        author: "Emma Donoghue",
        review: "Incredible book for anyone interested in the role of women in medical history as well as ireland just after WW1, all wrapped up with a wondfully heart wrenching plot",
        rating: 5,
        coverUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&h=180&fit=crop"
      },
      {
        title: "Outliers: The Story of Success",
        author: "Malcom Gladwell",
        review: "a thought-provoking exploration of success, delving into factors like opportunity, cultural legacy, and the 10,000-hour rule that shape exceptional achievement, though it falls just short of a 5 star rating as it does get a little repetitive.",
        rating: 4,
        coverUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=120&h=180&fit=crop"
      },
      {
        title: "Going Postal",
        author: "Terry Pratchett",
        review: "This book has awesome satirical takes on the postal service, corporate corruption, and biblical references, this book deserves a solid",
        rating: 5,
        coverUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=180&fit=crop"
      },
      {
        title: "Better than the Movies",
        author: "Lunn Painter",
        review: "One of the cheesiest romance books I have read in a long time, and yet so fun to read",
        rating: 3,
        coverUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=120&h=180&fit=crop"
      },
      {
        title: "Flowers for Algernon",
        author: "Daniel Keyes",
        review: "I Can't believe I havent read this book before, amazing dive into the relationship between happiness, intelligence, and empathy.",
        rating: 5,
        coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=120&h=180&fit=crop"
      },
      {
        title: "The Good Life: Lessons from the Longest Scientific Study of Happiness",
        author: "Robert Waldinger",
        review: "This book offers insightful reflections on the key factors contributing to a fulfilling life, though it falls short in providing actionable guidance beyond already having strong relationships, earning it a",
        rating: 3,
        coverUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=120&h=180&fit=crop"
      },
      {
        title: "The Perks of Being a Wallflower",
        author: "Stephen Chbosky",
        review: "An emotionally charged exploration of adolescence and self-discovery, delivering a raw and authentic narrative that tugs at the heartstrings.",
        rating: 4,
        coverUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&h=180&fit=crop"
      },
      {
        title: "The Woman in Me",
        author: "Britney Spears",
        review: "Pretty much exactly what I expected from this book, I got to learn more about Britney's conservatorship and life, but it wasn't anything special",
        rating: 3,
        coverUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=120&h=180&fit=crop"
      },
      {
        title: "The Golem of Brooklyn",
        author: "Adam Mansbach",
        review: "This book was an interesting retelling into one of my favorite jewish folktales, The Golem of Prague, as well as the state of modern antisemitism.",
        rating: 4,
        coverUrl: "https://images.unsplash.com/photo-1481894725107-fb5b5d16bb03?w=120&h=180&fit=crop"
      }
    ]
  },
  {
    id: 3,
    month: "January 2024",
    booksRead: 8,
    averageRating: 3.8,
    books: [
      {
        title: "If We Were Villains",
        author: "M.L Rio",
        review: "Perfect for Shakespeare nerds, although a bit cheesy.",
        rating: 4,
        coverUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&h=180&fit=crop"
      },
      {
        title: "We are Never Meeting in Real Life", 
        author: "Samantha Irby",
        review: "Some of the essays were great, other ones fell flat, way too many of them involved shit.",
        rating: 2,
        coverUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=120&h=180&fit=crop"
      },
      {
        title: "Time is a Mother",
        author: "Ocean Vuong",
        review: "Gorgeous poetry, thoughtfully compiled.",
        rating: 5,
        coverUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=180&fit=crop"
      },
      {
        title: "The Road to Roswell",
        author: "Connie Willis",
        review: "This was a fun, campy, and comedic book involving alien abduction; it would make a good beach read.",
        rating: 3,
        coverUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=120&h=180&fit=crop"
      },
      {
        title: "Caste: The Origins of Our Discontents",
        author: "Isabel Wilkerson",
        review: "One of the best and most thoughtful books I've read in awhile, highly informative about how much racism/caste has informed the structure of the US.",
        rating: 5,
        coverUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=120&h=180&fit=crop"
      },
      {
        title: "Why Fish Don't Exist: A Story of Loss, Love, and the Hidden order of Life",
        author: "Lulu Miller",
        review: "I was surprised by how much I liked this book, makes me think a lot about the responsibility scientists have to ethics.",
        rating: 5,
        coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=120&h=180&fit=crop"
      },
      {
        title: "When We Cease to Understand the World",
        author: "Benjamin Labatut", 
        review: "This book was an interesting exploration of the role scientists play in shaping the world but the writing was just okay.",
        rating: 3,
        coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=120&h=180&fit=crop"
      },
      {
        title: "Sula",
        author: "Toni Morrison",
        review: "Potent, poetic, tragic, and difficult to read at times, certainly worth the effort.",
        rating: 4,
        coverUrl: "https://images.unsplash.com/photo-1481894725107-fb5b5d16bb03?w=120&h=180&fit=crop"
      }
    ]
  }
];

const Blog = () => {
  const [openMonths, setOpenMonths] = useState<{ [key: number]: boolean }>({
    1: true, // March open by default
    2: false, // February closed by default  
    3: false  // January closed by default
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
                  'March': 'bg-emerald-50 border-emerald-100', // Pastel green
                  'February': 'bg-blue-50 border-blue-100',   // Pastel blue  
                  'January': 'bg-slate-50 border-slate-100'   // Pastel gray
                };
                return backgrounds[monthKey as keyof typeof backgrounds] || 'bg-background border-border';
              };

              const getMonthHover = (month: string) => {
                const monthKey = month.split(' ')[0];
                const hovers = {
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
                                'March': [ // Spring greens - light to dark
                                  'bg-gradient-to-br from-emerald-200 to-emerald-300',
                                  'bg-gradient-to-br from-emerald-300 to-emerald-400',
                                  'bg-gradient-to-br from-emerald-400 to-emerald-500', 
                                  'bg-gradient-to-br from-emerald-500 to-emerald-600',
                                  'bg-gradient-to-br from-emerald-600 to-emerald-700',
                                  'bg-gradient-to-br from-emerald-700 to-emerald-800'
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