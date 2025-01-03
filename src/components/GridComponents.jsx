
import { Box, Card, Flex, Text, Avatar, Theme } from "@radix-ui/themes";
    




function GridComponents() {
    return (
        
        <Theme accentColor="cyan">
        <Box maxWidth="240px">
        <Card>
            <Flex gap="3" align="center">
                <Avatar>👨‍💻</Avatar>
                <Box>
                    <Text as="div" size="2" weight="bold">
                        Teodros Girmay
                    </Text>
                    <Text as="div" size="2" color="gray">
                        Engineering
                    </Text>
                </Box>
            </Flex>
        </Card>
    </Box>
    </Theme>
    
  
    )
}

export default GridComponents

