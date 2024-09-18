import { Box } from '@chakra-ui/react'

const Footer = () => (
  <Box align="center" opacity={0.7} fontSize="sm">
    &copy; {new Date().getFullYear()} Sandro Vargas García. All Rights
    Reserved. Site based on Takuya Matsuyama&#39s website.
  </Box>
)

export default Footer
