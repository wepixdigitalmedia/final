import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, Repeat, ThumbsUp } from "lucide-react";

// In a real production app, you would fetch this from an API like 
// LinkedIn's official API or a service like PhantomBuster/SociableKit.
// For this frontend implementation, we simulate the feed structure based on the provided design.
const MOCK_LINKEDIN_POSTS = [
  {
    id: 1,
    content: "Three lessons I learned scaling from zero to 10,000 users:\n\n1. Product-market fit matters more than perfect code.\n2. Your first 100 users will teach you more than any MBA.\n3. Building in public creates accountability and attracts the right people.\n\nWhat's the most important lesson you've learned in your entrepreneurial journey?",
    timeAgo: "2 hours ago",
    likes: 487,
    comments: 63,
    reposts: 34,
    link: "https://www.linkedin.com/in/abdulnavas/"
  },
  {
    id: 2,
    content: "Highlights from this week's digital transformation workshop. Grateful to work with such innovative teams pushing boundaries in tech. 💡\n\n#DigitalTransformation #Innovation #TeamWork",
    timeAgo: "18 hours ago",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    likes: 523,
    comments: 41,
    reposts: 67,
    link: "https://www.linkedin.com/in/abdulnavas/"
  },
  {
    id: 3,
    content: "Quick tip for founders: Your cloud infrastructure decisions today will impact your scale tomorrow. Don't over-engineer early, but don't ignore architecture either. Find the balance. ⚖️",
    timeAgo: "2 days ago",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    likes: 298,
    comments: 35,
    reposts: 43,
    link: "https://www.linkedin.com/in/abdulnavas/"
  },
  {
    id: 4,
    content: "Just wrapped up an incredible AI implementation for a client. Watching their manual 4-hour process shrink to 15 minutes was pure magic. This is why I love what I do. 🚀",
    timeAgo: "5 hours ago",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    likes: 342,
    comments: 28,
    reposts: 45,
    link: "https://www.linkedin.com/in/abdulnavas/"
  },
  {
    id: 5,
    content: "New video: My complete app development workflow from idea to production in 2025 🎥\n\nCovered:\n✅ Rapid prototyping techniques\n✅ Tech stack decisions\n✅ Testing strategies\n✅ Deployment automation\n\nLink in comments 👇",
    timeAgo: "3 days ago",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    likes: 892,
    comments: 156,
    reposts: 112,
    link: "https://www.linkedin.com/in/abdulnavas/"
  }
];

export function LinkedInFeed() {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else setColumns(3);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Distribute posts into columns for masonry layout
  const getColumns = () => {
    const cols: typeof MOCK_LINKEDIN_POSTS[] = Array.from({ length: columns }, () => []);
    MOCK_LINKEDIN_POSTS.forEach((post, i) => {
      cols[i % columns].push(post);
    });
    return cols;
  };

  return (
    <div className="w-full">
      {/* Profile Header */}
      <Card className="mb-8 border-border shadow-sm overflow-hidden">
        <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border shrink-0 bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                alt="N Abdul Navas" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display font-semibold text-2xl">N Abdul Navas</h2>
              <p className="text-muted-foreground text-[0.9375rem] mt-1">Founder & CEO, Fashion brand expert and growth consultant</p>
              <div className="flex items-center gap-4 mt-3 text-[0.8125rem] text-muted-foreground justify-center md:justify-start">
                <span className="flex items-center gap-1">📍 Tirupur, India</span>
                <span className="flex items-center gap-1">👥 10,000+ followers</span>
              </div>
            </div>
          </div>
          <a 
            href="https://www.linkedin.com/in/abdulnavas/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-[#0a66c2] hover:bg-[#004182] text-white font-medium transition-colors text-sm w-full md:w-auto mt-2 md:mt-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            Follow
          </a>
        </CardContent>
      </Card>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {getColumns().map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-6">
            {column.map((post, postIndex) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (colIndex * 0.1) + (postIndex * 0.1) }}
              >
                <Card className="border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                  <div className="p-5 border-b border-border/50">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-3 items-center">
                        <img 
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                          alt="Avatar" 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-[0.9375rem] leading-none">N Abdul Navas</h3>
                          <p className="text-[0.8125rem] text-muted-foreground mt-1 whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] sm:max-w-xs cursor-default" title="Founder & CEO, Fashion brand expert and growth consultant">Founder & CEO, Fashion brand exp...</p>
                          <p className="text-xs text-muted-foreground/70 mt-0.5">{post.timeAgo}</p>
                        </div>
                      </div>
                      <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-[#0a66c2] hover:bg-[#0a66c2]/10 p-2 rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                    </div>
                    
                    <div className="text-[0.9375rem] whitespace-pre-wrap leading-relaxed">
                      {post.content}
                    </div>
                  </div>
                  
                  {post.image && (
                    <div className="w-full aspect-[4/3] relative overflow-hidden bg-muted">
                      <img src={post.image} alt="Post content" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  
                  <div className="px-5 py-3 bg-muted/30 flex items-center justify-between text-[0.8125rem] text-muted-foreground border-t border-border/50">
                    <button className="flex items-center gap-1.5 hover:text-foreground transition-colors group/btn">
                      <ThumbsUp size={16} className="group-hover/btn:-translate-y-0.5 transition-transform" /> {post.likes}
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-foreground transition-colors group/btn">
                      <MessageCircle size={16} className="group-hover/btn:scale-110 transition-transform" /> {post.comments}
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-foreground transition-colors group/btn">
                      <Repeat size={16} className="group-hover/btn:rotate-180 transition-transform duration-300" /> {post.reposts}
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
