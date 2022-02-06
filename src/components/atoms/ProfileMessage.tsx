import { Box, Center, Container, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { VFC } from "react"



export const ProfileMessage: VFC = () => {

    const redirectToBizyoApp = () => {
        window.location.href = "https://apps.apple.com/us/app/美女タイマー/id1534133576";
    };
    const redirectToBinanApp = () => {
        window.location.href = "https://apps.apple.com/jp/app/美男タイマー/id1534871597";
    };
    const redirectToDonotSay21 = () => {
        window.location.href = "https://apps.apple.com/us/app/do-not-say-21/id1528460346";
    };

    return <Flex>

        <Stack>

            <Heading className="font-link" as="h1" color='gray.100'>Profile</Heading>

            <Divider />
            <Box>
                <Stack spacing={4}>
                    <Text color='gray.100' fontSize={{ base: "10px", md: "20px" }} >生年月日:1996年12月4日</Text>
                    <Text color='gray.100' fontSize={{ base: "10px", md: "20px" }}  >出身地：神奈川</Text>
                    <Text color='gray.100' fontSize={{ base: "10px", md: "20px" }} >最終学歴：東海大学工学部　建築学科　2019年3月卒業</Text>
                    <Text color='gray.100' fontSize={{ base: "10px", md: "20px" }} >座右の銘：「髪の毛が後退しているのではない。私が前進しているのである。」by孫正義</Text>
                    <Text color='gray.100' fontSize={{ base: "10px", md: "20px" }} >特技：じゃんけん</Text>
                    <Text color='gray.100' fontSize={{ base: "10px", md: "20px" }} >資格：TOEIC(英語の試験)950点、IELTS7.5点</Text>
                    <Text color='gray.100' fontSize={{ base: "10px", md: "20px" }}  >▼今まで開発した個人開発アプリ</Text>
                    <Text as='u' onClick={redirectToBizyoApp} fontSize={{ base: "10px", md: "20px" }} color='gray.100' _hover={{ opacity: 0.7, cursor: 'pointer' }}>
                        ・美女タイマー
                    </Text>
                    <Text as='u' onClick={redirectToBinanApp} fontSize={{ base: "10px", md: "20px" }} color='gray.100' _hover={{ opacity: 0.7, cursor: 'pointer' }}>
                        ・美女タイマー
                    </Text>
                    <Text as='u' onClick={redirectToDonotSay21} fontSize={{ base: "10px", md: "20px" }} color='gray.100' _hover={{ opacity: 0.7, cursor: 'pointer' }}>
                        ・Do not say 21!
                    </Text>
                </Stack>

            </Box>

        </Stack>



    </Flex>
}