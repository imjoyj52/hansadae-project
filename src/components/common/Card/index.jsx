import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * Card 컴포넌트
 * 콘텐츠를 담는 카드 컨테이너입니다.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - 카드 내부 콘텐츠
 * @param {string} props.href - 링크 URL (설정 시 클릭 가능한 카드)
 * @param {boolean} props.hoverable - 호버 효과 사용 여부 (기본: true)
 * @param {'sm' | 'md' | 'lg'} props.padding - 패딩 크기 (기본: 'md')
 * @param {'default' | 'accent'} props.variant - 카드 스타일 (기본: 'default')
 * @param {string} props.className - 추가 스타일 클래스
 */
function Card({
  children,
  href,
  hoverable = true,
  padding = 'md',
  variant = 'default',
  className = '',
  ...props
}) {
  const baseStyles = `
    rounded-xl
    transition-all duration-300
  `

  const variants = {
    default: `
      bg-white
      border border-gray-200
      hover:border-primary/50
    `,
    accent: `
      bg-primary-light
      border border-primary/20
    `,
  }

  const paddingSizes = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const hoverStyles = hoverable ? 'shadow hover:shadow-lg' : 'shadow'

  const combinedClassName = `
    ${baseStyles}
    ${variants[variant]}
    ${paddingSizes[padding]}
    ${hoverStyles}
    ${className}
  `

  const motionProps = hoverable
    ? {
        whileHover: { scale: 1.02, y: -4 },
        whileTap: { scale: 0.98 },
      }
    : {}

  if (href) {
    return (
      <Link to={href} className="block">
        <motion.div {...motionProps} className={combinedClassName} {...props}>
          {children}
        </motion.div>
      </Link>
    )
  }

  return (
    <motion.div {...motionProps} className={combinedClassName} {...props}>
      {children}
    </motion.div>
  )
}

/**
 * Card.Header 컴포넌트
 * 카드 상단 영역입니다.
 */
function CardHeader({ children, className = '' }) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  )
}

/**
 * Card.Body 컴포넌트
 * 카드 본문 영역입니다.
 */
function CardBody({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

/**
 * Card.Footer 컴포넌트
 * 카드 하단 영역입니다.
 */
function CardFooter({ children, className = '' }) {
  return (
    <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

/**
 * Card.Badge 컴포넌트
 * 카드 내 배지/태그입니다.
 */
function CardBadge({ children, className = '' }) {
  return (
    <span className={`text-xs font-medium text-primary bg-primary-light px-2.5 py-1 rounded-full ${className}`}>
      {children}
    </span>
  )
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
Card.Badge = CardBadge

export default Card
