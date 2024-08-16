import { useColorModeValue, Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const LogoComponent = () => {
  const imagePath = useColorModeValue('/images/logo-svg-light.png', '/images/logo-svg-dark.png');

  return (
    <Link href="/" scroll={false}>
      <Box
        as="a"
        cursor="pointer"
        display="inline-flex"
        alignItems="center"
        height="30px"
        lineHeight="20px"
        padding="10px"
        textDecoration="none"
        fontWeight="bold"
        fontSize="18px"
        _hover={{
          img: {
            transform: 'rotate(20deg)',
          },
        }}
      >
        <Image src={imagePath} width={31} height={31} alt="Logo" priority />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='"M PLUS Rounded 1c", sans-serif'
          ml={3}
        >
          Sandro Vargas
        </Text>
      </Box>
    </Link>
  );
};

const Logo = dynamic(() => Promise.resolve(LogoComponent), { ssr: false });

export default Logo;