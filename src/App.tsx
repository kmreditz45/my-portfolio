import { useState, useEffect } from 'react';
import {
  Play,
  Instagram,
  Mail,
  ArrowDown,
  Film,
  Youtube,
  Clapperboard,
  Tv,
  Sparkles,
  Palette,
  Volume2,
  ChevronUp,
  X,
  Clock,
} from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  categories: ('reels' | 'cinematic' | 'commercial' | 'color-grading')[];
  videoUrl: string;
  description: string;
  duration: string;
  tools: string[];
}

const portfolioVideos: VideoItem[] = [
  {
    id: 'boomi-collab',
    title: "Boomi Reels Editing",
    categories: ['reels'],
    videoUrl: "/videos/01.Reel's Editing videos/@_iam_boomi_.mp4",
    description: "Highly engaging Reels edit for @_iam_boomi_ featuring eye-catching captions, sync-to-beat audio editing, and high-retention cuts.",
    duration: "0:30",
    tools: ['DaVinci Resolve', 'CapCut', 'Sound Design']
  },
  {
    id: 'podcast-kmr',
    title: "Podcast Talking Head",
    categories: ['reels'],
    videoUrl: "/videos/04.Podcast & Talking head/edited by kmr.mp4",
    description: "Talking head podcast edit focusing on clean cuts, multi-cam switches, motion graphics title cards, and enhanced audio clarity.",
    duration: "1:00",
    tools: ['Premiere Pro', 'Audition']
  },
  {
    id: 'podcast-pdsu',
    title: "Pdsu Podcast Segment",
    categories: ['reels'],
    videoUrl: "/videos/04.Podcast & Talking head/Pdsu.mp4",
    description: "Viral short-form podcast cut emphasizing zoom effects, keyframe animations, subtitles, and atmospheric backing tracks.",
    duration: "0:45",
    tools: ['DaVinci Resolve', 'CapCut']
  },
  {
    id: 'reels-lv-01',
    title: "Creative Reels Transition",
    categories: ['reels', 'color-grading'],
    videoUrl: "/videos/01.Reel's Editing videos/lv_0_20260705001157.mp4",
    description: "Fast-paced social media reel with complex speed ramping, motion blur transitions, and vivid color enhancements.",
    duration: "0:15",
    tools: ['CapCut', 'Color Grading']
  },
  {
    id: 'cinematic-rrrr',
    title: "Cinematic Short Film",
    categories: ['cinematic'],
    videoUrl: "/videos/03.Cinematic clip's/rrrr.mp4",
    description: "High-production-value cinematic short film utilizing slow-paced storytelling, grading, and rich ambient sound design.",
    duration: "2:30",
    tools: ['DaVinci Resolve', 'Color Grading']
  },
  {
    id: 'tripti-builds',
    title: "Tripti Builds Promo",
    categories: ['commercial'],
    videoUrl: "/videos/04.Podcast & Talking head/tripti_builds.mp4",
    description: "Professional brand commercial for Tripti Builds featuring structural animations, voiceover mix, and modern brand design.",
    duration: "1:15",
    tools: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'before-after-color',
    title: "RAW vs Color Grading",
    categories: ['color-grading'],
    videoUrl: "/videos/02.Before & After (R2E)/lv_0_20260702213222.mp4",
    description: "Side-by-side color matching and exposure correction, showcasing the recovery of details from flat log profile to final delivery color space.",
    duration: "0:30",
    tools: ['DaVinci Resolve', 'Color Grading']
  },
  {
    id: 'tourist-places',
    title: "Travel Vlog Grading",
    categories: ['color-grading'],
    videoUrl: "/videos/05.Color grading/@tourist places.mp4",
    description: "Vibrant travel color grading with custom LUTs, color separation, and local exposure masks for cinematic depth.",
    duration: "0:45",
    tools: ['DaVinci Resolve']
  },
  {
    id: 'wedding-mood',
    title: "Wedding Mood Highlights",
    categories: ['cinematic'],
    videoUrl: "/videos/06.Wedding mood clip's/Clips final.mp4",
    description: "Slow-paced emotional wedding teaser utilizing soft warm grading, seamless wipes, and high-fidelity sound mixing.",
    duration: "3:00",
    tools: ['Premiere Pro', 'Color Grading']
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white font-inter">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark-900/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">
            KMR <span className="text-orange-500">Editz</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-sm text-gray-400 hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            KMR <span className="text-orange-500">Editz</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-4 animate-slide-up">
            Professional Video Editor
          </p>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Creating Cinematic Videos That Tell Stories.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#portfolio"
              className="w-full sm:w-auto bg-white text-dark-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>
          <a
            href="#about"
            className="inline-flex items-center gap-2 mt-16 text-gray-500 hover:text-white transition-colors animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-dark-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="text-orange-500">Me</span>
          </h2>
          <div className="bg-dark-700 rounded-2xl p-8 md:p-10 shadow-xl border border-dark-600">
            <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center text-balance">
              I'm a professional video editor passionate about creating high-quality, cinematic videos
              for creators, businesses, and brands. My expertise lies in seamless transitions, clean editing,
              and producing highly engaging content tailored for social media and video platforms.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed text-center text-balance">
              Whether you need a commercial promo, a viral social media reel, or professional long-form content,
              I turn raw footage into compelling visual stories that captivate audiences and deliver impact.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Professional video editing services tailored to your needs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Instagram, title: 'Instagram Reels Editing', desc: 'Engaging short-form content' },
              { icon: Youtube, title: 'YouTube Video Editing', desc: 'Professional long-form videos' },
              { icon: Clapperboard, title: 'Shorts Editing', desc: 'Viral short-form videos' },
              { icon: Tv, title: 'Commercial Video Editing', desc: 'Brand promotional content' },
              { icon: Sparkles, title: 'Motion Graphics', desc: 'Custom animations & effects' },
              { icon: Palette, title: 'Color Grading', desc: 'Cinematic color correction' },
              { icon: Volume2, title: 'Sound Design', desc: 'Professional audio mixing' },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-dark-800 hover:bg-dark-700 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <service.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-dark-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-orange-500">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A selection of my recent video editing work
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { id: 'all', title: 'All Work' },
              { id: 'reels', title: 'Reels' },
              { id: 'cinematic', title: 'Cinematic' },
              { id: 'commercial', title: 'Commercial' },
              { id: 'color-grading', title: 'Color Grading' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-dark-700 text-gray-400 hover:bg-dark-600 hover:text-white'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {portfolioVideos
              .filter((video) => activeFilter === 'all' || video.categories.includes(activeFilter as any))
              .map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  onMouseEnter={(e) => {
                    const videoEl = e.currentTarget.querySelector('video');
                    if (videoEl) {
                      videoEl.play().catch((err) => console.log('Autoplay blocked:', err));
                    }
                  }}
                  onMouseLeave={(e) => {
                    const videoEl = e.currentTarget.querySelector('video');
                    if (videoEl) {
                      videoEl.pause();
                      videoEl.currentTime = 0;
                    }
                  }}
                  className="group relative aspect-video bg-dark-700 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-orange-500/5 transition-all duration-300"
                >
                  <video
                    src={video.videoUrl}
                    preload="metadata"
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
                  
                  {/* Play Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/40 transition-all duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 text-orange-500 fill-orange-500" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
                    {video.duration}
                  </div>
                  
                  {/* Video Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex gap-1.5 mb-1.5 flex-wrap">
                      {video.categories.map((cat, idx) => (
                        <span key={idx} className="text-[10px] text-orange-400 font-bold uppercase tracking-wider bg-orange-500/10 px-1.5 py-0.5 rounded">
                          {cat.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-base font-semibold text-white group-hover:text-orange-400 transition-colors line-clamp-1">
                      {video.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/50 rounded-xl transition-colors duration-300" />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Tools and expertise I bring to every project
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Film, title: 'CapCut' },
              { icon: Clapperboard, title: 'DaVinci Resolve' },
              { icon: Sparkles, title: 'Motion Graphics' },
              { icon: Palette, title: 'Color Grading' },
              { icon: Volume2, title: 'Sound Design' },
            ].map((skill, index) => (
              <div
                key={index}
                className="group bg-dark-800 hover:bg-dark-700 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <skill.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="font-medium text-white text-sm">{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-dark-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Ready to start your project? Let's work together
          </p>
          <div className="max-w-md mx-auto bg-dark-700 p-8 rounded-2xl border border-dark-600 shadow-xl">
            <h3 className="text-xl font-semibold mb-6 text-center">Contact Details</h3>
            <div className="space-y-6">
              <a
                href="https://wa.me/916384517716"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group max-w-sm mx-auto"
              >
                <div className="w-12 h-12 bg-dark-600 rounded-lg flex items-center justify-center group-hover:bg-dark-500 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-500 fill-orange-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.004 2c-5.51 0-9.996 4.486-9.996 9.996 0 1.764.46 3.42 1.332 4.888L2 22l5.304-1.392a9.92 9.92 0 0 0 4.7 1.186c5.512 0 10.002-4.488 10.002-9.998C22.006 6.486 17.516 2 12.004 2zm0 18.294c-1.572 0-3.11-.42-4.46-1.218l-.32-.19-3.152.828.842-3.076-.208-.332a8.234 8.234 0 0 1-1.266-4.312c0-4.57 3.716-8.286 8.286-8.286 4.568 0 8.284 3.716 8.284 8.288 0 4.57-3.716 8.286-8.286 8.286zM15.42 13.62c-.186-.094-1.102-.544-1.272-.606-.172-.062-.296-.094-.422.094-.124.186-.484.606-.592.73-.108.122-.218.138-.404.044a5.1 5.1 0 0 1-1.5-1.134c-.218-.194-.436-.426-.582-.676a.304.304 0 0 1 .046-.33c.124-.122.274-.316.37-.436.096-.12.128-.204.192-.34.064-.136.032-.254-.016-.348-.048-.094-.422-1.018-.578-1.394-.152-.366-.308-.316-.422-.322-.108-.006-.232-.006-.356-.006a.685.685 0 0 0-.498.232c-.172.186-.656.642-.656 1.564 0 .922.67 1.812.764 1.938.094.124 1.318 2.012 3.192 2.822.446.192.794.308 1.066.394.452.144.862.124 1.186.076.36-.054 1.102-.45 1.258-.886.154-.434.154-.806.108-.884-.046-.078-.17-.124-.356-.218z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-white group-hover:text-orange-500 transition-colors">
                    +91 6384517716
                  </p>
                </div>
              </a>
              <a
                href="https://instagram.com/kmr_editz_45"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group max-w-sm mx-auto"
              >
                <div className="w-12 h-12 bg-dark-600 rounded-lg flex items-center justify-center group-hover:bg-dark-500 transition-colors flex-shrink-0">
                  <Instagram className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Instagram</p>
                  <p className="text-white group-hover:text-orange-500 transition-colors">
                    @kmr_editz_45
                  </p>
                </div>
              </a>
              <a
                href="mailto:kmrdesigns45@gmail.com"
                className="flex items-center gap-4 group max-w-sm mx-auto"
              >
                <div className="w-12 h-12 bg-dark-600 rounded-lg flex items-center justify-center group-hover:bg-dark-500 transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white group-hover:text-orange-500 transition-colors">
                    kmrdesigns45@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-dark-700">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">KMR Editz &copy; 2026</p>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/916384517716"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-dark-700 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors text-white"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.004 2c-5.51 0-9.996 4.486-9.996 9.996 0 1.764.46 3.42 1.332 4.888L2 22l5.304-1.392a9.92 9.92 0 0 0 4.7 1.186c5.512 0 10.002-4.488 10.002-9.998C22.006 6.486 17.516 2 12.004 2zm0 18.294c-1.572 0-3.11-.42-4.46-1.218l-.32-.19-3.152.828.842-3.076-.208-.332a8.234 8.234 0 0 1-1.266-4.312c0-4.57 3.716-8.286 8.286-8.286 4.568 0 8.284 3.716 8.284 8.288 0 4.57-3.716 8.286-8.286 8.286zM15.42 13.62c-.186-.094-1.102-.544-1.272-.606-.172-.062-.296-.094-.422.094-.124.186-.484.606-.592.73-.108.122-.218.138-.404.044a5.1 5.1 0 0 1-1.5-1.134c-.218-.194-.436-.426-.582-.676a.304.304 0 0 1 .046-.33c.124-.122.274-.316.37-.436.096-.12.128-.204.192-.34.064-.136.032-.254-.016-.348-.048-.094-.422-1.018-.578-1.394-.152-.366-.308-.316-.422-.322-.108-.006-.232-.006-.356-.006a.685.685 0 0 0-.498.232c-.172.186-.656.642-.656 1.564 0 .922.67 1.812.764 1.938.094.124 1.318 2.012 3.192 2.822.446.192.794.308 1.066.394.452.144.862.124 1.186.076.36-.054 1.102-.45 1.258-.886.154-.434.154-.806.108-.884-.046-.078-.17-.124-.356-.218z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/kmr_editz_45"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-dark-700 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:kmrdesigns45@gmail.com"
              className="w-10 h-10 bg-dark-700 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Video Lightbox Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Player */}
            <div className="flex-1 bg-black flex items-center justify-center aspect-video md:aspect-auto min-h-[300px] md:min-h-[500px]">
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Metadata Panel */}
            <div className="w-full md:w-80 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-dark-700 bg-dark-800">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold px-2 py-1 rounded bg-orange-500/10 text-orange-500 uppercase tracking-wider">
                    {selectedVideo.categories.map((c) => c.replace('-', ' ')).join(' / ')}
                  </span>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="text-gray-400 hover:text-white transition-colors p-1"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{selectedVideo.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {selectedVideo.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>Duration: {selectedVideo.duration}</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">
                      Software & Skills
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedVideo.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-dark-700 border border-dark-600 text-gray-300 px-2 py-1 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-dark-700">
                <a
                  href="#contact"
                  onClick={() => setSelectedVideo(null)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm text-center"
                >
                  Hire Me for similar work
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
