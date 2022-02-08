import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecule/MenuDrawer";

export const Header: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const history = useHistory();
    const onClickHome = useCallback(() => {
        history.push("/entrance/home")
        onClose()
    }, []);
    const onClickUserManagement = useCallback(
        () => {
            history.push("/entrance/home/profile")
            onClose()
        }, []);
    const onClickSetting = useCallback(() => {
        history.push("/entrance/home/setting")
        onClose()
    }, []);

    return (
        <>
            <Flex
                as="nav"
                bg="teal.500"
                color="gray.50"
                align="center"
                justify="space-between"
                padding={{ base: 3, md: 3 }}

            >
                <Flex
                    align="center"
                    as="a"
                    mr={8}
                    _hover={{ cursor: "pointer" }}
                    onClick={onClickHome}
                >
                    <Heading as="h1" fontSize={{ base: "sm", md: "md" }} >
                        <p className="font-link">
                            Kazutoshi Yamaguchi
                        </p>
                    </Heading>
                </Flex>
                <Flex
                    align="center"
                    fontSize="sm"
                    flexGrow={2}
                    display={{ base: "none", md: "flex" }}
                >
                    <Box pr={4}>
                        <Link onClick={onClickUserManagement} className="font-link">Profile</Link>
                    </Box>
                    <Link onClick={onClickSetting} className="font-link">Message</Link>
                </Flex>
                <MenuIconButton onOpen={onOpen} />
            </Flex>
            <MenuDrawer
                isOpen={isOpen}
                onClose={onClose}
                onClickHome={onClickHome}
                onClickUserManagement={onClickUserManagement}
                onClickSetting={onClickSetting}
            />
        </>
    );
});