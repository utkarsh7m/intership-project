import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  VStack,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,  useColorMode,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import Header from './Header';
import { Link } from 'react-router-dom';
import tt1 from './tt1.png'
import tt2 from './tt2.png'
import tt3 from './tt3.png'
const images = [tt1, tt2, tt3];

// const MotionBox = motion(Box);

const Home = () => {
  const { colorMode } = useColorMode();
  // const buttonVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: { opacity: 1, y: 0, padding: '10px' },
  // };
//Image for slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <ChakraProvider>
      <Header />
      <HStack spacing={6} height="12vh" width="100vw" position="absolute" top="95px" backgroundColor={colorMode === 'light' ? '#e6e6e6' : '#333a4d'} paddingLeft="35px">
        {/* Master dropdown */}
        <Menu closeOnSelect={false}>
          <Box color={""}>
          <MenuButton
            // as={Box}
            icon={<ChevronDownIcon />}
            // colorScheme="facebook"
            size="lg"
            width="160px"
            height="50px"
            fontSize="24px"
          >
            Master
          </MenuButton>
          </Box>
          <MenuList>
            {/* Detector Master submenu */}
            <MenuItem>
              <Menu>
                <Box>
                <MenuButton
                  // as={Box}
                  // rightIcon={<ChevronDownIcon />}
                  // colorScheme="gray"
                  size="lg"
                  width="200px"
                  height="50px"
                  fontSize="17px"
                >
                  Detector Master
                </MenuButton>
                </Box>
                <MenuList>
                  <MenuItem>
                  <VStack>
                    <Box as={Link} to="/pdmaster">Create</Box>
                    <Box as={Link} to="/pdmreport">Display</Box>
                    </VStack>
                  </MenuItem>
                </MenuList>
              </Menu>
            </MenuItem>
            {/* Other Master submenu items */}
            <MenuItem>
              <Menu>
                <Box>
                <MenuButton
                  // as={Box}
                  // rightIcon={<ChevronDownIcon />}
                  // colorScheme="gray"
                  size="lg"
                  width="200px"
                  height="50px"
                  fontSize="17px"
                >
                  Location Master
                </MenuButton>
                </Box>
                <MenuList>
                <MenuItem>
                  <VStack>
                    <Box as={Link} to="/locationcreate">Create</Box>
                    <Box as={Link} to="/pdmreport">Display</Box>
                    </VStack>
                  </MenuItem>
                </MenuList>
              </Menu>{' '}
            </MenuItem>
            <MenuItem>
              <Menu>
                <Box>
                <MenuButton
                  // as={Box}
                  // rightIcon={<ChevronDownIcon />}
                  // colorScheme="gray"
                  size="lg"
                  width="200px"
                  height="50px"
                  fontSize="17px"
                >
                  Make Master
                </MenuButton>
                </Box>
                <MenuList>
                <MenuItem>
                  <VStack>
                    <Box as={Link} to="/pdmaster">Create</Box>
                    <Box as={Link} to="/pdmreport">Display</Box>
                    </VStack>
                  </MenuItem>
                </MenuList>
              </Menu>{' '}
            </MenuItem>
            <MenuItem>
              <Menu>
                <Box>
                <MenuButton
                  // as={Box}
                  // rightIcon={<ChevronDownIcon />}
                  // colorScheme="gray"
                  size="lg"
                  width="200px"
                  height="50px"
                  fontSize="17px"
                >
                  Type Master
                </MenuButton>
                </Box>
                <MenuList>
                <MenuItem>
                  <VStack>
                    <Box as={Link} to="/pdmaster">Create</Box>
                    <Box as={Link} to="/pdmreport">Display</Box>
                    </VStack>
                  </MenuItem>
                </MenuList>
              </Menu>{' '}
            </MenuItem>
            <MenuItem>
              <Menu>
                <Box>
                <MenuButton
                  // as={Box}
                  // rightIcon={<ChevronDownIcon />}
                  // colorScheme="gray"
                  size="lg"
                  width="200px"
                  height="50px"
                  fontSize="17px"
                >
                  Model Master
                </MenuButton>
                </Box>
                <MenuList>
                <MenuItem>
                  <VStack>
                    <Box as={Link} to="/pdmaster">Create</Box>
                    <Box as={Link} to="/pdmreport">Display</Box>
                    </VStack>
                  </MenuItem>
                </MenuList>
              </Menu>{' '}
            </MenuItem>
          </MenuList>
        </Menu>

        {/* Transaction button */}
        <Menu closeOnSelect={false}>
          <Box>
          <MenuButton
            // as={Box}
            icon={<ChevronDownIcon />}
            // colorScheme="facebook"
            size="lg"
            width="210px"
            height="50px"
            fontSize="24px"
          >
            Transaction
          </MenuButton>
          </Box>
          <MenuList>
            {/* Detector Master submenu */}
            <MenuItem>
              <Menu>
                <Box>
                <MenuButton
                  // as={Box}
                  // rightIcon={<ChevronDownIcon />}
                  // colorScheme="gray"
                  size="lg"
                  width="265px"
                  height="50px"
                  fontSize="17px"
                >
                  Receive Detector Calibration
                </MenuButton>
                </Box>
                <MenuList>
                <MenuItem>
                  <VStack>
                    <Box as={Link} to="/execute-detector">Receive</Box>
                    <Box as={Link} to="/execute-detector">Modify</Box>
                    </VStack>
                  </MenuItem>
                </MenuList>
              </Menu>
            </MenuItem>
            </MenuList>
          </Menu>
          

        {/* Report dropdown */}
        
        <Menu closeOnSelect={false}>
  <Box>
    <MenuButton
      // as={Box}
      icon={<ChevronDownIcon />}
      // colorScheme="facebook"
      size="lg"
      width="160px"
      height="50px"
      fontSize="24px"
    >
      Report
    </MenuButton>
  </Box>
  <MenuList>
<MenuItem>
<Menu>
  <Box>
  <MenuButton
    size="lg"
    width="200px"
    height="50px"
    fontSize="17px"
    as={Link} to="/pdmreport"
  >
    Detector Report
  </MenuButton>
  </Box>
  </Menu>
  </MenuItem>
<MenuItem>
<Menu>
  <Box>
  <MenuButton
    size="lg"
    width="200px"
    height="50px"
    fontSize="17px"
    as={Link} to="/receive-report"
  >
    Receive Report
  </MenuButton>
  </Box>
  </Menu>
  </MenuItem>
<MenuItem>
<Menu>
  <Box>
  <MenuButton
    size="lg"
    width="200px"
    height="50px"
    fontSize="17px"
    as={Link} to="/master-report"
  >
    Master Report
  </MenuButton>
  </Box>
  </Menu>
  </MenuItem>
<MenuItem>
<Menu>
  <Box>
  <MenuButton
    size="lg"
    width="200px"
    height="50px"
    fontSize="17px"
    as={Link} to="/transaction-report"
  >
    Transaction Report
  </MenuButton>
  </Box>
  </Menu>
  </MenuItem>
  </MenuList>
</Menu>;
        
      </HStack>
      <Box position="relative">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          style={{ width: '44.8%', height: 'auto', position: 'absolute',left:"426px",top:"179px" }}
        />
        <IconButton
          icon={<ArrowBackIcon />}
          onClick={prevImage}
          position="absolute"
          left="450px"
          top="450px"
          transform="translateY(-50%)"
          variant="ghost"
          fontSize="30px"
        />
        <IconButton
          icon={<ArrowForwardIcon />}
          onClick={nextImage}
          position="absolute"
          right="450px"
          top="450px"
          transform="translateY(-50%)"
          variant="ghost"
          fontSize="30px"
        />
      </Box>
    </ChakraProvider>
  );
};

export default Home;
