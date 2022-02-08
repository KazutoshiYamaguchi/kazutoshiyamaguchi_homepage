import { Box, Flex, Text } from "@chakra-ui/react";
import { VFC } from "react";
import styled from "styled-components";
import { CreativeStaffModal } from "../CreativeStaffModal"
export const Footer: VFC = () => {
  return <SFooter>
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      w="100%"
      textAlign="center"
      justify="space-between"
      padding={{ base: 2, md: 2 }}

    >
      <Text marginRight="auto" marginLeft="auto" className="font-link" fontSize={{ base: "sm", md: "sm" }}>copyright&copy;Kazutoshi Yamaguchi All rights reserved.</Text>;
      <CreativeStaffModal />

    </Flex>
  </SFooter >

};

const SFooter = styled.footer`
  background-color: #11999e;
  font-size:6px;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
 
`;
