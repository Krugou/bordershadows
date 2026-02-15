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
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    // Default to light mode as per user request, but respect saved preference
    return saved === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* 1. Neumorphism */}
        <DemoCard
          title={t('effects.neumorphism.title')}
          description={t('effects.neumorphism.desc')}
          className="bg-slate-100 dark:bg-gray-900 border-none shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff] dark:shadow-[12px_12px_24px_#040404,-12px_-12px_24px_#141414]"
          effectClass="hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors"
          codeSnippet='className="bg-slate-100 dark:bg-gray-900 shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff] dark:shadow-[12px_12px_24px_#040404,-12px_-12px_24px_#141414]"'
        >
          <div className="relative group/icon">
            <div className="w-20 h-20 rounded-2xl bg-slate-100 dark:bg-gray-900 shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#040404,-6px_-6px_12px_#141414] flex items-center justify-center group-hover/icon:scale-110 transition-transform duration-500">
              <Fingerprint className="w-10 h-10 text-indigo-500/80 dark:text-indigo-400/80 animate-pulse" />
            </div>
          </div>
        </DemoCard>

        {/* 2. Glassmorphism */}
        <DemoCard
          title={t('effects.glassmorphism.title')}
          description={t('effects.glassmorphism.desc')}
          effectClass="bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 group-hover:border-white/40 dark:group-hover:border-white/20 transition-all duration-700"
          className="shadow-2xl shadow-slate-200/50 dark:shadow-none"
          codeSnippet='effectClass="bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/10 group-hover:border-white/40"'
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-1000" />
            <div className="relative p-5 bg-white/20 dark:bg-white/10 rounded-2xl border border-white/30 backdrop-blur-sm animate-float">
               <GlassWater className="w-10 h-10 text-indigo-600 dark:text-white" />
            </div>
          </div>
        </DemoCard>

        {/* 3. Neon Cyberpunk */}
        <DemoCard
          title={t('effects.neon.title')}
          description={t('effects.neon.desc')}
          effectClass="bg-cyan-500/5 border border-cyan-500/20 group-hover:border-cyan-400 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-500"
          codeSnippet='effectClass="border border-cyan-500/20 group-hover:border-cyan-400 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all"'
        >
           <div className="relative overflow-hidden group/btn px-10 py-4 bg-gray-950 rounded-xl border-2 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all active:scale-95">
             <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover/btn:opacity-10 transition-opacity" />
             <Zap className="w-8 h-8 text-cyan-400 group-hover/btn:scale-125 transition-transform" />
           </div>
        </DemoCard>

        {/* 4. Gradient Border */}
        <DemoCard
          title={t('effects.gradient.title')}
          description={t('effects.gradient.desc')}
          effectClass="bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 to-cyan-500 opacity-40 group-hover:opacity-100 transition-opacity duration-1000 animate-gradient-x"
          codeSnippet='effectClass="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-40 group-hover:opacity-100 transition-opacity animate-gradient-x"'
        >
             <div className="flex flex-col items-center gap-2">
               <Diamond className="w-12 h-12 text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] animate-bounce" />
               <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600 tracking-tighter">ULTRA PREMIUM</span>
             </div>
        </DemoCard>

        {/* 5. Depth Stack */}
        <DemoCard
          title={t('effects.depth.title')}
          description={t('effects.depth.desc')}
          effectClass="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.05),0_12px_24px_rgba(0,0,0,0.05)]"
          codeSnippet='className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.05),0_12px_24px_rgba(0,0,0,0.05)]"'
        >
           <div className="relative">
             <div className="absolute -inset-1 bg-slate-200 dark:bg-gray-700 rounded-2xl -translate-y-2 translate-x-1" />
             <div className="absolute -inset-1 bg-slate-100 dark:bg-gray-800 rounded-2xl -translate-y-4 translate-x-2 border border-slate-200 dark:border-gray-700" />
             <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl border border-slate-200 dark:border-gray-700 shadow-xl group-hover:-translate-y-8 group-hover:translate-x-4 transition-all duration-700 ease-out">
               <Layers className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />
             </div>
           </div>
        </DemoCard>

        {/* 6. Inset Glow */}
        <DemoCard
          title={t('effects.inset.title')}
          description={t('effects.inset.desc')}
          effectClass="bg-slate-50 dark:bg-gray-900 shadow-[inset_0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_4px_24px_rgba(0,0,0,0.7)] border border-slate-200 dark:border-gray-800"
          codeSnippet='className="bg-slate-50 dark:bg-gray-900 shadow-[inset_0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_4px_24px_rgba(0,0,0,0.7)]"'
        >
            <div className="w-full max-w-[200px] h-6 bg-slate-200 dark:bg-gray-950 rounded-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.25)] p-1.5 overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.8)] relative">
                  <div className="absolute inset-0 bg-white/20 animate-shine" />
                </div>
            </div>
        </DemoCard>

         {/* 7. Animated Ring */}
        <DemoCard
          title={t('effects.ring.title')}
          description={t('effects.ring.desc')}
          effectClass="bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800 group-hover:ring-[12px] group-hover:ring-purple-500/10 group-hover:border-purple-500 transition-all duration-700 shadow-inner"
          codeSnippet='effectClass="group-hover:ring-[12px] group-hover:ring-purple-500/10 group-hover:border-purple-500 transition-all"'
        >
            <div className="relative flex items-center justify-center">
              <div className="absolute w-20 h-20 rounded-full border-2 border-dashed border-purple-400/30 animate-spin" style={{ animationDuration: '8s' }} />
              <div className="absolute w-16 h-16 rounded-full border-2 border-dotted border-purple-500 animate-spin" style={{ animationDuration: '4s' }} />
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/50">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
        </DemoCard>

        {/* 8. Spotlight Mouse Focus */}
        <DemoCard
          title={t('effects.spotlight.title')}
          description={t('effects.spotlight.desc')}
          showSpotlight={true}
          effectClass="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 transition-shadow duration-500 group-hover:shadow-[0_0_50px_rgba(99,102,241,0.1)]"
          codeSnippet='showSpotlight={true}
