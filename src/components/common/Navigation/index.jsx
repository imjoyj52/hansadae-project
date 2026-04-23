import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * Navigation 컴포넌트
 * 사이트 네비게이션 바를 제공합니다.
 *
 * @param {Object} props
 * @param {Array} props.items - 네비게이션 항목 배열 [{ label, path }]
 * @param {string} props.logo - 로고 텍스트 또는 이미지
 * @param {string} props.className - 추가 스타일 클래스
 */
function Navigation({ items = [], logo = 'imjoy', className = '' }) {
  const location = useLocation()

  return (
    <nav
      className={`
        sticky top-0 z-50
        bg-white/80 backdrop-blur-md
        border-b border-gray-200
        ${className}
      `}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link to="/" className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {logo}
          </Link>

          {/* 네비게이션 링크 */}
          <div className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                active={location.pathname === item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* 모바일 메뉴 버튼 (추후 구현) */}
          <button className="md:hidden p-2 text-gray-600 hover:text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

/**
 * NavLink 컴포넌트
 * 개별 네비게이션 링크
 */
function NavLink({ children, to, active = false }) {
  return (
    <Link
      to={to}
      className={`
        relative
        text-sm font-medium
        transition-colors duration-200
        ${active ? 'text-primary' : 'text-gray-600 hover:text-black'}
      `}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeNav"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
        />
      )}
    </Link>
  )
}

/**
 * BackLink 컴포넌트
 * 뒤로가기 링크
 *
 * @param {Object} props
 * @param {string} props.to - 이동할 경로 (기본: '/')
 * @param {string} props.label - 링크 텍스트 (기본: '메인으로')
 * @param {'default' | 'hero'} props.variant - 스타일 변형 (기본: 'default', hero: 히어로 배너용 흰색)
 * @param {string} props.className - 추가 스타일 클래스
 */
function BackLink({ to = '/', label = '메인으로', variant = 'default', className = '' }) {
  const variants = {
    default: 'text-gray-600 hover:text-primary',
    hero: 'text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]',
  }

  return (
    <Link
      to={to}
      className={`
        inline-flex items-center
        font-medium
        transition-colors duration-200
        ${variants[variant]}
        ${className}
      `}
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      {label}
    </Link>
  )
}

Navigation.BackLink = BackLink

export default Navigation
