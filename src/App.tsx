import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DemoCard } from './components/DemoCard';
import {
  Sun,
  Moon,
  Languages,
  Zap,
  Diamond,
  Layers,
  GripHorizontal,
  MousePointer2,
  Box,
  GlassWater,
  Sparkles,
  Waves,
  Fingerprint,
  Ghost,
  Target
} from 'lucide-react';

function App() {
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fi' : 'en');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 p-6 md:p-12 font-sans selection:bg-indigo-500/30 transition-colors duration-500">
      {/* Header Controls */}
      <div className="max-w-7xl mx-auto flex justify-end gap-3 mb-8">
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 shadow-sm hover:bg-slate-50 dark:hover:bg-gray-800 transition-all flex items-center gap-2 px-4 font-medium text-sm text-slate-600 dark:text-gray-300"
        >
          <Languages className="w-4 h-4" />
          {i18n.language === 'en' ? 'FI' : 'EN'}
        </button>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 shadow-sm hover:bg-slate-50 dark:hover:bg-gray-800 transition-all flex items-center gap-2 px-4 font-medium text-sm text-slate-600 dark:text-gray-300"
        >
          {isDark ? (
            <>
              <Sun className="w-4 h-4 text-amber-500" />
              {t('themes.light')}
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-indigo-500" />
              {t('themes.dark')}
            </>
          )}
        </button>
      </div>

      <header className="mb-20 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-500 dark:to-pink-500 animate-gradient-x">
          {t('title')}
        </h1>
        <div className="space-y-2">
          <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            {t('subtitle')}
          </p>
          <p className="text-slate-400 dark:text-gray-500 text-sm">
            {t('hoverClick')}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* 1. Neumorphism */}
        <DemoCard
          title={t('effects.neumorphism.title')}
          description={t('effects.neumorphism.desc')}
          className="bg-slate-100 dark:bg-gray-900 border-none shadow-[10px_10px_20px_#e2e8f0,-10px_-10px_20px_#ffffff] dark:shadow-[10px_10px_20px_#080808,-10px_-10px_20px_#181818]"
          effectClass="hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors"
        >
          <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-gray-900 shadow-[5px_5px_10px_#e2e8f0,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#080808,-5px_-5px_10px_#181818] flex items-center justify-center">
            <Fingerprint className="w-8 h-8 text-slate-400 dark:text-gray-500" />
          </div>
        </DemoCard>

        {/* 2. Glassmorphism */}
        <DemoCard
          title={t('effects.glassmorphism.title')}
          description={t('effects.glassmorphism.desc')}
          effectClass="bg-indigo-500/5 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 group-hover:border-indigo-500/30 dark:group-hover:border-white/20 transition-colors"
          className="shadow-xl shadow-indigo-500/5"
        >
          <div className="p-4 bg-indigo-500/10 dark:bg-white/10 rounded-full border border-indigo-500/20 dark:border-white/20">
             <GlassWater className="w-8 h-8 text-indigo-500 dark:text-white" />
          </div>
        </DemoCard>

        {/* 3. Neon Cyberpunk */}
        <DemoCard
          title={t('effects.neon.title')}
          description={t('effects.neon.desc')}
          effectClass="bg-cyan-500/5 border border-cyan-500/20 group-hover:border-cyan-500 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all"
        >
           <button className="px-6 py-2 bg-transparent text-cyan-600 dark:text-cyan-400 border border-cyan-500/50 rounded-md font-bold hover:bg-cyan-500 hover:text-white dark:hover:text-black transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]">
             <Zap className="w-5 h-5" />
           </button>
        </DemoCard>

        {/* 4. Gradient Border */}
        <DemoCard
          title={t('effects.gradient.title')}
          description={t('effects.gradient.desc')}
          effectClass="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-30 group-hover:opacity-100 transition-opacity"
        >
             <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600 dark:from-pink-400 dark:to-indigo-400">
               <Diamond className="w-8 h-8 animate-bounce inline-block mr-2 text-pink-500" />
               PREMIUM
             </span>
        </DemoCard>

        {/* 5. Depth Stack */}
        <DemoCard
          title={t('effects.depth.title')}
          description={t('effects.depth.desc')}
          effectClass="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 shadow-[0_1px_1px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1),0_12px_24px_rgba(0,0,0,0.1)]"
        >
           <div className="p-6 bg-slate-100 dark:bg-gray-700 rounded-xl shadow-inner group-hover:-translate-y-3 transition-transform duration-500">
             <Layers className="w-8 h-8 text-slate-500 dark:text-gray-400" />
           </div>
        </DemoCard>

        {/* 6. Inset Glow */}
        <DemoCard
          title={t('effects.inset.title')}
          description={t('effects.inset.desc')}
          effectClass="bg-slate-100 dark:bg-gray-900 shadow-[inset_0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)] border border-slate-200 dark:border-gray-800"
        >
            <div className="w-full h-4 bg-slate-200 dark:bg-gray-950 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] p-1 overflow-hidden">
                <div className="h-full w-2/3 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)]" />
            </div>
        </DemoCard>

         {/* 7. Animated Ring */}
        <DemoCard
          title={t('effects.ring.title')}
          description={t('effects.ring.desc')}
          effectClass="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 group-hover:ring-8 group-hover:ring-purple-500/10 group-hover:border-purple-500 transition-all duration-500"
        >
            <div className="w-12 h-12 rounded-full border-4 border-dotted border-purple-500 animate-spin" />
        </DemoCard>

        {/* 8. Spotlight Mouse Focus */}
        <DemoCard
          title={t('effects.spotlight.title')}
          description={t('effects.spotlight.desc')}
          showSpotlight={true}
          effectClass="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700"
        >
           <div className="text-center group-hover:scale-110 transition-transform">
             <MousePointer2 className="w-8 h-8 text-indigo-500 mb-2 mx-auto" />
             <div className="text-[10px] font-mono text-slate-400 dark:text-gray-500 uppercase tracking-widest leading-none">Scanning</div>
           </div>
        </DemoCard>

        {/* 9. Skew Slide interaction */}
        <DemoCard
          title={t('effects.skew.title')}
          description={t('effects.skew.desc')}
          effectClass="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700"
        >
            <div className="absolute inset-0 bg-yellow-400/10 dark:bg-yellow-400/5 -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            <GripHorizontal className="w-10 h-10 text-yellow-500 rotate-45 group-hover:rotate-0 transition-transform duration-500" />
        </DemoCard>

        {/* 10. Floating 3D Depth */}
        <DemoCard
          title={t('effects.float.title')}
          description={t('effects.float.desc')}
          effectClass="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-6 transition-all duration-700"
        >
           <Box className="w-14 h-14 text-slate-800 dark:text-white drop-shadow-2xl" />
        </DemoCard>

         {/* 11. Text Reflection */}
        <DemoCard
          title={t('effects.reflection.title')}
          description={t('effects.reflection.desc')}
          effectClass="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700"
        >
            <div className="relative text-center">
                <span className="text-4xl font-black italic text-slate-800 dark:text-gray-200">MIRROR</span>
                <span className="absolute top-[85%] left-0 right-0 text-4xl font-black italic text-slate-800 dark:text-gray-200 scale-y-[-1] opacity-10 dark:opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] select-none pointer-events-none">MIRROR</span>
            </div>
        </DemoCard>

         {/* 12. Liquid Border */}
         <DemoCard
            title={t('effects.liquid.title')}
            description={t('effects.liquid.desc')}
            effectClass="bg-gradient-to-tr from-orange-400 to-amber-400 dark:from-orange-500 dark:to-amber-500 opacity-60 group-hover:opacity-100 border-none transition-opacity"
         >
             <div className="p-4 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-2xl animate-pulse">
                <Waves className="w-8 h-8 text-white" />
             </div>
         </DemoCard>

         {/* 13. Magnetic Button Style */}
         <DemoCard
            title="Magnetic Edge"
            description="Dynamic border alignment that feels like it has weight when interacted."
            effectClass="bg-white dark:bg-gray-800 border-2 border-slate-100 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors duration-200"
         >
             <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/50 group-hover:scale-125 transition-transform duration-300">
               <Target className="w-6 h-6" />
             </div>
         </DemoCard>

         {/* 14. Ghost Border */}
         <DemoCard
            title="Ghost Aura"
            description="A faint, pulsing border that expands beyond the card limits on hover."
            effectClass="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 hover:ring-[20px] hover:ring-indigo-500/5 transition-all duration-1000"
         >
             <Ghost className="w-10 h-10 text-slate-300 dark:text-gray-600 animate-pulse" />
         </DemoCard>

         {/* 15. Sparkle Halo */}
         <DemoCard
            title="Sparkle Halo"
            description="A magical halo effect using multiple box-shadows and rotation."
            className="group"
            effectClass="bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-800"
         >
             <div className="relative">
                <Sparkles className="w-10 h-10 text-amber-400 relative z-10" />
                <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full group-hover:scale-150 transition-transform duration-500" />
             </div>
         </DemoCard>

      </div>

      <footer className="mt-20 py-12 border-t border-slate-200 dark:border-gray-800/50 text-center text-slate-400 dark:text-gray-500 text-sm">
        <p className="mb-2 font-medium">{t('footer')}</p>
        <div className="flex justify-center gap-4 text-xs font-mono">
           <span className="hover:text-indigo-500 transition-colors pointer-events-none underline decoration-indigo-500/30 underline-offset-4">Tailwind 4.0</span>
           <span className="hover:text-purple-500 transition-colors pointer-events-none underline decoration-purple-500/30 underline-offset-4">Vite 7.0</span>
           <span className="hover:text-pink-500 transition-colors pointer-events-none underline decoration-pink-500/30 underline-offset-4">React 19.0</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
