
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import heroBg from '../assets/hero_bg.png';

const Blog = () => {
    return (
        <div className="blog-page">
            <div className="page-header" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="overlay"></div>
                <div className="container text-center relative z-10">
                    <h1 className="text-4xl font-bold text-white mb-4">Travel <span className="text-gold">Blog</span></h1>
                    <p className="text-gray-300">Expert tips and stories from the road.</p>
                </div>
            </div>

            <div className="container section">
                <div className="blog-grid">
                    {posts.map(post => (
                        <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
                            <div className="blog-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{post.date}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <span className="read-more">Read Article →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <style>{`
                .page-header {
                    height: 40vh;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.6);
                }
                .relative { position: relative; }
                .z-10 { z-index: 10; }
                
                .blog-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                }
                
                .blog-card {
                    background: var(--color-darker);
                    border-radius: 15px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.05);
                    transition: transform 0.3s ease;
                    display: block;
                }
                
                .blog-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--color-gold);
                }
                
                .blog-image {
                    height: 200px;
                    overflow: hidden;
                }
                .blog-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .blog-content {
                    padding: 20px;
                }
                
                .blog-date {
                    font-size: 0.8rem;
                    color: var(--color-gold);
                    display: block;
                    margin-bottom: 5px;
                }
                
                .blog-content h3 {
                    font-size: 1.2rem;
                    color: white;
                    margin-bottom: 10px;
                    line-height: 1.4;
                }
                
                .blog-content p {
                    color: var(--color-gray-300);
                    font-size: 0.9rem;
                    margin-bottom: 15px;
                }
                
                .read-more {
                    color: var(--color-gold);
                    font-size: 0.9rem;
                    font-weight: 600;
                }
            `}</style>
        </div>
    );
};

export default Blog;
