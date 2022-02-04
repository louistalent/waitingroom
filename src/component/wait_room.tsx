import { useMediaQuery, Box, Text, Image, Button, HStack, VStack, Center, Input, Heading } from "@chakra-ui/react";
import { SearchIcon, ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import rmale from "../assets/rect-male.png";
import userBg from "../assets/user-bg.png";
import logo from "../assets/logo.png";
import call from "../assets/call.png";
import setting from "../assets/setting.svg";

import logopart1 from "../assets/logo-part1.svg";
import logopart2 from "../assets/logo-part2.svg";

import { Link } from 'react-router-dom';
import "./wait_room.css";
import { BsXLg, BsStarFill, BsWallet2, BsCheckCircle, BsBoxArrowUp, BsThreeDotsVertical, BsStar, BsFillPersonFill, BsList, BsShieldShaded } from "react-icons/bs";
import { useState } from "react";

import { IoIosWallet } from "react-icons/io";
import { FaShieldAlt, FaGem } from "react-icons/fa";
import { cwd } from "process";

interface RubyType {
    w: number
    h: number
    fill1?: string
    fill2?: string
}
const Ruby = ({ w, h, fill1, fill2 }: RubyType) => {
    return (
        <svg width={w} height={h} viewBox="0 0 33 29" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.8145 0L33 9.06085H27.2075L23.2424 0H27.8145ZM20.4819 0L24.4469 9.06085H8.5483L12.5181 0H20.4819ZM5.18551 0H9.75595L5.79254 9.06085H0L5.18551 0ZM0 10.8737H5.76846L12.8152 25.1269C12.8327 25.1641 12.8361 25.2062 12.8248 25.2457C12.8136 25.2852 12.7884 25.3193 12.7538 25.342C12.7192 25.3647 12.6775 25.3743 12.6363 25.3692C12.5952 25.3641 12.5572 25.3446 12.5294 25.3142L0 10.8737ZM8.49049 10.8737H24.5095L16.6598 28.8906C16.6474 28.9228 16.6254 28.9505 16.5967 28.97C16.568 28.9895 16.534 29 16.4992 29C16.4644 29 16.4304 28.9895 16.4017 28.97C16.373 28.9505 16.351 28.9228 16.3386 28.8906L8.49049 10.8737ZM20.1832 25.1269L27.2299 10.8737H32.9984L20.4722 25.3094C20.4465 25.3444 20.4082 25.3683 20.3652 25.3763C20.3222 25.3843 20.2777 25.3758 20.2408 25.3525C20.204 25.3292 20.1775 25.2929 20.1668 25.251C20.156 25.2091 20.1619 25.1647 20.1832 25.1269Z" fill="url(#paint0_linear_2_52)" />
            <defs>
                <linearGradient id="paint0_linear_2_52" x1="15.7326" y1="14.5" x2="10.4032" y2="6.07824" gradientUnits="userSpaceOnUse">
                    {/* <stop stopColor="#7E599B" />
                    <stop offset="1" stopColor="#BF76F3" /> */}
                    <stop stopColor={fill1} />
                    <stop offset="1" stopColor={fill2} />
                </linearGradient>
            </defs>
        </svg>
    )
}

interface SearchProps {
    setIsSearch: any
}
const SearchBox = ({ setIsSearch }: SearchProps) => {
    return (
        <>
            <Box onClick={() => setIsSearch(false)} position={'fixed'} zIndex={'998'} background={'transparent'} right={0} left={0} top={0} bottom={0}></Box>
            <Box background={'#2e2b30'} p={'10px'} position='fixed' zIndex={'10000'} left={0} right={0} top={0} height={'50px'}>
                <Center>
                    <Box w='80%' className="justify-s">
                        <Box className="justify" borderBottom='2px #3f3943 solid'>
                            <SearchIcon w='20px' color='gray.300'></SearchIcon>
                            <Input className="site-font" color='white' w='200px' ml='5px' placeholder="search" variant='unstyled'></Input>
                        </Box>
                        <BsXLg onClick={() => setIsSearch(false)} className="white" fontSize={'22px'} />
                    </Box>
                </Center>
            </Box>
        </>
    )
}
interface HamProps {
    cancel_hamburger: any
    online: boolean
    setOnline: any
}
const Hamburger = ({ cancel_hamburger, online, setOnline }: HamProps) => {
    return (
        <>
            <Box onClick={() => cancel_hamburger(false)} position={'fixed'} zIndex={'998'} background={'transparent'} right={0} left={0} top={0} bottom={0}></Box>

            <Box color={'white'} className="hamburger-list" p={'40px'}>
                {/* status */}
                <Box className="" mt='9px'>
                    <Box className="r">
                        <Box className="c-s-24 justify-s">
                            <Box className="justify-s">
                                <Text onClick={() => setOnline(true)} border={`${online ? '1px white solid' : ''}`} zIndex={online ? '1001' : ''} color={online ? '#a0ffa0' : ''} mr='-3px' fontSize={'12px'} className="out-btn ham-option">Online</Text>
                                <Text onClick={() => setOnline(false)} border={online ? '' : '1px white solid'} zIndex={online ? '1000' : ''} color={online ? '' : '#a0ffa0'} ml='-3px' fontSize={'12px'} className="out-btn ham-option">Offline</Text>
                            </Box>
                            <Box>
                                <BsXLg onClick={() => cancel_hamburger(false)} className="white" cursor='pointer' fontSize={'30px'} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {/* image section */}
                <Box className="" pt={'50px'}>
                    <Box className="r">
                        <Box className="c-s-24" >
                            <Box className="" display={'flex'} alignItems='center'>
                                <Text fontSize={'20px'}>Adam</Text>
                                &nbsp;
                                <BsCheckCircle></BsCheckCircle>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="r">
                        <Box className="c-s-24 ">
                            <Box>
                                <Text fontSize={'13px'}>@adam220adam</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="r" pt={'10px'}>
                        <Box className="c-s-24 justify-s">
                            <Box borderRadius='10px' backgroundImage={rmale} position='relative' minW='100px' maxW='100px' h="150px" backgroundSize='cover'>
                            </Box>
                            <Box borderRadius='10px' backgroundImage={rmale} position='relative' minW='100px' maxW='100px' h="150px" backgroundSize='cover'>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="r" pt="20px">
                        <Box className="c-s-24" >
                            <Text className="out-btn">Edit Profile</Text>
                        </Box>
                    </Box>
                </Box>
                {/*  control */}
                <Box className="" pt={'20px'} >
                    <Box className="" pt="20px">
                        <Box className="c-s-24 hamControl main-effect" >
                            <IoIosWallet fontSize={'30px'} />
                            <Box ml='35px' w='70px' textAlign='center'>
                                <Text fontWeight={'bold'}>Wallet</Text>
                            </Box>

                        </Box>
                    </Box>
                    <Box className="" pt="20px">
                        <Box className="c-s-24 hamControl main-effect" >
                            <FaGem fontSize={'27px'}></FaGem>
                            <Box ml='35px' w='70px' textAlign='center'>
                                <Text fontWeight={'bold'}>Earn</Text>
                            </Box>

                        </Box>
                    </Box>
                    <Box className="" pt="20px">
                        <Box className="c-s-24 hamControl main-effect" >
                            <BsStarFill fontSize={'26px'} />
                            <Box ml='35px' w='70px' textAlign='center'>
                                <Text fontWeight={'bold'}>Lists</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="r" pt="60px">
                        <Box className="c-s-24 justify-s">
                            <FaShieldAlt className="cur-po" fontSize={'30px'}></FaShieldAlt>
                            <Image className="cur-po" w='30px' src={setting}></Image>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

function Wait_room() {
    const [hamburger, setHamburger] = useState(false);
    const [ready, setReady] = useState(false);
    const [request, setRequest] = useState(false);
    const [online, setOnline] = useState(true);
    const [isSearch, setIsSearch] = useState(false);

    const [isLessMobile] = useMediaQuery('(max-width: 415px)');
    const [isMobile] = useMediaQuery('(max-width: 560px)');
    const [isTable] = useMediaQuery('(max-width: 800px)');
    const [isCom] = useMediaQuery('(max-width: 1000px)');
    const gBaseColor = '#201d23';
    const gbBaseColor = '#161218';
    return (
        <>
            {hamburger &&
                <Hamburger setOnline={setOnline} online={online} cancel_hamburger={setHamburger} />
            }
            {isSearch &&
                <SearchBox setIsSearch={setIsSearch} />
            }
            <Box pr={isLessMobile ? '12px' : '35px'} pl={isLessMobile ? '12px' : '35px'} color='white'>

                <HStack justify='space-between' pt={10} pb={2}>
                    <Box className={'justify'}>
                        <Link to='/home'> <Image w='60px' src={logo} /></Link>
                        <Box className="justify" ml={isMobile ? '0px' : '20px'} display={isMobile ? 'none' : ''} borderBottom='2px #3f3943 solid'>
                            <SearchIcon w='13px' color='gray.300'></SearchIcon>
                            <Input className="site-font" w='100px' ml='5px' placeholder="search" variant='unstyled'></Input>
                        </Box>
                        {isMobile &&
                            <SearchIcon ml={'15px'} _hover={{ color: '#A0FFA0' }} cursor={'pointer'} onClick={() => setIsSearch(true)} w='22px' fontSize={'20px'} color='gray.300'></SearchIcon>
                        }
                    </Box>
                    <Box>
                        <HStack>
                            <Box className={`${isMobile ? '' : 'justify'}`} display={isMobile ? 'flex' : ''}
                                flexDir={`${isMobile ? 'row' : 'row'}`}
                                borderRadius='7px' overflow='hidden'>
                                <Box className="justify " fontSize='18px' color="white" p='4px 8px 4px 8px' background={gBaseColor}>
                                    <Ruby h={20} w={15} fill1='#7E599B' fill2='#BF76F3'></Ruby>&nbsp; 35,675
                                </Box>
                                <Box fontSize='18px' color="white" p='6px 8px 6px 8px' background={gbBaseColor}>$ 35.66</Box>
                            </Box>
                            {/* <Box></Box> */}
                            <BsList onClick={() => setHamburger(true)} className="hamburger"></BsList>
                        </HStack>
                    </Box>
                </HStack>
                <Center>
                    <VStack w={isMobile ? '100%' : '80%'}>
                        <VStack className="wait_bg" position='relative' overflow='hidden' p={0} w={'100%'} borderRadius="20px">
                            <HStack w='100%' p="10px" className="r" background='#241f28' position='relative'>
                                <Box backgroundImage={userBg} backgroundSize='cover' width='100%' bgRepeat='no-repeat' position='absolute' left={0} right={0} top={0} bottom={0}></Box>

                                {/* <Box className="r"> */}
                                <Box className="" ml='0px!important' w='100%' display={isMobile || isTable ? '' : 'none'} >
                                    <Box className="padd-l-0" w={'33px'}>
                                        <ChevronLeftIcon cursor={'pointer'} className="mauto" w='30px' h='30px' />
                                    </Box>
                                </Box>
                                <HStack h='170px' justifyContent={isTable ? 'space-evenly' : 'space-between'} className="c-s-24 c-m-10 padd-l-0">
                                    <Box display={isMobile || isTable ? 'none' : ''} className=" padd-l-0" h='160px'>
                                        <ChevronLeftIcon cursor={'pointer'} w='30px' h='30px' />
                                    </Box>
                                    <Box borderRadius='10px' backgroundImage={rmale} position='relative' minW='110px' maxW='110px' h="150px" backgroundSize='cover'>
                                        <Box borderRadius='50%' position='absolute' right={0} height={0} background='#A0FFA0' w='10px' h='10px'></Box>
                                    </Box>
                                    <VStack h="100%" p='10px' alignItems='flex-start' justifyContent='space-between'>
                                        <Box>
                                            <HStack alignItems='center'>
                                                <Heading className="site-font" marginTop={isMobile ? '-10px' : ''} fontSize='40px' >Future</Heading>
                                                <BsCheckCircle></BsCheckCircle>
                                                {/* <Badge p={2} backgroundColor='green.400' borderRadius={50}></Badge> */}
                                            </HStack>
                                            <Text fontFamily='proxima_nova_rgregular'>@futurehendrixx</Text>
                                        </Box>
                                        {!ready ?
                                            <Button onClick={() => setReady(true)} color='black' w='100px' _selected={{}} _hover={{ boxShadow: ' 0 0 10px 0 #50ba51 inset, 0 0 10px 4px #50ba51 ' }}>Ready</Button>
                                            : !request ?
                                                <Button onClick={() => setRequest(true)} background='#2e2b30' color='white' w='140px' _hover={{ boxShadow: ' 0 0 10px 0 #50ba51 inset, 0 0 10px 4px #50ba51 ' }}>Request sent</Button>
                                                :
                                                <Text fontSize='22px'>Is calling you now</Text>
                                        }
                                        {isCom && request && <Button w='180px' _hover={{ boxShadow: ' 0 0 10px 0 #50ba51 inset, 0 0 10px 4px #50ba51 ' }} bottom={2} p={'24px'}>
                                            <HStack>
                                                <HStack>
                                                    <Image h='28px' src={logopart1}></Image>
                                                    <Image h='20px' src={logopart2} marginLeft='1px!important'></Image>
                                                </HStack>
                                                {/* <Image w='45px' src={blackLogo}></Image> */}
                                                <Heading className="site-font video_effect" fontSize={isMobile ? '15px' : '22px'} color='gray.700'>Pick up</Heading>
                                            </HStack>
                                        </Button>}
                                    </VStack>
                                </HStack>
                                <Box h='170px' display={isCom ? 'none' : ''} className="c-m-6 c-l-6">
                                    {request &&
                                        <VStack h='100%' alignItems='flex-start' justifyContent='space-between'>
                                            <Box></Box>
                                            <Button w='180px' _hover={{ boxShadow: ' 0 0 10px 0 #50ba51 inset, 0 0 10px 4px #50ba51 ' }} bottom={2} p={'24px'}>
                                                <HStack>
                                                    <HStack>
                                                        <Image h='28px' src={logopart1}></Image>
                                                        <Image h='20px' src={logopart2} marginLeft='1px!important'></Image>
                                                    </HStack>
                                                    {/* <Image w='45px' src={blackLogo}></Image> */}
                                                    <Heading className="site-font video_effect" fontSize={isMobile ? '15px' : '22px'} color='gray.700'>Pick up</Heading>
                                                </HStack>
                                            </Button>
                                        </VStack>
                                    }
                                </Box>
                                <Box h={isMobile || isTable ? '' : '170px'} className="c-s-23 c-m-12 c-l-7" display='flex' alignItems='center' justifyContent={isMobile || isTable ? 'center' : 'right'} p='10px'>
                                    <VStack h='100%' alignItems='flex-end' justifyContent='space-between' textAlign='right'>
                                        <Box whiteSpace='nowrap'>
                                            <Text color='grey'>Up to <span className="white">6 second</span> long chat</Text>
                                            <Text color='grey'> <span className="white">#31</span> out of <span className="white">#48</span> in queue</Text>
                                        </Box>
                                        <HStack>
                                            <Ruby w={30} h={20} fill1="#7E599B" fill2="#BF76F3"></Ruby>
                                            <Heading className="site-font" fontSize='25px' >10,000</Heading>
                                            <Text whiteSpace='nowrap' fontSize='13px' color='grey'>per second</Text>
                                        </HStack>
                                    </VStack>
                                </Box>
                                {/* </Box> */}
                            </HStack>
                            <VStack minH="470px" width='100%' className="mt0">
                                {ready ?
                                    <Image marginTop={0} src={call} w='100%' h={isMobile || isTable ? '350px' : '470px'}></Image>
                                    :
                                    <VStack marginTop={20}>
                                        <Button _hover={{ color: 'black', background: 'white' }} background='#2e2b30' w='200px' textDecoration='underline' fontFamily='Proxima_Nova' fontWeight='thin' fontSize='20px' >Enable Camera</Button>
                                        <Box padding='20px'></Box>
                                        <Button _hover={{ color: 'black', background: 'white' }} background='#2e2b30' w='200px' textDecoration='underline' fontFamily='Proxima_Nova' fontWeight='thin' fontSize='20px' >Enable Mic</Button>
                                    </VStack>
                                }
                            </VStack>
                        </VStack>
                    </VStack>
                </Center>

            </Box>
        </>
    );
}

export default Wait_room;
