
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { ArrowLeft, User, Calendar } from 'lucide-react';
import { useEffect } from 'react';

const BlogPost = () => {
    const { id } = useParams();
    const post = posts.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) return <div className="container section text-center">Post not found</div>;

    return (
        <div className="blog-post-page">
            <div className="container section" style={{ paddingTop: '120px' }}>
                <Link to="/blog" className="back-link">
                    <ArrowLeft size={20} /> Back to Blog
                </Link>

                <article className="blog-article">
                    <header className="article-header">
                        <h1>{post.title}</h1>
                        <div className="meta">
                            <span><Calendar size={16} /> {post.date}</span>
                            <span><User size={16} /> Golden Island Team</span>
                        </div>
                    </header>

                    <div className="featured-image">
                        <img src={post.image} alt={post.title} />
                    </div>

                    <div
                        className="article-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </div>

            <style>{`
                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    color: var(--color-gray-300);
                    margin-bottom: 30px;
                    transition: color 0.3s;
                }
                .back-link:hover { color: var(--color-gold); }
                
                .blog-article {
                    max-width: 800px;
                    margin: 0 auto;
                    background: var(--color-darker);
                    padding: 40px;
                    border-radius: 20px;
                    border: 1px solid rgba(255,255,255,0.05);
                }
                
                .article-header h1 {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    line-height: 1.2;
                }
                
                .meta {
                    display: flex;
                    gap: 20px;
                    color: var(--color-gray-500);
                    margin-bottom: 30px;
                    font-size: 0.9rem;
                }
                .meta span {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                
                .featured-image {
                    margin-bottom: 30px;
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                .article-content {
                    color: var(--color-gray-100);
                    line-height: 1.8;
                }
                
                .article-content h3 {
                    color: var(--color-gold);
                    font-size: 1.5rem;
                    margin: 30px 0 15px;
                }
                
                .article-content p {
                    margin-bottom: 20px;
                }
                
                .article-content a {
                    color: var(--color-gold);
                    text-decoration: underline;
                }
                
                @media (max-width: 768px) {
                    .blog-article { padding: 20px; }
                    .article-header h1 { font-size: 1.8rem; }
                }
            `}</style>
        </div>
    );
};

export default BlogPost;
