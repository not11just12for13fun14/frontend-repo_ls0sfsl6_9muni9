import { Music, Gauge, Sparkles, Users } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Sparkles className="h-6 w-6 text-fuchsia-600" />,
      title: 'Interactive lessons',
      desc: 'Step-by-step guidance with playful visuals and instant feedback.'
    },
    {
      icon: <Gauge className="h-6 w-6 text-indigo-600" />,
      title: 'Progress tracking',
      desc: 'Personalized paths that adapt to your pace and goals.'
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: 'Community jams',
      desc: 'Join live sessions, share recordings, and get peer reviews.'
    },
    {
      icon: <Music className="h-6 w-6 text-rose-600" />,
      title: 'Multi-instrument',
      desc: 'Guitar, piano, singing, drums, music theory and more.'
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
