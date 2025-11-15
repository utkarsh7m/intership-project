import React from 'react';
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
  IconButton,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import Header from './Header';
import { Link } from 'react-router-dom';

const MotionBox = motion(Box);

const Home = () => {
  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, padding: '10px' },
  };

  return (
    <ChakraProvider>
      <Header />
      <HStack spacing={4} height="100vh" position="absolute" top="-210px" left="200px">
        {/* Master dropdown */}
        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            colorScheme="teal"
            size="lg"
            width="360px"
            height="80px"
            fontSize="50px"
          >
            Master
          </MenuButton>
          <MenuList>
            {/* Detector Master submenu */}
            <MenuItem>
              <Menu>
                <MenuButton
                  as={Button}
                  // rightIcon={<ChevronDownIcon />}
                  colorScheme="gray"
                  size="lg"
                  width="200px"
                  height="50px"
                  fontSize="17px"
                >
                  Detector Master
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <MenuList>
                      <MenuItem>
                        <Link to="/pdmaster" >Create</Link>
                      </MenuItem>
                      {/* <MenuItem>
                        <Link to="/detectorchange">Change</Link>
                      </MenuItem> */}
                      <MenuItem>
                        <Link to="/pdmreport">Display</Link>
                      </MenuItem>
                    </MenuList>
                  </MenuItem>
                </MenuList>
              </Menu>
            </MenuItem>
            {/* Other Master submenu items */}
            <MenuItem>
              <Menu>
                <MenuButton
                  as={Button}
                  // rightIcon={<ChevronDownIcon />}
                  colorScheme="gray"
                  size="lg"
                  width="200px"
                  height="50px"
                  fontSize="17px"
                >
                  Location Master
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <MenuList>
                      <MenuItem>
                        <Link to="/pdmaster">Create</Link>
                      </MenuItem>
                      {/* <MenuItem>
                        <Link to="/detector-master/change">Change</Link>
                      </MenuItem> */}
                      <MenuItem>
                        <Link to="/detector-master/display">Display</Link>
                      </MenuItem>
                    </MenuList>
                  </MenuItem>
                </MenuList>
              </Menu>{' '}
            </MenuItem>
            <MenuItem>
              <Menu>
                <MenuButton
                  as={Button}
                  // rightIcon={<ChevronDownIcon />}
                  colorScheme="gray"
                  size="lg"
                  width="200px"
                  height="50px"
                  fontSize="17px"
                >
                  Make Master
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <MenuList>
                      <MenuItem>
                        <Link to="/pdmaster">Create</Link>
                      </MenuItem>
                      {/* <MenuItem>
                        <Link to="/detector-master/change">Change</Link>
                      </MenuItem> */}
                      <MenuItem>
                        <Link to="/detector-master/display">Display</Link>
                      </MenuItem>
                    </MenuList>
                  </MenuItem>
                </MenuList>
              </Menu>{' '}
            </MenuItem>
            <MenuItem>
              <Menu>
                <MenuButton
                  as={Button}
                  // rightIcon={<ChevronDownIcon />}
                  colorScheme="gray"
                  size="lg"
                  width="200px"
                  height="50px"
                  fontSize="17px"
                >
                  Type Master
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <MenuList>
                      <MenuItem>
                        <Link to="/pdmaster">Create</Link>
                      </MenuItem>
                      {/* <MenuItem>
                        <Link to="/detector-master/change">Change</Link>
                      </MenuItem> */}
                      <MenuItem>
                        <Link to="/detector-master/display">Display</Link>
                      </MenuItem>
                    </MenuList>
                  </MenuItem>
                </MenuList>
              </Menu>{' '}
            </MenuItem>
            <MenuItem>
              <Menu>
                <MenuButton
                  as={Button}
                  // rightIcon={<ChevronDownIcon />}
                  colorScheme="gray"
                  size="lg"
                  width="200px"
                  height="50px"
                  fontSize="17px"
                >
                  Model Master
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <MenuList>
                      <MenuItem>
                        <Link to="/pdmaster" color="green">
                          Create
                        </Link>
                      </MenuItem>
                      {/* <MenuItem>
                        <Link to="/detector-master/change">Change</Link>
                      </MenuItem> */}
                      <MenuItem>
                        <Link to="/detector-master/display">Display</Link>
                      </MenuItem>
                    </MenuList>
                  </MenuItem>
                </MenuList>
              </Menu>{' '}
            </MenuItem>
          </MenuList>
        </Menu>

        {/* Transaction button */}
        <MotionBox initial="hidden" animate="visible" variants={buttonVariants}>
          <Button
            colorScheme="blue"
            size="lg"
            width="360px"
            height="80px"
            fontSize="50px"
          >
            <Link to={'/transaction'}>Transaction</Link>
          </Button>
        </MotionBox>

        {/* Report dropdown */}
        <MotionBox initial="hidden" animate="visible" variants={buttonVariants}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme="green"
              size="lg"
              width="360px"
              height="80px"
              fontSize="50px"
            >
              Report
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to={'/pdmreport'}>Portable Detector Master Report</Link>
              </MenuItem>
              <MenuItem>
                <Link to={'/master-report'}>Master Report</Link>
              </MenuItem>
              <MenuItem>
                <Link to={'/transaction-report'}>Transaction Report</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </MotionBox>
      </HStack>
    </ChakraProvider>
  );
};

export default Home;
