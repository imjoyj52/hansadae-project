import { motion } from 'framer-motion'

/**
 * Layout 컴포넌트
 * 페이지의 기본 레이아웃 구조를 제공합니다.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - 레이아웃 내부 콘텐츠
 * @param {string} props.className - 추가 스타일 클래스
 * @param {boolean} props.animate - 페이지 전환 애니메이션 사용 여부 (기본: true)
 * @param {string} props.bgColor - 배경색 클래스 (기본: 'bg-white')
 */
function Layout({
  children,
  className = '',
  animate = true,
  bgColor = 'bg-white',
}) {
  const content = (
    <div className={`min-h-screen ${bgColor} ${className}`}>
      {children}
    </div>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}

/**
 * Container 컴포넌트
 * 콘텐츠를 중앙에 정렬하고 최대 너비를 제한합니다.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - 컨테이너 내부 콘텐츠
 * @param {string} props.className - 추가 스타일 클래스
 * @param {boolean} props.padding - 섹션 패딩 사용 여부 (기본: true)
 */
function Container({ children, className = '', padding = true }) {
  return (
    <div
      className={`
        container-custom
        ${padding ? 'section-padding' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

Layout.Container = Container

export default Layout
