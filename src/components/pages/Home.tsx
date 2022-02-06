
import { Box, Flex, Image, Text, Link, Center, Stack } from "@chakra-ui/react";
import { useEffect, VFC } from "react";


import image from "../../ImageSource/Images/kazu_dinasour.jpg"
import { HomeMessages } from "./Messages/HomeMessages";

export const Home: VFC = () => {


    return <Box display="flex" boxSize={10} w='100%' h="100%" p={10} bg='teal.900'>
        <Image w={{ base: "300px", md: "500px" }} mr={{ base: 10, md: 20 }} borderRadius={10} src={image} alt='kazu' />
        <Box w="50%" marginLeft="auto" bg="white.900" >

            <Stack textAlign="center" spacing={4}>
                {HomeMessages.map((message) => (

                    <Text className="font-link" m={9} key={message.key} fontSize={{ base: "10px", md: "20px" }} color='gray.100' _hover={{ opacity: 0.7, cursor: 'pointer' }}>
                        {message.message}
                        <br />
                        {message.engMessage}

                    </Text>

                ))}
            </Stack>



        </Box>

    </Box>
}