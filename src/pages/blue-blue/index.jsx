import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '../../components/common/Navigation'

// =============================================
// 컨텐츠 데이터 - 이 부분을 직접 수정하세요!
// =============================================
const tabContents = {
  summary: {
    title: '책 소개',
    content: `
      2019년 첫 장편소설 『무너진 다리』로 SF 팬들에게 눈도장을 찍었고, 2020년 7월, 소설집 『어떤 물질의 사랑』을 통해 우리 SF의 대세로 굳건히 자리 잡은 천선란. 2019년 한국과학문학상 장편 대상 수상작 『천 개의 파랑』은 이를 방증하듯 출간 전부터 많은 SF 팬들의 뜨거운 기대를 모았다.

SF가 진보하는 기술 속에서 변화하고 발전하는 모습을 예견하는 장르라면, 『천 개의 파랑』은 진보하는 기술 속에서 희미해지는 존재들을 올곧게 응시하는 소설이다. 발달한 기술이 배제하고 지나쳐버리는 이들, 엉망진창인 자본 시스템에서 소외된 이들, 부서지고 상처 입은 채 수면 아래로 가라앉아 있던 이들을 천선란은 다정함과 우아함으로 엮은 문장의 그물로 가볍게 건져 올린다. 그의 소설은 희미해진 이들에게 선명한 색을 덧입히는 과정으로 이루어져 있다.

최진영 소설가가 추천의 글에서 말한 것처럼, 우리는 『천 개의 파랑』을 읽으며 행복과 위로, 애도와 회복, 자유로움과 같은, 시간이 흘러도 변하지 않는 가치를 다시금 확인하게 된다. 안락사당할 위기에 처한 경주마 '투데이', 하반신이 부서진 채로 폐기를 앞둔 휴머노이드 기수 '콜리', 장애를 가진 채 살아가는 소녀 '은혜', 아득한 미래 앞에서 방황하는 '연재', 동반자를 잃고 멈춰버린 시간 속에서 끝없는 애도를 반복하는 '보경', 『천 개의 파랑』은 이렇듯 상처 입고 약한 이들의 서사를, 그 누구도 배제하지 않는 따뜻한 파랑波浪처럼 아우른다. 세계의 구석에서 누구도 홀로 물방울처럼 울지 않게 말이다. 눈을 감았다가 뜰 때마다 천변만화하는 세상 속에서도 『천 개의 파랑』은 변하지 않는 것, 이 세계의 가장 느리고 약한 것들과 기꺼이 발걸음을 맞추며 걷는다.
    `,
  },
  review: {
    title: '책을 읽은 후',
    content: `
      여기에 책을 읽은 후의 감상을 입력하세요.

      느낀 점, 인상 깊었던 부분 등을 자유롭게 작성하세요.
    `,
  },
  purchase: {
    title: '책 구매하러 가기',
    content: `
      여기에 책 구매 관련 정보를 입력하세요.

      구매 링크나 서점 정보 등을 안내할 수 있습니다.
    `,
    // 구매 링크가 필요하면 아래 주석을 해제하고 URL을 입력하세요
    // link: 'https://example.com/buy',
  },
}
// =============================================

const tabs = [
  { id: 'summary', label: '책 소개' },
  { id: 'review', label: '책을 읽은 후' },
  { id: 'purchase', label: '책 구매하러 가기' },
]

function BlueBlue() {
  const [activeTab, setActiveTab] = useState('summary')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-primary-light via-white to-primary-light/30"
    >
      {/* 히어로 배너 */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* 배경 이미지 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/img/thousand_blues_option_a.png)',
          }}
        />

        {/* 오버레이 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white/70" />

        {/* 상단 네비게이션 - 공통 컴포넌트 사용 */}
        <div className="absolute top-0 left-0 right-0 p-6 z-10">
          <Navigation.BackLink
            to="/"
            label="메인으로"
            variant="hero"
          />
        </div>

        {/* 히어로 컨텐츠 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            천 개의 파랑
          </motion.h1>

          {/* 유리 느낌 탭 버튼들 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-5 py-2.5 md:px-6 md:py-3
                  rounded-full
                  font-bold text-sm md:text-base
                  transition-all duration-300
                  backdrop-blur-md
                  border
                  shadow-lg
                  ${activeTab === tab.id
                    ? 'bg-white/40 border-white/60 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]'
                    : 'bg-white/20 border-white/30 text-white/90 hover:bg-white/30 hover:border-white/40'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 탭 컨텐츠 영역 */}
      <div className="px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                {tabContents[activeTab].title}
              </h2>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                {tabContents[activeTab].content}
              </div>

              {/* 구매 링크가 있는 경우 버튼 표시 */}
              {tabContents[activeTab].link && (
                <a
                  href={tabContents[activeTab].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-pink"
                >
                  구매하러 가기
                </a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default BlueBlue
