import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const menuItems = [
  {
    title: '웹디자인',
    items: [
      { name: '천 개의 파랑', path: '/blue-blue' },
      { name: '마루', path: '/maru' },
      { name: '포트폴리오', path: '/portfolio' },
      { name: '웹사이트 UI', path: '/ui-guide' },
    ],
  },
  {
    title: '기타(준비중)',
    items: [
      { name: '기타 페이지', path: '/etc' },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

function Main() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-primary-light via-white to-primary-light/30"
    >
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* 헤더 */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <img
              src="/img/imjoy_logo.png"
              alt="imjoy"
              className="h-24 md:h-32 lg:h-40 mx-auto"
            />
          </motion.div>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            웹 포트폴리오에 오신 것을 환영합니다.
          </p>
        </motion.header>

        {/* 메뉴 섹션 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-12"
        >
          {menuItems.map((section) => (
            <motion.section key={section.title} variants={itemVariants}>
              <h2 className="text-xl font-semibold text-black mb-6 border-b-2 border-primary/30 pb-2">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {section.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="group block"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 border border-gray-200 hover:bg-primary hover:border-primary text-center"
                    >
                      <h3 className="text-lg font-bold text-primary group-hover:text-white transition-colors">
                        {item.name}
                      </h3>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>

        {/* 푸터 */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20 text-gray-400 text-sm"
        >
          <p className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            imjoy Web Portfolio
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
          </p>
        </motion.footer>
      </div>
    </motion.div>
  )
}

export default Main
