import React from 'react'
import {Text, Box, Image} from '@chakra-ui/react'
import btcSrc from "./assets/bitcoin.jpg"
import {motion} from 'framer-motion'


const Home = () => {
  return (
    <Box bgColor={'black'} w={'full'} h={'85vh'}>
        <motion.div style={{
          height: '80vh',
        }}
        >
        <Image w={'full'} h={'full'} objectFit={['contain','cover']} src={btcSrc} filter={'grayscale(0) hue-rotate(160deg)'}/>
        </motion.div>
        <motion.div>
          <Text 
            fontFamily={'Bebas Neue'} 
            letterSpacing={5} 
            color={'gray.100'} 
            position={'absolute'} 
            top={['45%','35%']} 
            left={['15%','67%']} 
            fontSize={['5xl','7xl']} 
            textAlign={'end'} 
            fontWeight={'medium'}>
              CryptoSphere
            </Text>
        </motion.div>
        
    </Box>
  )
}

export default Home