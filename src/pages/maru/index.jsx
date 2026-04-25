import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '../../components/common/Navigation'
import Button from '../../components/common/Button'
import useTabWithHash from '../../hooks/useTabWithHash'

// =============================================
// 페이지 설정 - 이 부분을 수정하세요!
// =============================================

// 사이드바 유튜브 (모든 탭에서 공통 재생)
const sidebarYoutube = {
  youtubeId: 'UqzHPE9BI7A',
  link: 'https://www.youtube.com/watch?v=UqzHPE9BI7A',
  text: '마루는강쥐',
}

// 탭 컨텐츠 데이터
const tabContents = {
  aboutMaru: {
    title: '언니! 나 사람됐다! 짱이지?',
    image: '/img/maru/maru.jpg',
    name: '최 마 루',
    hashtags: ['고구마', '꼬린내', '언니'],
    quote: `웹툰 "마루는 강쥐" 에서 나오는 마루! 마루는 강아지였을 때의 마루도 너무나 귀엽지만, 천방지축 호기심도 많고 사고도 많이 치는 꼬마가 된 마루도 너무나 귀엽다.

    혼자 살던 최우리, 마루가 사람이 되면서 유치원에 보내고 그 속에서 많은 인물들도 만나고, 다양한 사건에 휘말리게 된다. 그 속에서 마루는 정말이지 순수하기도 하고 답답하기도 하고 불쌍할 때도 있지만, 모든 면에서 힐링을 느끼게 한다. (마루의 삐뚤빼뚤 글씨체도 사랑해!!!!)

    정말 너무너무 귀엽고, 힘이 되는 존재였다. 언니 몰래 간식을 훔쳐먹기도 하고, 유치원 아이들에게 용기를 심어주기도 하고, 우리에게 따뜻함을 안겨주는 존재. 나에게도 그런 존재가 되었고 나는 어느새 마루의 언니가 되어있었다.

    그리고 여담이지만, 사람들에게 종종 마루와 닮았다는 이야기도 듣는다. 정말 마루를 사랑하나 봐!`,
  },
  maruIsDog: {
    title: '마루는 강쥐',
    quote: `네이버 웹툰에서 2022년 6월 13일부터 2024년 11월 4일까지 연재된 "마루는 강쥐"는, 강아지 마루가 어느 날 갑자기 5살 아이로 변하면서 벌어지는 이야기를 담고 있다.
  
  마루는 강아지 시절부터 귀여움과 사랑스러움을 뽐냈지만, 사람이 된 후에는 그 호기심과 에너지가 배가되어 유치원에서 다양한 사건을 일으키며 주변 사람들과 엮이게 된다.
  
  웹툰 연재와 함께 단행본도 출간되었으며, 유튜브에서 브이로그 형식으로 나는 마루 유튜브 채널에 애니메이션이 업로드 되고 있다. (영상으로 보니 귀여움이 백배!)`,
    carousel: [
      {
        label: '웹툰보기',
        image: '/img/maru/webtoon.webp',
        link: 'https://comic.naver.com/webtoon/list?titleId=796152',
      },
      {
        label: '만화책구매',
        image: '/img/maru/book.jpg',
        link: 'https://product.kyobobook.co.kr/detail/S000202676871',
      },
      {
        label: '애니시청',
        image: '/img/maru/youtube.jpeg',
        link: 'https://www.youtube.com/@webtoon_maru_official',
      },
    ],
  
  },
}

// 탭 설정
const tabs = [
  { id: 'aboutMaru', label: '나는 마루' },
  { id: 'maruIsDog', label: '마루는 강쥐' },
]
// =============================================