effectClass="group-hover:shadow-[0_0_50px_rgba(99,102,241,0.1)]"'
        >
           <div className="text-center group-hover:scale-125 transition-transform duration-700">
             <div className="relative">
                <MousePointer2 className="w-10 h-10 text-indigo-500 mx-auto drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                <div className="absolute -inset-2 bg-indigo-500/20 rounded-full blur-lg animate-ping opacity-0 group-hover:opacity-100" />
             </div>
             <div className="mt-4 text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] leading-none">Scanning Bio-Data</div>
           </div>
        </DemoCard>

        {/* 9. Skew Slide interaction */}
        <DemoCard
          title={t('effects.skew.title')}
          description={t('effects.skew.desc')}
          effectClass="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 overflow-hidden"
          codeSnippet='effectClass="bg-white dark:bg-gray-900 border border-slate-200 overflow-hidden"'
        >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 opacity-20 -skew-x-[30deg] translate-x-[-150%] group-hover:translate-x-[-20%] transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 opacity-10 -skew-x-[30deg] translate-x-[-180%] group-hover:translate-x-[-40%] transition-transform duration-700 delay-100 ease-[cubic-bezier(0.23,1,0.32,1)]" />
            <GripHorizontal className="w-12 h-12 text-amber-500 group-hover:rotate-180 transition-transform duration-1000" />
        </DemoCard>

        {/* 10. Floating 3D Depth */}
        <DemoCard
          title={t('effects.float.title')}
          description={t('effects.float.desc')}
          effectClass="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] transition-all duration-1000"
          codeSnippet='className="hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transition-all duration-1000"'
        >
           <div className="group-hover:animate-float">
             <Box className="w-20 h-20 text-indigo-600 dark:text-white drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] transition-all duration-1000 group-hover:rotate-[15deg]" />
           </div>
        </DemoCard>

         {/* 11. Text Reflection */}
        <DemoCard
          title={t('effects.reflection.title')}
          description={t('effects.reflection.desc')}
          effectClass="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800"
          codeSnippet='className="bg-white dark:bg-gray-900 border border-slate-200"'
        >
            <div className="relative text-center group-hover:-translate-y-4 transition-transform duration-700">
                <span className="text-6xl font-black italic tracking-tighter text-slate-900 dark:text-gray-100">EDGE</span>
                <span className="absolute top-[90%] left-0 right-0 text-6xl font-black italic tracking-tighter text-slate-900 dark:text-gray-100 scale-y-[-1] opacity-5 dark:opacity-15 [mask-image:linear-gradient(to_bottom,black,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] select-none pointer-events-none transition-opacity group-hover:opacity-30">EDGE</span>
            </div>
        </DemoCard>

         {/* 12. Liquid Border */}
         <DemoCard
            title={t('effects.liquid.title')}
            description={t('effects.liquid.desc')}
            effectClass="bg-gradient-to-tr from-pink-500 via-rose-500 to-orange-400 opacity-60 group-hover:opacity-100 border-none transition-opacity duration-1000"
            codeSnippet='effectClass="bg-gradient-to-tr from-pink-500 via-rose-500 to-orange-400 animate-liquid border-none"'
         >
             <div className="p-8 bg-white/20 dark:bg-black/20 backdrop-blur-md animate-liquid border border-white/30 shadow-2xl">
                <Waves className="w-10 h-10 text-white animate-pulse" />
             </div>
         </DemoCard>

         {/* 13. Magnetic Button Style */}
         <DemoCard
            title="Magnetic Pulse"
            description="Dynamic border alignment with a high-intensity pulse feedback on interaction."
            effectClass="bg-white dark:bg-gray-950 border-2 border-slate-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-500 transition-colors duration-300"
            codeSnippet='effectClass="border-2 border-slate-100 dark:border-gray-800 hover:border-indigo-600 transition-colors"'
         >
             <div className="relative group/magnetic">
                <div className="absolute -inset-4 bg-indigo-500 rounded-full blur-xl opacity-0 group-hover/magnetic:opacity-40 animate-pulse transition-opacity duration-500" />
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-indigo-600/60 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-700 ease-in-out">
                  <Target className="w-8 h-8" />
                </div>
             </div>
         </DemoCard>

         {/* 14. Ghost Aura */}
         <DemoCard
            title="Spectral Aura"
            description="A faint, multi-layered pulsing border that ripples outward mysteriously."
            effectClass="bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800 hover:ring-[30px] hover:ring-indigo-500/5 transition-all duration-[2000ms] shadow-inner"
            codeSnippet='effectClass="hover:ring-[30px] hover:ring-indigo-500/5 transition-all duration-[2000ms]"'
         >
             <div className="relative">
                <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-2xl animate-pulse scale-150" />
                <Ghost className="w-12 h-12 text-slate-300 dark:text-gray-600 animate-float" />
             </div>
         </DemoCard>

         {/* 15. Sparkle Halo */}
         <DemoCard
            title="Celestial Halo"
            description="A magical, rotating glow effect using hardware-accelerated filters."
            className="group"
            effectClass="bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-800"
            codeSnippet='effectClass="bg-white dark:bg-gray-900 border border-slate-100 transition-all duration-700"'
         >
             <div className="relative">
                <div className="absolute -inset-10 bg-gradient-to-tr from-amber-500/30 to-rose-500/30 blur-3xl rounded-full animate-spin" style={{ animationDuration: '6s' }} />
                <Sparkles className="w-14 h-14 text-amber-500 relative z-10 drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]" />
                <div className="absolute inset-0 bg-amber-400/30 blur-xl rounded-full group-hover:scale-[2] transition-transform duration-1000" />
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
