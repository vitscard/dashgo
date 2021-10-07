import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return(
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
        <Text margin="0">
          Vitor Cardoso
        </Text>
        <Text color="gray.300" fontSize="small" margin="0">
          vit.scard@gmail.com
        </Text>          
        </Box>
      )}

      <Avatar size="md" name="vitor cardoso" src="https://github.com/vitscard.png"/>
    </Flex>
  );
}