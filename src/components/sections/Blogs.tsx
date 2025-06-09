
const Blogs = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for architecting large-scale React applications that can grow with your team and user base.",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop",
      tags: ["React", "JavaScript", "Architecture"]
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that will shape the future of web development in the next decade.",
      date: "March 8, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop",
      tags: ["Web Dev", "Technology", "Future"]
    },
    {
      title: "Mastering TypeScript in 2024",
      excerpt: "A comprehensive guide to advanced TypeScript features and how they can improve your development workflow.",
      date: "February 28, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      tags: ["TypeScript", "JavaScript", "Development"]
    },
    {
      title: "Database Design Best Practices",
      excerpt: "Essential principles for designing efficient and scalable database schemas for modern applications.",
      date: "February 20, 2024",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=600&h=300&fit=crop",
      tags: ["Database", "SQL", "Design"]
    }
  ];

  return (
    <section id="blogs" className="min-h-screen py-20">
      <div className="w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Blogs</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="text-primary font-medium hover:text-primary/80 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
