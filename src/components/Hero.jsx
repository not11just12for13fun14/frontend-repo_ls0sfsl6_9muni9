import Spline from '@splinetool/react-spline';
import { Play, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 lg:pt-36 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-fuchsia-400/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-400/20 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-white/50 text-sm text-gray-700">
              <Star className="h-4 w-4 text-amber-500" />
              Learn guitar, piano, vocals and more
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Master music with playful, modern lessons
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Interactive courses, real-time feedback, and a community that keeps you motivated. Start your musical journey today.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition shadow">
                Get Started
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/70 backdrop-blur border border-gray-200 hover:bg-white transition">
                <Play className="h-4 w-4 mr-2" />
                Watch Demo
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
                ))}
              </div>
              <span>Trusted by thousands of learners</span>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/40 bg-white/40 backdrop-blur">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
