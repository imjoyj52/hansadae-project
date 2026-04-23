/**
 * Typography 컴포넌트
 * 일관된 텍스트 스타일을 제공합니다.
 */

/**
 * Heading 컴포넌트
 * 제목 텍스트 스타일
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - 텍스트 내용
 * @param {1 | 2 | 3 | 4} props.level - 제목 레벨 (기본: 1)
 * @param {string} props.className - 추가 스타일 클래스
 * @param {'left' | 'center' | 'right'} props.align - 텍스트 정렬
 */
function Heading({
  children,
  level = 1,
  className = '',
  align = 'left',
  ...props
}) {
  const Tag = `h${level}`

  const styles = {
    1: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    2: 'text-2xl md:text-3xl font-semibold',
    3: 'text-xl md:text-2xl font-semibold',
    4: 'text-lg md:text-xl font-medium',
  }

  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <Tag
      className={`
        text-secondary-900
        ${styles[level]}
        ${alignStyles[align]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Tag>
  )
}

/**
 * Text 컴포넌트
 * 본문 텍스트 스타일
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - 텍스트 내용
 * @param {'lg' | 'md' | 'sm' | 'xs'} props.size - 텍스트 크기 (기본: 'md')
 * @param {'primary' | 'secondary' | 'muted'} props.color - 텍스트 색상 (기본: 'primary')
 * @param {string} props.className - 추가 스타일 클래스
 * @param {'left' | 'center' | 'right'} props.align - 텍스트 정렬
 */
function Text({
  children,
  size = 'md',
  color = 'primary',
  className = '',
  align = 'left',
  ...props
}) {
  const sizes = {
    lg: 'text-lg leading-relaxed',
    md: 'text-base leading-relaxed',
    sm: 'text-sm leading-normal',
    xs: 'text-xs leading-normal',
  }

  const colors = {
    primary: 'text-secondary-900',
    secondary: 'text-secondary-600',
    muted: 'text-secondary-500',
  }

  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <p
      className={`
        ${sizes[size]}
        ${colors[color]}
        ${alignStyles[align]}
        ${className}
      `}
      {...props}
    >
      {children}
    </p>
  )
}

/**
 * Label 컴포넌트
 * 라벨/캡션 텍스트 스타일
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - 텍스트 내용
 * @param {string} props.className - 추가 스타일 클래스
 */
function Label({ children, className = '', ...props }) {
  return (
    <span
      className={`
        text-xs font-medium
        text-primary-600 bg-primary-50
        px-2 py-1 rounded
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  )
}

const Typography = {
  Heading,
  Text,
  Label,
}

export default Typography
