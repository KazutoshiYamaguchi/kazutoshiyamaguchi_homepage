import { Text, Box, Stack } from '@chakra-ui/react';
import React, { memo, VFC } from 'react';
import Lottie from 'react-lottie';

import animation from '../../../animation data/Page404.json';

type Props = {
    height?: string,
    width?: string
}

export const Page404Animation: VFC<Props> = memo((props) => {

    const { height = "100%", width = "100%" } = props

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };



    return (


        <Box>

            <Lottie options={defaultOptions} height={height} width={width} />

        </Box>

    );
});

