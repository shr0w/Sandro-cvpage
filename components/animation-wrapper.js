import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

const AnimationWrapper = ({ children, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      {...props}
    >
      <Box {...props}>{children}</Box>
    </motion.div>
  )
}

export default AnimationWrapper 