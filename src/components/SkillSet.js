import { Container, Stack, Box, HStack, Text, Divider, Center, SimpleGrid } from "@chakra-ui/react";
import {FaJava, FaJsSquare, FaReact, FaAngular, FaGithubSquare} from "react-icons/fa"

export default function SkillSet({ color }) {
    return (
        <>
            <Container maxW={"3xl"} id="skill-set">
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 14 }}
                    pb={{ base: 20, md: 36 }}
                >
                    <Stack align="center" direction="row" p={4}>
                        <HStack mx={4}>
                            <Text color={`${color}.400`} fontWeight={800}>
                            03
                            </Text>
                            <Text fontWeight={800}>Skills</Text>
                        </HStack>
                        <Divider orientation="horizontal" />
                    </Stack>
                    <Center>
                        <SimpleGrid columns={5} spacing={4}>    
                            <FaJava size={42} />                            
                            <FaJsSquare size={42} />                            
                            <FaAngular size={42} />                            
                            <FaReact size={42} />                            
                            <FaGithubSquare size={42} />                            
                        </SimpleGrid>
                    </Center>
                </Stack>
            </Container>
        </>  
    );
}