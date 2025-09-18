import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Ethics of AI in Data Science",
    date: "March 15, 2024",
    excerpt: "Exploring the moral implications of artificial intelligence and machine learning algorithms in modern data science applications.",
    readTime: "8 min read",
    content: `Artificial intelligence and machine learning have become integral parts of our daily lives, from recommendation systems to autonomous vehicles. However, with great power comes great responsibility. In this post, we'll explore the ethical considerations that data scientists and AI practitioners must navigate in today's rapidly evolving technological landscape.

The first concern is algorithmic bias. When we train machine learning models on historical data, we risk perpetuating existing biases and inequalities. For instance, hiring algorithms trained on past recruitment data may inadvertently discriminate against underrepresented groups if the historical hiring practices were biased.

Privacy is another critical concern. As we collect and analyze vast amounts of personal data, we must ensure that individual privacy rights are protected. This includes implementing proper data anonymization techniques and being transparent about data usage.

Finally, there's the question of accountability. When an AI system makes a decision that affects someone's life, who is responsible? The developer, the data scientist, the company, or the algorithm itself? These questions require careful consideration and ongoing dialogue between technologists, ethicists, and policymakers.`
  },
  {
    id: 2,
    title: "Building Sustainable Machine Learning Systems",
    date: "February 28, 2024",
    excerpt: "How to create ML systems that are environmentally conscious and computationally efficient without sacrificing performance.",
    readTime: "6 min read",
    content: `The environmental impact of machine learning is often overlooked in our rush to build more powerful models. Training large neural networks can consume enormous amounts of energy, contributing to carbon emissions and environmental degradation.

In this article, we'll explore strategies for building more sustainable ML systems. This includes techniques like model compression, efficient architectures, and green computing practices that can significantly reduce the environmental footprint of our AI systems while maintaining their effectiveness.`
  },
  {
    id: 3,
    title: "The Future of Human-AI Collaboration",
    date: "January 20, 2024",
    excerpt: "Understanding how humans and artificial intelligence can work together to solve complex problems more effectively than either could alone.",
    readTime: "5 min read",
    content: `Rather than replacing humans, the most successful AI systems are those that augment human capabilities. This post explores the principles of effective human-AI collaboration and how to design systems that leverage the strengths of both human intuition and machine efficiency.

We'll look at case studies from various fields, including healthcare diagnostics, creative industries, and scientific research, where this collaborative approach has led to breakthrough innovations.`
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
              Blog
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              Thoughts on data science, technology ethics, and the intersection of human intelligence with artificial intelligence.
            </p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="space-y-4 pb-12 border-b border-border-subtle last:border-b-0">
                <div className="space-y-2">
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
                
                <div className="prose prose-lg max-w-none">
                  <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {post.content}
                  </div>
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