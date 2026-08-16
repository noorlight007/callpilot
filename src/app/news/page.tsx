"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  AlertCircle, 
  BookOpen, 
  RefreshCw 
} from "lucide-react";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  isoDate: string;
  image: string;
  category: string;
}

function NewsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const postSlug = searchParams.get("post");

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [articleContent, setArticleContent] = useState<string | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState<string | null>(null);

  // Fetch articles list
  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/news");
      if (!res.ok) {
        throw new Error("Failed to fetch news feed");
      }
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setArticles(data.articles || []);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "No articles available.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Sync active article when postSlug changes
  useEffect(() => {
    if (!articles.length) return;

    if (postSlug) {
      const found = articles.find((a) => a.slug === postSlug);
      if (found) {
        setActiveArticle(found);
        fetchArticleDetail(found.id);
      } else {
        // Unknown slug, clear active article and reset URL
        setActiveArticle(null);
        setArticleContent(null);
        router.replace("/news");
      }
    } else {
      setActiveArticle(null);
      setArticleContent(null);
    }
  }, [postSlug, articles]);

  const handleReadArticle = (slug: string) => {
    router.push(`/news?post=${slug}`);
  };

  // Fetch individual article content
  const fetchArticleDetail = async (id: string) => {
    try {
      setDetailLoading(true);
      setDetailError(null);
      const res = await fetch(`/api/news/${id}`);
      if (!res.ok) {
        throw new Error("Failed to load article content");
      }
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setArticleContent(data.content || "");
      
      // Update page title dynamically for SEO if in browser environment
      if (typeof window !== "undefined") {
        const found = articles.find((a) => a.id === id);
        if (found) {
          document.title = `${found.title} | CallPilot News & Insights`;
        }
      }
    } catch (err: any) {
      console.error(err);
      setDetailError("Could not retrieve article content. Please try again later.");
    } finally {
      setDetailLoading(false);
    }
  };

  // Restore page title when leaving detail view
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        document.title = "News & Insights | CallPilot";
      }
    };
  }, []);

  useEffect(() => {
    if (!postSlug && typeof window !== "undefined") {
      document.title = "News & Insights | CallPilot";
    }
  }, [postSlug]);

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "AI Screening":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20";
      case "Automation":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20";
      case "Integrations":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20";
      case "AI Voice Calling":
        return "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20";
      case "Compliance":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20";
      default:
        return "bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/20";
    }
  };

  // 1. Loading Skeleton for Articles Grid
  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-card rounded-2xl border border-border overflow-hidden animate-pulse">
              <div className="aspect-video bg-alt" />
              <div className="p-6 space-y-4">
                <div className="h-4 w-1/4 bg-alt rounded" />
                <div className="h-6 w-3/4 bg-alt rounded" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-alt rounded" />
                  <div className="h-4 w-5/6 bg-alt rounded" />
                </div>
                <div className="h-10 w-1/3 bg-alt rounded pt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 2. Error State / Empty State (Do not break layout, show message)
  if (error || articles.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-md mx-auto text-center bg-card p-8 rounded-2xl border border-border shadow-sm">
          <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h3 className="text-xl font-bold text-headline mb-2">Feed Unavailable</h3>
          <p className="text-body text-sm mb-6">
            {error || "No articles available."}
          </p>
          <Button variant="cta" onClick={fetchArticles} className="inline-flex items-center gap-2">
            <RefreshCw className="w-4 h-4" /> Try Again
          </Button>
        </div>
      </div>
    );
  }

  // 3. Single Article Reading View
  if (activeArticle) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Back Navigation */}
          <Button
            variant="ghost"
            onClick={() => router.push("/news")}
            className="mb-8 hover:bg-alt text-body font-medium inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Button>

          {detailLoading ? (
            <div className="space-y-6 animate-pulse">
              <div className="h-4 w-1/6 bg-alt rounded" />
              <div className="h-10 w-4/5 bg-alt rounded" />
              <div className="h-6 w-1/3 bg-alt rounded" />
              <div className="aspect-[21/9] bg-alt rounded-2xl" />
              <div className="space-y-4 pt-4">
                <div className="h-4 w-full bg-alt rounded" />
                <div className="h-4 w-full bg-alt rounded" />
                <div className="h-4 w-5/6 bg-alt rounded" />
              </div>
            </div>
          ) : detailError ? (
            <div className="bg-card rounded-2xl border border-border p-8 text-center">
              <p className="text-destructive font-medium mb-4">{detailError}</p>
              <Button onClick={() => fetchArticleDetail(activeArticle.id)} variant="outline">
                Retry loading content
              </Button>
            </div>
          ) : (
            <article className="animate-fade-in">
              <header className="mb-8">
                <div className="flex flex-wrap gap-3 items-center mb-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${getCategoryStyles(activeArticle.category)}`}>
                    {activeArticle.category}
                  </span>
                  <span className="text-xs text-muted-text flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(activeArticle.isoDate || activeArticle.date)}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-headline leading-tight tracking-tight mb-4">
                  {activeArticle.title}
                </h1>
              </header>

              {activeArticle.image && (
                <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl border border-border mb-8 shadow-sm">
                  <img
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                    width={1200}
                    height={514}
                  />
                </div>
              )}

              {/* Render article body safely using tailwind prose styling */}
              <div 
                className="prose prose-blue dark:prose-invert max-w-none prose-headings:text-headline prose-p:text-body prose-a:text-accent prose-strong:text-headline prose-li:text-body prose-headings:font-bold"
                dangerouslySetInnerHTML={{ __html: articleContent || "" }}
              />
            </article>
          )}
        </div>
      </div>
    );
  }

  // 4. Default Grid View
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className="group bg-card rounded-2xl border border-border-card shadow-sm overflow-hidden card-hover flex flex-col justify-between"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div>
                {/* Image Section */}
                {article.image && (
                  <div className="aspect-video w-full overflow-hidden border-b border-border bg-alt relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      loading="lazy"
                      width={800}
                      height={450}
                    />
                  </div>
                )}

                {/* Info Section */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold ${getCategoryStyles(article.category)}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-text flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(article.isoDate || article.date)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-headline tracking-tight leading-snug mb-3 group-hover:text-accent transition-colors duration-200">
                    {article.title}
                  </h3>

                  <p className="text-sm text-body line-clamp-3 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Section */}
              <div className="px-6 pb-6 pt-0">
                <Button
                  onClick={() => handleReadArticle(article.slug)}
                  variant="ctaSecondary"
                  className="w-full justify-between items-center group/btn py-2.5"
                >
                  <span className="inline-flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Read Article
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Wrap inside Suspense for search params dynamic usage (prevents build-time deoptimization errors)
function NewsLoadingState() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-body text-sm font-medium animate-pulse">Loading news feed...</p>
      </div>
    </div>
  );
}

export default function NewsInsightsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <div>
        <Header />

        <main className="bg-background">
          {/* Header section */}
          <div className="pt-32 lg:pt-40 pb-12 border-b border-border bg-alt relative overflow-hidden">
            {/* Background glowing gradients for premium look */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider mt-2">
                  Updates & Insights
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-headline tracking-tight mb-4">
                  News & <span className="accent-text">Insights</span>
                </h1>
                <p className="text-lg text-body max-w-2xl mx-auto">
                  Stay updated with the latest trends, news, and insights from CallPilot.
                </p>
              </div>
            </div>
          </div>

          <Suspense fallback={<NewsLoadingState />}>
            <NewsContent />
          </Suspense>
        </main>
      </div>

      <Footer />
    </div>
  );
}
