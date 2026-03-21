import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Youtube, Linkedin, Twitter, Globe } from 'lucide-react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const links = [
    {
      id: 1,
      name: 'Instagram',
      url: 'https://instagram.com/bearmediacreative',
      icon: Instagram,
      color: 'from-pink-500 to-rose-500',
      delay: 0.1,
    },
    {
      id: 2,
      name: 'TikTok',
      url: 'https://tiktok.com/@bearmediacreative',
      icon: Twitter,
      color: 'from-black to-gray-800',
      delay: 0.2,
    },
    {
      id: 3,
      name: 'YouTube',
      url: 'https://youtube.com/@bearmediacreative',
      icon: Youtube,
      color: 'from-red-600 to-red-500',
      delay: 0.3,
    },
    {
      id: 4,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/bear-media',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-500',
      delay: 0.4,
    },
    {
      id: 5,
      name: 'Facebook',
      url: 'https://facebook.com/bearmediacreative',
      icon: Facebook,
      color: 'from-blue-700 to-blue-600',
      delay: 0.5,
    },
    {
      id: 6,
      name: 'Bear Media',
      url: 'https://bear-media.com',
      icon: Globe,
      color: 'from-amber-500 to-orange-500',
      delay: 0.6,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="mb-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
              Bear Media
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-400 text-lg mt-6 font-light">Creative services • Web • Video • Photography • AI</p>
        </div>

        {/* Links Grid */}
        <div className="w-full max-w-md space-y-4 mb-12">
          {links.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: isLoaded ? `${link.delay}s` : '0s' }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg`}></div>
                
                {/* Button */}
                <div className="relative bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 group-hover:border-gray-600 rounded-xl p-4 flex items-center gap-4 transition-all duration-300 group-hover:translate-y-[-2px]">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${link.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-white font-semibold text-lg group-hover:text-white transition-colors">{link.name}</p>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Connect with us</p>
                  </div>

                  <div className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>© 2026 Bear Media. All links in one place.</p>
        </div>
      </div>
    </div>
  );
}
