export default function CTA() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-24 -top-24 w-72 h-72 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -left-24 -bottom-24 w-72 h-72 bg-white/10 rounded-full blur-2xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Start learning music today</h2>
            <p className="mt-2 text-white/90 max-w-2xl">Unlimited courses, practice tools, and community sessions. Cancel anytime.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-white/90 transition">Get MuseLearn Pro</a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">Explore free lessons</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
