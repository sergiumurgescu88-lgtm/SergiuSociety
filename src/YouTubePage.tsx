import React from 'react';
import { ArrowLeft, Play, Eye, Clock } from 'lucide-react';

interface YouTubePageProps {
  onClose: () => void;
}

const VIDEOS = [
  { id: "1", title: "The Most Overlooked $10K/M Business Anyone Can Start", views: "2.1M", ago: "8 months ago", duration: "34:17", ytId: "dQw4w9WgXcQ" },
  { id: "2", title: "The Most Profitable One-Man Business You've Never Heard Of", views: "1.2M", ago: "2 months ago", duration: "32:38", ytId: "dQw4w9WgXcQ" },
  { id: "3", title: "6 Ways to Make Money With the New GPT Agent (It Blew My Mind)", views: "586K", ago: "8 months ago", duration: "39:57", ytId: "dQw4w9WgXcQ" },
  { id: "4", title: "He Watched This Channel and Made $32K in His First 2 Months", views: "569K", ago: "5 months ago", duration: "42:46", ytId: "dQw4w9WgXcQ" },
  { id: "5", title: "How I Make $35k/Month With Other People's Content (Legally)", views: "563K", ago: "2 months ago", duration: "23:43", ytId: "dQw4w9WgXcQ" },
  { id: "6", title: "He Asked AI To Make Money. It Did.", views: "441K", ago: "2 weeks ago", duration: "30:46", ytId: "dQw4w9WgXcQ" },
  { id: "7", title: "I Tried the Costco Gold Hack (How Much I Actually Made)", views: "432K", ago: "3 months ago", duration: "10:02", ytId: "dQw4w9WgXcQ" },
  { id: "8", title: "How to Start Reselling (Even With $0 in the Bank)", views: "426K", ago: "8 months ago", duration: "1:02:13", ytId: "dQw4w9WgXcQ" },
  { id: "9", title: "\"It's Not That Easy?\" Sam Launched Overnight to Prove It Is", views: "410K", ago: "10 months ago", duration: "26:58", ytId: "dQw4w9WgXcQ" },
  { id: "10", title: "She Makes $1k/Day Sending Letters", views: "364K", ago: "1 month ago", duration: "53:16", ytId: "dQw4w9WgXcQ" },
  { id: "11", title: "The Most Profitable Local Business Everyone Overlooks", views: "309K", ago: "8 months ago", duration: "50:57", ytId: "dQw4w9WgXcQ" },
  { id: "12", title: "25 ChatGPT Hacks You Need to Know in 2026 (Profit, Become a Pro!)", views: "297K", ago: "10 months ago", duration: "19:51", ytId: "dQw4w9WgXcQ" },
  { id: "13", title: "The Most Overlooked Way to Make Money On the Internet", views: "283K", ago: "11 months ago", duration: "52:31", ytId: "dQw4w9WgXcQ" },
  { id: "14", title: "40 Ways to Make $400,000 from Unwanted Land", views: "247K", ago: "2 months ago", duration: "43:59", ytId: "dQw4w9WgXcQ" },
  { id: "15", title: "Stop Buying Things. Start Buying Assets that Pay for Themselves", views: "235K", ago: "3 weeks ago", duration: "37:25", ytId: "dQw4w9WgXcQ" },
  { id: "16", title: "This $15K/Person Grant Feels Like a Cheat Code", views: "223K", ago: "7 months ago", duration: "38:44", ytId: "dQw4w9WgXcQ" },
  { id: "17", title: "Forget Dropshipping. This Side Hustle Is 10x Easier (and Smarter)", views: "211K", ago: "7 months ago", duration: "35:19", ytId: "dQw4w9WgXcQ" },
  { id: "18", title: "The Easiest $3K/Day Business Nobody Is Talking About", views: "192K", ago: "1 month ago", duration: "46:41", ytId: "dQw4w9WgXcQ" },
  { id: "19", title: "The Most Passive Online Business No One Talks About", views: "179K", ago: "9 months ago", duration: "34:22", ytId: "dQw4w9WgXcQ" },
  { id: "20", title: "I Started an Online Business in 56 Minutes (Beginner Friendly)", views: "174K", ago: "8 months ago", duration: "27:36", ytId: "dQw4w9WgXcQ" },
  { id: "21", title: "The Most Hands-Off Side Hustle Anyone Can Copy", views: "173K", ago: "6 months ago", duration: "1:14:19", ytId: "dQw4w9WgXcQ" },
  { id: "22", title: "This Business Makes Vending Machines Look Dumb", views: "170K", ago: "2 months ago", duration: "1:14:43", ytId: "dQw4w9WgXcQ" },
  { id: "23", title: "She Buys $1 Pallets And Sells Them For $5,000 (30 Mins/Day)", views: "169K", ago: "3 months ago", duration: "50:05", ytId: "dQw4w9WgXcQ" },
  { id: "24", title: "If We Had to Make $1M Fast, We'd Start These Businesses", views: "154K", ago: "8 months ago", duration: "1:01:07", ytId: "dQw4w9WgXcQ" },
  { id: "25", title: "Watch Me Build an AI Agency in 24 Minutes", views: "145K", ago: "4 months ago", duration: "24:31", ytId: "dQw4w9WgXcQ" },
  { id: "26", title: "The Best Way to Clone These $1M+ Online Businesses (Legally)", views: "143K", ago: "6 months ago", duration: "25:00", ytId: "dQw4w9WgXcQ" },
  { id: "27", title: "Facebook Ads For Beginners: Complete Guide (2026)", views: "142K", ago: "9 months ago", duration: "46:19", ytId: "dQw4w9WgXcQ" },
  { id: "28", title: "The 4 Best Rural Side Hustles for 2026", views: "139K", ago: "5 months ago", duration: "33:44", ytId: "dQw4w9WgXcQ" },
];

const YouTubePage: React.FC<YouTubePageProps> = ({ onClose }) => {
  const handleVideoClick = (title: string) => {
    // Search for the video on YouTube by title
    const query = encodeURIComponent(`Chris Koerner ${title}`);
    window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onClose} 
            className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white border-none rounded-xl px-5 py-2.5 font-bold text-sm cursor-pointer shadow-lg hover:shadow-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Înapoi
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
              <Play className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <h1 className="text-lg font-black text-slate-900">🎬 YouTube Recomandat</h1>
              <p className="text-xs text-slate-500">The Koerner Office · Top 28 videouri</p>
            </div>
          </div>
          <a 
            href="https://www.youtube.com/@thekoerneroffice" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-red-600 text-white rounded-xl px-4 py-2.5 font-bold text-sm hover:bg-red-700 transition-all"
          >
            <Play className="w-4 h-4 fill-white" /> Abonează-te
          </a>
        </div>
      </div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VIDEOS.map((video) => (
            <button
              key={video.id}
              onClick={() => handleVideoClick(video.title)}
              className="group text-left bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Play className="w-12 h-12 text-white/30 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300 z-20 fill-current" />
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-0.5 rounded z-20">
                  {video.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-10 font-black text-white">▶</div>
                </div>
              </div>
              {/* Info */}
              <div className="p-3.5">
                <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {video.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {video.ago}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="mt-12 text-center">
          <a 
            href="https://www.youtube.com/@thekoerneroffice/videos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white rounded-2xl px-8 py-4 font-black text-base hover:bg-red-700 transition-all shadow-lg hover:shadow-xl"
          >
            <Play className="w-5 h-5 fill-white" /> Vezi toate videoclipurile pe YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default YouTubePage;
