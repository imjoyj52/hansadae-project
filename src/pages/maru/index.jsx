import { motion } from 'framer-motion'
import Navigation from '../../components/common/Navigation'

// =============================================
// 페이지 설정 - 이 부분을 수정하세요!
// =============================================
const pageConfig = {
  title: '마루',
  subtitle: '페이지 설명을 입력하세요',
  // 히어로 배경 이미지 (선택사항)
  // heroImage: '/img/maru_hero.png',
}

// 컨텐츠 데이터
const content = {
  sections: [
    {
      title: '섹션 제목',
      content: '여기에 내용을 입력하세요.',
    },
  ],
}
// =============================================

function Maru() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-primary-light via-white to-primary-light/30"
    >
      {/* 히어로 배너 */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* 배경 이미지 또는 그라데이션 */}
        {pageConfig.heroImage ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${pageConfig.heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white/70" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/80 to-primary-light" />
        )}

        {/* 상단 네비게이션 */}
        <div className="absolute top-0 left-0 right-0 p-6 z-10">
          <Navigation.BackLink to="/" label="메인으로" variant="hero" />
        </div>

        {/* 히어로 컨텐츠 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            {pageConfig.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/90 text-center drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
          >
            {pageConfig.subtitle}
          </motion.p>
        </div>
      </div>

      {/* 컨텐츠 영역 */}
      <div className="px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          {content.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 mb-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                {section.title}
              </h2>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Maru
