import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <div className="space-y-16">
            {readingLogs.map((log) => (
              <article key={log.id} className="space-y-6 pb-12 border-b border-border-subtle last:border-b-0">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-medium text-text-primary">
                    {log.month}
                  </h2>
                  <p className="text-text-secondary">
                    <strong>Books Read:</strong> {log.booksRead}, <strong>Average Rating:</strong> {log.averageRating} Stars
                  </p>
                </div>
                
                {/* Book List */}
                <div className="space-y-3">
                  {log.books.map((book, bookIndex) => (
                    <div key={bookIndex} className="bg-surface rounded-lg p-4 flex gap-4">
                      {/* Book Cover */}
                      <div className="flex-shrink-0">
                        <img
                          src={book.coverUrl}
                          alt={`${book.title} cover`}
                          className="w-16 h-24 object-cover rounded shadow-sm"
                        />
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
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;