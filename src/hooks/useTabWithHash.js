import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * URL hash를 사용해서 탭 상태를 유지하는 훅
 * 새로고침해도 현재 탭이 유지되고, 링크 공유도 가능
 *
 * @param {string} defaultTab - 기본 탭 ID
 * @param {string[]} validTabs - 유효한 탭 ID 목록
 * @returns {[string, function]} - [현재 탭, 탭 변경 함수]
 *
 * 사용 예시:
 * const [activeTab, setActiveTab] = useTabWithHash('summary', ['summary', 'review', 'purchase'])
 */
function useTabWithHash(defaultTab, validTabs) {
  const location = useLocation()
  const navigate = useNavigate()

  // URL hash에서 초기 탭 값 가져오기
  const getTabFromHash = () => {
    const hash = location.hash.replace('#', '')
    return validTabs.includes(hash) ? hash : defaultTab
  }

  const [activeTab, setActiveTabState] = useState(getTabFromHash)

  // URL hash 변경 시 탭 상태 업데이트
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (validTabs.includes(hash) && hash !== activeTab) {
      setActiveTabState(hash)
    }
  }, [location.hash, validTabs, activeTab])

  // 탭 변경 시 URL hash도 업데이트
  const setActiveTab = (tabId) => {
    if (validTabs.includes(tabId)) {
      setActiveTabState(tabId)
      navigate(`${location.pathname}#${tabId}`, { replace: true })
    }
  }

  return [activeTab, setActiveTab]
}

export default useTabWithHash
