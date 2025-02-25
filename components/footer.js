import { Box } from '@chakra-ui/react'

const Footer = () => (
  <Box align="center" opacity={0.7} fontSize="sm">
    &copy; {new Date().getFullYear()} Sandro Vargas García. All Rights
    Reserved. Made with ❤️ in Barcelona, Spain.
  </Box>
)

export default Footer
