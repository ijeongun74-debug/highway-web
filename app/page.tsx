"use client";

import { useState } from "react"; // 창을 열고 닫는 상태 관리를 위해 필요합니다.
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Globe, Smartphone, X } from "lucide-react";

export default function Home() {
  // isOpen이 true이면 하얀 창이 보이고, false이면 안 보입니다.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden relative">
      
      {/* 1. 히어로 섹션 */}
      <section className="h-screen flex flex-col justify-center items-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-extrabold mb-6 text-center tracking-tighter"
        >
          HighWay <span className="text-blue-500">Service</span>
        </motion.h1>
        
        <p className="text-gray-400 text-xl md:text-2xl mb-10 text-center max-w-2xl">
          당신의 아이디어를 고속도로처럼 시원하게 펼쳐드립니다.
        </p>

        {/* 클릭하면 setIsOpen(true)가 실행되어 창이 열립니다. */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-colors hover:bg-gray-200"
        >
          지금 무료로 시작하기 <ArrowRight size={20} />
        </motion.button>
      </section>

      {/* 2. 하얀색 둘러보기창 (모달) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white text-black w-full max-w-4xl h-[80vh] rounded-3xl overflow-hidden relative flex flex-col"
            >
              {/* 닫기 버튼 */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-10 overflow-y-auto">
                <h2 className="text-4xl font-bold mb-8">서비스 둘러보기</h2>
                
                {/* 둘러보기 내용 예시 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
                    이미지 영역 1
                  </div>
                  <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
                    이미지 영역 2
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-bold mb-4">주요 기능 안내</h3>
                  <p className="text-gray-600 leading-relaxed">
                    여기에 서비스의 상세한 설명을 적을 수 있습니다. 하얀색 바탕이라 가독성이 좋습니다. 
                    스크롤을 내려서 더 많은 정보를 확인하게 할 수도 있어요.
                  </p>
                </div>
              </div>
              
              <div className="p-8 border-t bg-gray-50 flex justify-end">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="bg-black text-white px-6 py-3 rounded-xl font-medium"
                >
                  닫기
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. 특징 섹션 */}
      <section className="py-32 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          { icon: <Zap size={32} />, title: "초고속 로딩", desc: "사용자 대기 시간을 제로에 가깝게 줄였습니다." },
          { icon: <Globe size={32} />, title: "전 세계 배포", desc: "글로벌 네트워크를 통해 어디서든 빠른 접속을 보장합니다." },
          { icon: <Smartphone size={32} />, title: "모바일 최적화", desc: "어떤 기기에서도 완벽한 비율로 보여집니다." }
        ].map((item, index) => (
          <div key={index} className="p-10 border border-gray-800 rounded-3xl bg-neutral-900/50">
            <div className="mb-6 text-blue-500">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