function Maru() {
  const [activeTab, setActiveTab] = useTabWithHash('aboutMaru', ['aboutMaru', 'maruIsDog'])
  const [carouselIndex, setCarouselIndex] = useState(0)

  const carousel = tabContents.maruIsDog.carousel

  // 캐러셀 이전/다음 이동
  const goToPrev = useCallback(() => {
    setCarouselIndex((prev) => (prev - 1 + carousel.length) % carousel.length)
  }, [carousel.length])

  const goToNext = useCallback(() => {
    setCarouselIndex((prev) => (prev + 1) % carousel.length)
  }, [carousel.length])

  // 캐러셀 자동 슬라이드 (3초마다)
  useEffect(() => {
    if (!carousel) return

    const timer = setInterval(() => {
      goToNext()
    }, 3000)

    return () => clearInterval(timer)
  }, [carousel, goToNext])

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
            backgroundImage: 'url(/img/maru/maru_hero.jpg)',
          }}
        />

        {/* 오버레이 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white/70" />

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
            className="text-4xl md:text-6xl font-bold text-white mb-8 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            마루
          </motion.h1>

          {/* 탭 버튼들 */}
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
        <div className="max-w-5xl mx-auto flex gap-6 items-start">
          {/* 메인 컨텐츠 */}
          <div className="flex-1 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">
                {tabContents[activeTab].title}
              </h2>

              {/* 이미지가 있는 경우 */}
              {tabContents[activeTab].image && (
                <div className="flex flex-col items-center">
                  <img
                    src={tabContents[activeTab].image}
                    alt={tabContents[activeTab].name || '마루'}
                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg mb-6"
                  />
                  {tabContents[activeTab].name && (
                    <p
                      className="text-4xl md:text-5xl text-gray-800 mb-4"
                      style={{ fontFamily: 'ParkDahyun, sans-serif' }}
                    >
                      {tabContents[activeTab].name}
                    </p>
                  )}
                  {tabContents[activeTab].hashtags && (
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {tabContents[activeTab].hashtags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-base"
                          style={{ fontFamily: 'ParkDahyun, sans-serif' }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {tabContents[activeTab].quote && (
                    <blockquote className="border-l-4 border-primary/50 pl-4 italic text-gray-700 bg-gray-50 py-3 rounded-r w-full whitespace-pre-line">
                      {tabContents[activeTab].quote}
                    </blockquote>
                  )}
                </div>
              )}

              {/* 일반 컨텐츠가 있는 경우 */}
              {tabContents[activeTab].content && (
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {tabContents[activeTab].content}
                </div>
              )}

              {/* 캐러셀이 있는 경우 */}
              {tabContents[activeTab].carousel && (
                <div className="relative">
                  {/* 좌우 화살표 버튼 */}
                  <button
                    onClick={goToPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* 캐러셀 컨텐츠 (드래그 가능) */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={carouselIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(e, { offset }) => {
                        if (offset.x > 50) goToPrev()
                        else if (offset.x < -50) goToNext()
                      }}
                      className="bg-gray-50 rounded-xl p-6 mx-12 border border-gray-200 cursor-grab active:cursor-grabbing"
                    >
                      <img
                        src={tabContents[activeTab].carousel[carouselIndex].image}
                        alt={tabContents[activeTab].carousel[carouselIndex].label}
                        className="w-full max-w-md mx-auto object-contain rounded-lg shadow-md mb-4 pointer-events-none"
                      />
                      <div className="flex justify-center">
                        <Button
                          externalHref={tabContents[activeTab].carousel[carouselIndex].link}
                          variant="primary"
                          size="md"
                        >
                          {tabContents[activeTab].carousel[carouselIndex].label}
                        </Button>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* 인디케이터 */}
                  <div className="flex justify-center gap-2 mt-4">
                    {tabContents[activeTab].carousel.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCarouselIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === carouselIndex ? 'bg-primary' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* 인용구 */}
                  {tabContents[activeTab].quote && (
                    <blockquote className="mt-6 border-l-4 border-primary/50 pl-4 italic text-gray-700 bg-gray-50 py-3 rounded-r whitespace-pre-line">
                      {tabContents[activeTab].quote}
                    </blockquote>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          </div>

          {/* 사이드바 - 유튜브 플레이어 (탭 변경해도 유지) */}
          {sidebarYoutube.youtubeId && (
            <div className="hidden md:block self-start sticky top-24">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-3 border border-gray-200"
              >
                <iframe
                  className="rounded-lg"
                  width="100"
                  height="56"
                  src={`https://www.youtube.com/embed/${sidebarYoutube.youtubeId}?autoplay=1&loop=1&playlist=${sidebarYoutube.youtubeId}`}
                  title="YouTube audio player"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <a
                  href={sidebarYoutube.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 text-center text-sm font-bold text-gray-700 hover:text-primary transition-colors"
                >
                  {sidebarYoutube.text}
                </a>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Maru
