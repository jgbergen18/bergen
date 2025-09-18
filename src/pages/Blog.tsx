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
        rating: 4
      },
      {
        title: "The Seven Moons of Maali Almeida",
        author: "Shehan Karunatilaka",
        review: "Darkly funny and inventive take on afterlife bureaucracy. The magical realism worked perfectly here.",
        rating: 5
      },
      {
        title: "Lessons in Chemistry",
        author: "Bonnie Garmus",
        review: "Charming but felt a bit too quirky-for-quirky's-sake. Elizabeth was a great character though.",
        rating: 4
      },
      {
        title: "The Atlas Six",
        author: "Olivie Blake",
        review: "Beautiful writing but the plot went nowhere. All vibes, no substance.",
        rating: 3
      },
      {
        title: "Mexican Gothic",
        author: "Silvia Moreno-Garcia",
        review: "Atmospheric horror done right. The house felt like a character itself.",
        rating: 5
      },
      {
        title: "The Poppy War",
        author: "R.F. Kuang",
        review: "Brutal military fantasy that doesn't pull punches. Emotionally devastating in the best way.",
        rating: 4
      }
    ]
  },
  {
    id: 2,
    month: "February 2024", 
    booksRead: 7,
    averageRating: 3.9,
    books: [
      {
        title: "Tomorrow, and Tomorrow, and Tomorrow",
        author: "Gabrielle Zevin",
        review: "Video game nostalgia meets literary fiction. Surprisingly emotional for a book about game design.",
        rating: 5
      },
      {
        title: "The Invisible Life of Addie LaRue",
        author: "V.E. Schwab",
        review: "Beautiful premise but dragged in the middle. The ending saved it.",
        rating: 4
      },
      {
        title: "Circe",
        author: "Madeline Miller",
        review: "Greek mythology retelling perfection. Miller makes ancient gods feel human.",
        rating: 5
      },
      {
        title: "The Guest List",
        author: "Lucy Foley",
        review: "Solid thriller but the characters were all terrible people. Made it hard to care who died.",
        rating: 3
      },
      {
        title: "Klara and the Sun",
        author: "Kazuo Ishiguro",
        review: "Quietly devastating. Ishiguro's exploration of AI consciousness was beautifully done.",
        rating: 4
      },
      {
        title: "The Sanatorium",
        author: "Sarah Pearse", 
        review: "Atmospheric but the mystery was predictable. Good for a snowy day read.",
        rating: 3
      },
      {
        title: "Project Hail Mary",
        author: "Andy Weir",
        review: "Science fiction comfort food. Weir's humor makes the technical stuff digestible.",
        rating: 4
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
        rating: 4
      },
      {
        title: "We are Never Meeting in Real Life", 
        author: "Samantha Irby",
        review: "Some of the essays were great, other ones fell flat, way too many of them involved shit.",
        rating: 2
      },
      {
        title: "Time is a Mother",
        author: "Ocean Vuong",
        review: "Gorgeous poetry, thoughtfully compiled.",
        rating: 5
      },
      {
        title: "The Road to Roswell",
        author: "Connie Willis",
        review: "This was a fun, campy, and comedic book involving alien abduction; it would make a good beach read.",
        rating: 3
      },
      {
        title: "Caste: The Origins of Our Discontents",
        author: "Isabel Wilkerson",
        review: "One of the best and most thoughtful books I've read in awhile, highly informative about how much racism/caste has informed the structure of the US.",
        rating: 5
      },
      {
        title: "Why Fish Don't Exist: A Story of Loss, Love, and the Hidden order of Life",
        author: "Lulu Miller",
        review: "I was surprised by how much I liked this book, makes me think a lot about the responsibility scientists have to ethics.",
        rating: 5
      },
      {
        title: "When We Cease to Understand the World",
        author: "Benjamin Labatut", 
        review: "This book was an interesting exploration of the role scientists play in shaping the world but the writing was just okay.",
        rating: 3
      },
      {
        title: "Sula",
        author: "Toni Morrison",
        review: "Potent, poetic, tragic, and difficult to read at times, certainly worth the effort.",
        rating: 4
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
                <div className="space-y-4">
                  {log.books.map((book, bookIndex) => (
                    <div key={bookIndex} className="bg-surface rounded-lg p-4 space-y-2">
                      <div className="space-y-1">
                        <p className="text-text-primary">
                          <strong>{book.title}</strong> by {book.author}: {book.review} <span className="text-text-muted">{book.rating}/5 Stars.</span>
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