import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * Button 컴포넌트
 * 다양한 스타일의 버튼을 제공합니다.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - 버튼 내부 콘텐츠
 * @param {'primary' | 'secondary' | 'outline' | 'ghost'} props.variant - 버튼 스타일 (기본: 'primary')
 * @param {'sm' | 'md' | 'lg'} props.size - 버튼 크기 (기본: 'md')
 * @param {boolean} props.disabled - 비활성화 상태
 * @param {string} props.href - 링크 URL (설정 시 Link 컴포넌트로 렌더링)
 * @param {string} props.className - 추가 스타일 클래스
 * @param {function} props.onClick - 클릭 핸들러
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  href,
  className = '',
  onClick,
  ...props
}) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `

  const variants = {
    primary: `
      bg-primary text-white
      hover:bg-primary-dark
      focus:ring-primary
      shadow-pink
    `,
    secondary: `
      bg-secondary text-white
      hover:bg-secondary-dark
      focus:ring-secondary
    `,
    outline: `
      border-2 border-primary text-primary
      hover:bg-primary-light
      focus:ring-primary
    `,
    ghost: `
      text-gray-900
      hover:bg-gray-100
      focus:ring-gray-400
    `,
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const combinedClassName = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
  }

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link
          to={href}
          className={combinedClassName}
          {...props}
        >
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      {...motionProps}
      className={combinedClassName}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
