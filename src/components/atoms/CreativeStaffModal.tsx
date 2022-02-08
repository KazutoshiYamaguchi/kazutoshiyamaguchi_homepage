import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { CreativeStaffInfo } from "./CreativeStaffInfo";


export const CreativeStaffModal: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Text pr={8} onClick={onOpen} as="u" className="font-link" _hover={{ cursor: "pointer", opacity: 0.8 }} fontSize={{ base: "sm", md: "sm" }}>Creative Staff</Text>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg="whiteAlpha.600" />
                <ModalContent bg="gray.900" opacity={0.1}>
                    <ModalHeader className="font-link" color="gray.100" fontWeight='bold' >Creative Staff</ModalHeader>
                    <ModalCloseButton variant="unstyled" bg="none" color="white " />
                    <ModalBody>
                        {CreativeStaffInfo.map((staff, index) => (
                            <Text key={index} className={staff.className} mb='1rem' color="gray.100">
                                {`${staff.title} : ${staff.name}`}
                            </Text>
                        ))}



                    </ModalBody>


                </ModalContent>
            </Modal>
        </>
    );
});
