
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, VFC } from "react";

import image from "../../ImageSource/Images/kazu_drowning.jpg"
import { ProfileMessage } from "../atoms/ProfileMessage";
import { HomeMessages } from "./Messages/HomeMessages";

export const Profile: VFC = () => {

    return <Flex display="flex" boxSize={10} w='100%' h="100%" p={10} bg='teal.900'>
        <Box marginLeft='auto' marginRight='auto'>
            <ProfileMessage />
        </Box>

        <Image marginLeft="auto" w={{ base: "300px", md: "500px" }} mr={{ base: 10, md: 20 }} borderRadius={10} src={image} alt='kazu' />


    </Flex >
}