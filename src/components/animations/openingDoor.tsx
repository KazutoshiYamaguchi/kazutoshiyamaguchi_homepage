import { Text, Box, Stack } from '@chakra-ui/react';
import React, { memo, VFC } from 'react';
import Lottie from 'react-lottie';

import animation from '../../animation data/OpeningDoor.json';

type Props = {
    onClick?: () => void,
    text?: string
}

export const OpeningDoor: VFC<Props> = memo((props) => {

    const { onClick, text } = props

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (


        <Box mt={40} _hover={{ cursor: "pointer", opacity: 0.8 }}
            onClick={onClick}>
            <Stack textAlign="center" >
                <Lottie options={defaultOptions} height={300} width={300} />

                <Text fontSize="2xl" fontWeight='bold' color='gray.400'>{text}</Text>

            </Stack>
        </Box>

    );
});

