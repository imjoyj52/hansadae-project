/**
 * Form 컴포넌트
 * 폼 관련 UI 요소들을 제공합니다.
 */

/**
 * Input 컴포넌트
 * 텍스트 입력 필드
 *
 * @param {Object} props
 * @param {string} props.label - 라벨 텍스트
 * @param {string} props.type - 입력 타입 (기본: 'text')
 * @param {string} props.placeholder - 플레이스홀더
 * @param {string} props.error - 에러 메시지
 * @param {string} props.className - 추가 스타일 클래스
 */
function Input({
  label,
  type = 'text',
  placeholder,
  error,
  className = '',
  ...props
}) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-secondary-700">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`
          w-full px-4 py-2
          border rounded-lg
          text-secondary-900 placeholder-secondary-400
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
          transition-colors duration-200
          ${error ? 'border-red-500' : 'border-secondary-200'}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}

/**
 * Textarea 컴포넌트
 * 여러 줄 텍스트 입력 필드
 *
 * @param {Object} props
 * @param {string} props.label - 라벨 텍스트
 * @param {string} props.placeholder - 플레이스홀더
 * @param {number} props.rows - 행 수 (기본: 4)
 * @param {string} props.error - 에러 메시지
 * @param {string} props.className - 추가 스타일 클래스
 */
function Textarea({
  label,
  placeholder,
  rows = 4,
  error,
  className = '',
  ...props
}) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-secondary-700">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        rows={rows}
        className={`
          w-full px-4 py-2
          border rounded-lg
          text-secondary-900 placeholder-secondary-400
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
          transition-colors duration-200
          resize-none
          ${error ? 'border-red-500' : 'border-secondary-200'}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}

/**
 * Select 컴포넌트
 * 선택 드롭다운
 *
 * @param {Object} props
 * @param {string} props.label - 라벨 텍스트
 * @param {Array} props.options - 옵션 배열 [{ value, label }]
 * @param {string} props.placeholder - 플레이스홀더
 * @param {string} props.error - 에러 메시지
 * @param {string} props.className - 추가 스타일 클래스
 */
function Select({
  label,
  options = [],
  placeholder = '선택하세요',
  error,
  className = '',
  ...props
}) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-secondary-700">
          {label}
        </label>
      )}
      <select
        className={`
          w-full px-4 py-2
          border rounded-lg
          text-secondary-900
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
          transition-colors duration-200
          ${error ? 'border-red-500' : 'border-secondary-200'}
        `}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}

const Form = {
  Input,
  Textarea,
  Select,
}

export default Form
