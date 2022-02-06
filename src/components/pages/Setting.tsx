
import { Box, Flex, Image, Text, Heading, Divider, Stack } from "@chakra-ui/react";
import { useEffect, VFC } from "react";

import image from "../../ImageSource/Images/kazu_funny.jpg"
import { HomeMessages } from "./Messages/HomeMessages";

export const Setting: VFC = () => {


    return <Box display="flex" w='100%' h="auto" p={10} bg='teal.900'>
        <Image marginTop={{ base: "50px", md: "100px" }} boxSize={{ base: "250px", md: "400px" }} w={{ base: "300px", md: "500px" }} mr={{ base: 10, md: 20 }} borderRadius={10} src={image} alt='kazu' />
        <Box w="50%" marginLeft="auto" marginRight="auto" bg="white.900" marginTop={8}>

            <Stack spacing={5} justify="center">
                <Heading className="font-link" as="h1" color='gray.100'>Message</Heading>

                <Divider />
                <Box textAlign="center">
                    <Stack spacing={3}>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">書くことがなかったので、最近起こった事件をお話しします。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">先日外出自粛の影響で暇すぎてDSのおいでよどうぶつの森をやりました。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">ラフレシアが咲いていて、そこに大量のハエが湧いていました。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">部屋に入ると、ゴキブリたちが軽快なフットワークで私をからかってきました。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">最初は彼らを倒すことなんぞ楽勝だろうと高を括っていました。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">こっちは食物連鎖のトップなんだぞ。と。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">だが、奴らの俊敏性は凄まじく、試合は長期戦にもつれ込み、終盤に差し掛かるに連れ私は翻弄されていきました。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">がしかし、死闘の末、私は奥に潜んでいた最後一匹にまで追い詰めました。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">大きさからして多分この巨大勢力を指揮していたボスでしょう。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">顔からしてとても頭のキレる老獪で狡猾だが、どこか親しみ易さもあり部下達からの信頼も厚かったに違いない。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">生きている世界が同じであれば仲良くなっていたかもしれない</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">奴と対面し、彼は含みのある笑みを浮かべていましたが、それに構わず最後の一撃を食らわせようと右足を上げました。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">その時、いきなり画面が暗くなりました。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">充電が切れたのです。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">それはこの戦争の負けを意味していたことに他なりませんでした。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">私は充電がないことに気づかなかった、彼はそれに気づいていてわざと長期戦に持ち込んだ。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">完全にやられました。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">最後まで勇敢な将軍でした。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100">その後、無事リセットさんに怒られました。</Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100"></Text>
                        <Text fontSize={{ base: "10px", md: "20px" }} color="gray.100"></Text>



                    </Stack>
                </Box>

            </Stack>


        </Box>

    </Box>
}