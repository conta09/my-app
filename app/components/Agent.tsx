"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  Sparkles,
  Zap,
  BrainCircuit,
  X,
  Maximize2,
  Minimize2,
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "agent";
  timestamp: Date;
}

const Agent = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm the AI assistant. Ask me anything about my skills, experience, or background.",
      sender: "agent",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        content: input,
        sender: "user",
        timestamp: new Date(),
      },
    ]);

    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          content:
            "This response will be generated from my resume once the AI backend is connected.",
          sender: "agent",
          timestamp: new Date(),
        },
      ]);
      setIsLoading(false);
    }, 900);
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        content:
          "Hello! I'm the AI assistant. Ask me anything about my portfolio.",
        sender: "agent",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <section className="relative py-16 px-4 md:px-8" id="agent">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <BrainCircuit className="w-7 h-7 text-amber-400" />
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              AI Assistant
            </h2>
            <Sparkles className="w-6 h-6 text-amber-400" />
          </div>
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm">
            Interact with my AI assistant to learn more about my skills,
            experience, and background
          </p>
        </div>

        {/* Chat Container */}
        <div
          className={`relative bg-gradient-to-br from-neutral-900 via-black to-black
          backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-2xl
          transition-all duration-300
          ${isExpanded ? "h-[580px]" : "h-[500px]"}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-black" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">
                  Portfolio Assistant
                </h3>
                <p className="text-xs text-neutral-300">
                  Online • Ready to help
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 hover:bg-neutral-800 rounded-lg transition"
              >
                {isExpanded ? (
                  <Minimize2 className="w-4 h-4 text-neutral-300" />
                ) : (
                  <Maximize2 className="w-4 h-4 text-neutral-300" />
                )}
              </button>
              <button
                onClick={clearChat}
                className="p-2 hover:bg-neutral-800 rounded-lg transition"
              >
                <X className="w-4 h-4 text-neutral-300" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[calc(100%-140px)] overflow-y-auto p-5 space-y-5">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.sender === "user" ? "justify-end" : ""
                }`}
              >
                {message.sender === "agent" && (
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-black" />
                  </div>
                )}

                <div
                  className={`max-w-[75%] rounded-xl px-4 py-3 text-sm leading-relaxed
                  ${
                    message.sender === "user"
                      ? "bg-amber-500/20 border border-amber-500/30 text-white"
                      : "bg-neutral-800 border border-neutral-700 text-neutral-200"
                  }`}
                >
                  {message.content}
                </div>

                {message.sender === "user" && (
                  <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-neutral-300" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <Bot className="w-4 h-4" />
                Thinking…
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-5 pb-5 pt-3 border-t border-neutral-800">
            <form onSubmit={handleSend} className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about skills, experience, projects…"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-amber-500/30
                  text-sm text-white placeholder-neutral-400"
                  disabled={isLoading}
                />
                <Zap className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              </div>
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-5 py-3 bg-amber-500 rounded-xl
                text-black text-sm font-medium transition hover:bg-amber-400 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agent;
