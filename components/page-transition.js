import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const variants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.2
    }
  },
  out: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2
    }
  }
}

const PageTransition = ({ children }) => {
  const { asPath } = useRouter()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={asPath}
        variants={variants}
        initial="out"
        animate="in"
        exit="out"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition 