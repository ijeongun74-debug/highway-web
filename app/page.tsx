"use client"; // 애니메이션 효과를 위해 필수입니다.

import { motion } from "framer-motion";
import { ArrowRight, Zap, Globe, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      
      {/* 1. 히어로 섹션 (첫 화면) */}
      <section className="h-screen flex flex-col justify-center items-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-extrabold mb-6 text-center tracking-tighter"
        >
          HighWay <span className="text-blue-500">Service</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-400 text-xl md:text-2xl mb-10 text-center max-w-2xl"
        >
          더 빠르고, 더 스마트한 웹 환경을 경험하세요. <br />
          당신의 아이디어를 고속도로처럼 시원하게 펼쳐드립니다.
        </motion.p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-colors hover:bg-gray-200"
        >
          지금 무료로 시작하기 <ArrowRight size={20} />
        </motion.button>
      </section>

      {/* 2. 특징 섹션 (스크롤 하면 나타남) */}
      <section className="py-32 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          { icon: <Zap size={32} />, title: "초고속 로딩", desc: "사용자 대기 시간을 제로에 가깝게 줄였습니다." },
          { icon: <Globe size={32} />, title: "전 세계 배포", desc: "글로벌 네트워크를 통해 어디서든 빠른 접속을 보장합니다." },
          { icon: <Smartphone size={32} />, title: "모바일 최적화", desc: "어떤 기기에서도 완벽한 비율로 보여집니다." }
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="p-10 border border-gray-800 rounded-3xl bg-neutral-900/50 hover:border-blue-500/50 transition-all group"
          >
            <div className="mb-6 text-blue-500 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* 3. 푸터 (맨 하단) */}
      <footer className="py-10 border-t border-gray-900 text-center text-gray-600 text-sm">
        © 2024 HighWay Project. All rights reserved.
      </footer>

    </div>
  );
}
