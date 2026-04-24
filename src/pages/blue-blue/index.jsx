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
    content: `책을 읽으며 인상 깊었던 부분들을 정리해보았습니다.`,
    // list: { quote: 인용문, comments: [내 생각들] } 형태로 작성
    list: [
      {
        quote: `"사람은 기계와 달라서 꺼진다고 완전히 멈추는 게 아니니까요. 3%라는 뜻은 말 그대로 살 수 있다는 뜻이에요."`,
        comments: [
          `보경의 구조 후: 처음에는 그저 보경을 살리려 했던 소방관의 마음을 덤덤하게 풀어나가려 했던 말로 느껴졌다. 따스함이 느껴져 좋았다.`,
          `소방관의 죽음 후: 소방관은 80% 확률로 살 수 있었으나, 죽음을 맞이했다. 3%로 살았던 보경과 비교되는 상황이었기에 그저 마음이 쓰라렸다.`,
          `콜리의 낙마 후: 콜리는 로봇이니까 망가지면 완전히 멈춘다. 하지만 다시 고쳐지면 다시 움직일 수 있었다. 연재의 도움으로 움직이게 된 콜리는 3%로 살아난 보경과 비슷한 상황이지 않을까?`,
          `콜리의 두번째 낙마 후: 콜리는 연재, 은혜, 지수 등 다양한 사람들의 도움으로 투데이와 다시 달릴 수 있었다. 그러나 자신의 파트너인 투데이의 진정한 행복을 위해, 무거워진 자신의 몸을 기꺼이 땅으로 던졌다. 타인을 구하기 위해 자신의 목숨까지도 희생하던 소방관의 죽음과 겹쳐보였다. 콜리는 로봇이지만 어쩌면 또 하나의 인간이지 않을까 하는 생각도 들었다. 인종이 다른 것처럼...`
        ],
      },
      {
        quote: `내가 할 수 있는 것을 할게. 그게 원지 모르겠지만, 나도 그걸 해 볼게. 그리고 나를 내가 응원해볼게`,
        comments: [
          `혼자 이겨내야겠다는 다짐을 하게 된 은혜, 사실 모든 인간은 혼자 이겨내야하는 것 투성이인 것 같다.`,
          `나도 이따금씩 웅크리게 되는 날이 있는데, 그럴 땐 내가 할 수 있는 아주 작은 일부터 무엇이든 시작해보자. 그리고 나를 응원해주자!`
        ],
      },
    ],
  },
  purchase: {
    title: '책 구매하러 가기',
    content: `
      이미지를 클릭하면 교보문고에서 구매할 수 있습니다.
    `,
    image: '/img/blue-blue/book.jpg',
    link: 'https://product.kyobobook.co.kr/detail/S000001935255',
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

              {/* 리스트가 있는 경우: 인용문 + 그 아래 ol/li */}
              {tabContents[activeTab].list && (
                <div className="mt-6 space-y-8">
                  {tabContents[activeTab].list.map((item, index) => (
                    <div key={index}>
                      {/* 인용문이 있는 경우 */}
                      {item.quote && (
                        <blockquote className="border-l-4 border-primary/50 pl-4 mb-4 italic text-gray-700 bg-gray-50 py-3 rounded-r">
                          {item.quote}
                        </blockquote>
                      )}
                      {/* 코멘트들을 ol/li로 표시 */}
                      {item.comments && item.comments.length > 0 && (
                        <ol className="list-decimal list-outside space-y-2 text-gray-600 pl-6">
                          {item.comments.map((comment, cIndex) => (
                            <li key={cIndex} className="leading-relaxed">
                              {comment}
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* 이미지 + 링크가 있는 경우 클릭 가능한 이미지 */}
              {tabContents[activeTab].image && tabContents[activeTab].link && (
                <a
                  href={tabContents[activeTab].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6 group"
                >
                  <img
                    src={tabContents[activeTab].image}
                    alt={tabContents[activeTab].title}
                    className="w-full max-w-sm mx-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
                  />
                  <p className="text-center text-sm text-gray-500 mt-3 group-hover:text-primary transition-colors">
                    클릭하여 구매하기
                  </p>
                </a>
              )}

              {/* 이미지만 있는 경우 */}
              {tabContents[activeTab].image && !tabContents[activeTab].link && (
                <img
                  src={tabContents[activeTab].image}
                  alt={tabContents[activeTab].title}
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg mt-6"
                />
              )}

              {/* 링크만 있는 경우 버튼 표시 */}
              {tabContents[activeTab].link && !tabContents[activeTab].image && (
                <a
                  href={tabContents[activeTab].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-pink"
                >
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
