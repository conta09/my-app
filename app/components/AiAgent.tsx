"use client";

import { useState } from "react";
import { X, MessageCircle, Sparkles, Send } from "lucide-react";

export default function AIAgent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Robot Assistant - Amber/Orange Theme */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="
            relative
            w-20 h-20
            rounded-full
            bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
            flex items-center justify-center
            shadow-[0_10px_60px_-5px_rgba(245,158,11,0.4)]
            transition-all duration-300
            hover:shadow-[0_15px_80px_-10px_rgba(245,158,11,0.6)]
            hover:scale-105
            group
            border border-gray-700/50
            backdrop-blur-sm
          "
        >
          {/* Glow effect - Amber */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-sm group-hover:blur-md transition-all duration-500" />
          
          {/* Animated rings - Amber */}
          <div className="absolute inset-[-2px] rounded-full border border-amber-500/30 animate-ping" />
          
          {/* Robot icon with floating animation */}
          <div className="relative animate-float">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-sm" />
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-full p-2.5 border border-gray-600/50">
                <MessageCircle className="w-7 h-7 text-amber-300" />
              </div>
            </div>
            {/* Sparkle - Amber */}
            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-amber-400 animate-pulse" />
          </div>

          {/* Notification dot - Amber/Orange gradient */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full border-2 border-gray-900 animate-pulse" />
        </button>
      </div>

      {/* Modern Chat Interface - Amber/Orange Theme */}
      {open && (
        <div
          className="
            fixed bottom-32 right-8 z-50
            w-96
            rounded-2xl
            bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95
            shadow-[0_25px_100px_-20px_rgba(245,158,11,0.3)]
            backdrop-blur-xl
            border border-gray-700/50
            overflow-hidden
            animate-in fade-in slide-in-from-bottom-4 duration-300
          "
        >
          {/* Header */}
          <div className="relative p-6 border-b border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-gray-900" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">Neura AI</h3>
                <p className="text-sm text-gray-400">Always here to help</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-gray-800/50 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            {/* Connection status */}
            <div className="flex items-center gap-2 mt-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-gray-400">Online • Ready to assist</span>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-6">
            <div className="space-y-4">
              {/* AI Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 rounded-2xl rounded-tl-none p-4">
                    <p className="text-gray-200">
                      Hello! I&apos;m the AI assistant. Ask me anything about my portfolio.
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block ml-1">Just now</span>
                </div>
              </div>

              {/* Suggestions */}
              <div className="pt-4">
                <p className="text-sm text-gray-400 mb-3">Quick suggestions:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Work Experience",
                    "Curriculum Vitae",
                    "Best practices"
                  ].map((item) => (
                    <button
                      key={item}
                      className="px-3 py-2 text-sm bg-gray-800/50 hover:bg-amber-500/20 rounded-full border border-gray-700/50 text-gray-300 transition-colors hover:border-amber-500/30"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Message Neura AI..."
                  className="w-full bg-gray-800/30 border border-gray-700/50 rounded-xl py-3 px-4 pr-12 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg hover:opacity-90 transition-opacity">
                  <Send className="w-5 h-5 text-gray-900" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom gradient - Amber/Orange */}
          <div className="h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 animate-gradient-x" />
        </div>
      )}

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </>
  );
}