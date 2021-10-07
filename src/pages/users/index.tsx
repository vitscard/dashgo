import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiDeleteBinLine, RiEditLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return(
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="blue"
                leftIcon={<Icon as={RiAddLine} />}
                href="/users/create"
                >Novo</Button>
              </Link>

          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="blue" />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th>}
                <Th paddingRight="0" paddingLeft="0"></Th>
                <Th paddingRight="0" paddingLeft="0"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="blue" />
                </Td>
                <Td>
                  <Box>
                    <Text m={0} fontWeight="bold">Vitor Cardoso</Text>
                    <Text m={0} fontSize="small" color="gray.300">vit.scard@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>
                  16 de agosto, 2021
                </Td> }
                <Td width={["130","30"]} paddingRight="0" paddingLeft="0">
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="blue"
                    leftIcon={<Icon as={RiEditLine} />}
                  >{ isWideVersion ? 'Editar' : '' }</Button>
                </Td>
                <Td paddingRight="0" paddingLeft="0">
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="red"
                    leftIcon={<Icon as={RiDeleteBinLine} />}
                  >{ isWideVersion ? 'Remover' : '' }</Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="blue" />
                </Td>
                <Td>
                  <Box>
                    <Text m={0} fontWeight="bold">Vitor Cardoso</Text>
                    <Text m={0} fontSize="small" color="gray.300">vit.scard@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>
                  16 de agosto, 2021
                </Td> }
                <Td width={["130","30"]} paddingRight="0" paddingLeft="0">
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="blue"
                    leftIcon={<Icon as={RiEditLine} />}
                  >{ isWideVersion ? 'Editar' : '' }</Button>
                </Td>
                <Td paddingRight="0" paddingLeft="0">
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="red"
                    leftIcon={<Icon as={RiDeleteBinLine} />}
                  >{ isWideVersion ? 'Remover' : '' }</Button>
                </Td>
              </Tr>


            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );

}