import { useState } from "react";

export default function RoyalEmpireLandingPage() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white bg-gradient-to-b from-black via-zinc-900 to-black">
      <section className="text-center py-16 px-4 border-b border-yellow-700 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e')] bg-cover bg-center relative before:absolute before:inset-0 before:bg-black/35">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
        <div className="mb-4 font-black text-lg md:text-xl tracking-widest drop-shadow-[0_0_8px_rgba(255,215,0,0.35)]">
          <span className="text-white">INDIA'S</span>{" "}
          <span className="text-yellow-100">PREMIUM</span>{" "}
          <span className="text-yellow-200">CRICKET</span>{" "}
          <span className="text-white">EXPERTS</span>
        </div>
        <h1 className="text-[46px] md:text-[56px] leading-tight font-black text-yellow-400 tracking-normal text-center drop-shadow-[0_0_8px_rgba(255,215,0,0.35)]">
          ROYAL EMPIRE PREDICTION
        </h1>
        <p className="mt-4 text-lg text-white font-medium">Since 2015 • Premium Cricket Analysis</p>

        <button onClick={() => setShowPopup(true)}
          className="inline-flex items-center justify-center gap-3 mt-10 bg-gradient-to-r from-green-400 to-green-600 text-black font-black text-lg md:text-xl px-10 py-4 rounded-3xl shadow-2xl shadow-green-400/80 border-2 border-green-200/60 animate-bounce"
        >
          CLICK & JOIN WHATSAPP
        </button>

        <p className="mt-4 text-yellow-300 font-semibold text-lg">
          ⚡ Limited VIP Access • Serious Members Only
        </p>
              </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 mb-8 items-center">
          <div className="bg-gradient-to-br from-yellow-500/20 to-black border-2 border-yellow-400 p-5 rounded-3xl text-center flex items-center justify-center min-h-[120px] font-black text-yellow-200 tracking-widest text-lg md:text-xl shadow-xl shadow-yellow-500/10">🏏 IPL COVERAGE</div>
          <div className="bg-gradient-to-br from-yellow-500/20 to-black border-2 border-yellow-400 p-5 rounded-3xl text-center flex items-center justify-center min-h-[120px] font-black text-white tracking-widest text-lg md:text-xl shadow-xl shadow-yellow-500/10">👑 VIP REPORTS</div>
          <div className="bg-gradient-to-br from-yellow-500/20 to-black border-2 border-yellow-400 p-5 rounded-3xl text-center flex items-center justify-center min-h-[120px] font-black text-yellow-100 tracking-widest text-lg md:text-xl shadow-xl shadow-yellow-500/10"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 inline mr-2 fill-current"><path d="M19.11 17.2c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.31-.79-.71-1.32-1.58-1.47-1.84-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.47-.83-2.01-.22-.54-.45-.47-.61-.48h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.97 2.63 1.11 2.81c.13.18 1.89 2.89 4.58 4.05.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31z"/></svg> WHATSAPP SUPPORT</div>
        </div>
        <h2 className="text-2xl md:text-3xl font-black tracking-widest drop-shadow-[0_0_8px_rgba(255,215,0,0.35)] text-yellow-300 mb-8 text-center">✨ WHY CHOOSE ROYAL EMPIRE ✨</h2>
        <div className="grid md:grid-cols-2 gap-5 text-lg bg-gradient-to-br from-zinc-950 to-yellow-950/30 p-8 rounded-3xl border-2 border-yellow-400 shadow-2xl shadow-yellow-500/20">
          <div className="bg-black/40 border border-yellow-500 px-4 py-3 rounded-2xl font-black text-yellow-200 tracking-widest text-center">🏏 ALL CRICKET COVERAGE</div>
          <div className="bg-black/40 border border-yellow-500 px-4 py-3 rounded-2xl font-black text-white tracking-widest text-center">📊 DAILY MATCH REPORTS</div>
          <div className="bg-black/40 border border-yellow-500 px-4 py-3 rounded-2xl font-black text-yellow-100 tracking-widest text-center">🏆 WINNING REPORTS</div>
          <div className="bg-black/40 border border-yellow-500 px-4 py-3 rounded-2xl font-black text-yellow-200 tracking-widest text-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 inline mr-2 fill-current"><path d="M19.11 17.2c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.31-.79-.71-1.32-1.58-1.47-1.84-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.47-.83-2.01-.22-.54-.45-.47-.61-.48h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.97 2.63 1.11 2.81c.13.18 1.89 2.89 4.58 4.05.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31z"/></svg> FAST WHATSAPP SUPPORT</div>
          <div className="bg-black/40 border border-yellow-500 px-4 py-3 rounded-2xl font-black text-white tracking-widest text-center">⭐ SINCE 2015 TRUSTED EXPERIENCE</div>
          <div className="bg-black/40 border border-yellow-500 px-4 py-3 rounded-2xl font-black text-yellow-100 tracking-widest text-center">🚀 VIP ENTRY ALERTS</div>
          <div className="bg-black/40 border border-yellow-500 px-4 py-3 rounded-2xl font-black text-yellow-200 tracking-widest text-center">🔥 PREMIUM CRICKET UPDATES</div>
          <div className="bg-black/40 border border-yellow-500 px-4 py-3 rounded-2xl font-black text-white tracking-widest text-center">💎 HIGH ACCURACY INSIGHTS</div>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-zinc-900 border border-yellow-500 rounded-2xl p-6 text-center max-w-sm w-full">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Join VIP Access</h3>
            <p className="text-white font-medium mb-5">Click below to join on WhatsApp.</p>
            <a href="https://wa.me/917231035738?text=Hi%20Royal%20Empire%20I%20Want%20VIP%20Access" className="block bg-green-500 text-black font-bold px-6 py-3 rounded-xl mb-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 inline mr-2 fill-current"><path d="M19.11 17.2c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.31-.79-.71-1.32-1.58-1.47-1.84-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.47-.83-2.01-.22-.54-.45-.47-.61-.48h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.97 2.63 1.11 2.81c.13.18 1.89 2.89 4.58 4.05.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31z"/></svg> Open WhatsApp</a>
            <button onClick={() => setShowPopup(false)} className="text-gray-400">Close</button>
          </div>
        </div>
            )}
    </div>
  );
}
