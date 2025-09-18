import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const bookReviews = [
  {
    id: 1,
    title: "March 2024 Reading Adventures",
    date: "March 31, 2024",
    excerpt: "This month I dove into three incredible books that completely shifted my perspective on creativity, relationships, and the power of storytelling.",
    readTime: "5 min read",
    books: [
      {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        rating: 5,
        thoughts: "What an absolutely stunning novel! I couldn't put this down - Reid's storytelling is masterful, and Evelyn Hugo is such a complex, fascinating character. The way the story unfolds through the interview format kept me guessing until the very end."
      },
      {
        title: "Atomic Habits",
        author: "James Clear", 
        rating: 4,
        thoughts: "Such practical wisdom about building good habits and breaking bad ones. I've already started implementing the 1% better principle in my daily routine. Clear's writing is accessible and the examples really stick with you."
      }
    ]
  },
  {
    id: 2,
    title: "February 2024: Romance, Mystery & Growth",
    date: "February 29, 2024",
    excerpt: "February was all about cozy reads and page-turners! From swoony romance to mind-bending mysteries, here's what kept me up way too late this month.",
    readTime: "4 min read",
    books: [
      {
        title: "The Midnight Library",
        author: "Matt Haig",
        rating: 5,
        thoughts: "This book hit me right in the feels! Such a beautiful exploration of life's infinite possibilities and finding meaning in our choices. Haig has a gift for making profound concepts feel accessible and hopeful."
      },
      {
        title: "Beach Read",
        author: "Emily Henry",
        rating: 4,
        thoughts: "The perfect comfort read! Henry writes characters that feel so real and relatable. The enemies-to-lovers trope was executed perfectly, and I loved the exploration of writer's block and finding inspiration again."
      }
    ]
  },
  {
    id: 3,
    title: "January 2024: New Year, New Pages",
    date: "January 31, 2024",
    excerpt: "Starting the year with some incredible reads! From fantasy epics to thoughtful memoirs, January set a high bar for my 2024 reading challenge.",
    readTime: "6 min read",
    books: [
      {
        title: "Klara and the Sun",
        author: "Kazuo Ishiguro",
        rating: 4,
        thoughts: "Ishiguro's writing is so beautifully understated. Seeing the world through Klara's perspective was both heartbreaking and illuminating. The themes of love, sacrifice, and what it means to be human really stayed with me."
      },
      {
        title: "Project Hail Mary",
        author: "Andy Weir",
        rating: 5,
        thoughts: "What a wild, wonderful ride! Weir's humor and scientific creativity make this such an engaging read. I found myself genuinely caring about Grace and rooting for him every step of the way. Pure joy to read!"
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
              Monthly Book Reviews
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              Welcome to my little corner of the internet! ✨ Every month I share thoughts on the books that have captured my heart, made me think, or simply provided the perfect escape. Pull up a cozy chair and let's chat about stories! 📚
            </p>
          </div>

          {/* Book Reviews */}
          <div className="space-y-16">
            {bookReviews.map((post) => (
              <article key={post.id} className="space-y-6 pb-12 border-b border-border-subtle last:border-b-0">
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-sm text-text-muted">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium text-text-primary leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                
                {/* Book Cards */}
                <div className="grid gap-6 md:gap-8">
                  {post.books.map((book, bookIndex) => (
                    <div key={bookIndex} className="bg-surface rounded-lg p-6 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-medium text-text-primary">
                            {book.title}
                          </h3>
                          <p className="text-text-secondary">by {book.author}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <span 
                              key={i} 
                              className={`text-lg ${i < book.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {book.thoughts}
                      </p>
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