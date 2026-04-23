import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Pages
import Main from './pages/Main'
import BlueBlue from './pages/blue-blue'
import Maru from './pages/maru'
import Portfolio from './pages/portfolio'
import UiGuide from './pages/ui-guide'
import Etc from './pages/etc'

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<Main />} />

        {/* 웹디자인 섹션 */}
        <Route path="/blue-blue" element={<BlueBlue />} />
        <Route path="/maru" element={<Maru />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/ui-guide" element={<UiGuide />} />

        {/* 기타 섹션 */}
        <Route path="/etc" element={<Etc />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
