import NextLink from "next/link";
import { useState } from 'react'
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import { RiAddLine, RiDeleteBinLine, RiEditLine, RiRefreshLine } from "react-icons/ri";


import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from '../../services/queryClient';
import { api } from '../../services/api';



export default function UserList() {

  const [page, setPage] = useState(1)

  const { data, isLoading, isFetching, error, refetch } = useUsers(page)


  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  async function handlePrefetchUser(userId: number) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`)

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10, //10 min
    })
  }

  return(
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              { !isLoading && isFetching && <Spinner size="sm"  color="gray.500" ml="4" /> }
            </Heading>
            <Flex justify="space-between" align="center">
              <Button
                as="a"                
                size="sm"
                fontSize="sm"
                colorScheme="blue"
                leftIcon={<Icon as={RiRefreshLine} />}
                onClick={() => refetch()}
              >
                Atualizar
              </Button>
              <NextLink href="/users/create" passHref>
                <Button
                  as="a"
                  ml="2"
                  size="sm"
                  fontSize="sm"
                  colorScheme="green"
                  leftIcon={<Icon as={RiAddLine} />}
                  href="/users/create"
                  >Novo</Button>
              </NextLink>
            </Flex>
          </Flex>
          { isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ?(
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>

          ) : (
            <>
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
                {data.users.map(user => {
                  return (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="blue" />
                      </Td>
                      <Td>
                        <Box>
                          <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(Number(user.id))}>
                            <Text m={0} fontWeight="bold">{user.name}</Text>
                          </Link>                          
                          <Text m={0} fontSize="small" color="gray.300">{user.email}</Text>
                        </Box>
                      </Td>
                      { isWideVersion && <Td>
                        { user.createdAt }
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
                  )
                                  
                })}

              </Tbody>
              </Table>
              <Pagination 
                totalCountOfRegisters={data.totalCount} 
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}

        </Box>
      </Flex>
    </Box>
  );

}