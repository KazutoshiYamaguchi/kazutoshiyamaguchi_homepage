import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    Button
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickHome: () => void;
    onClickUserManagement: () => void;
    onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
    const {
        onClose,
        isOpen,
        onClickHome,
        onClickUserManagement,
        onClickSetting
    } = props;
    return (
        <Drawer placement="left" size="sm" isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.500">
                        <Button onClick={onClickHome} w="100%">
                            Top
                        </Button>
                        <Button onClick={onClickUserManagement} w="100%">
                            Profile
                        </Button>
                        <Button onClick={onClickSetting} w="100%">
                            Message
                        </Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
});
