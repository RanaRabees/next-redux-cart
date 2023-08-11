import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CartItem } from "../components/CartItem";
import { NavItem } from "../components/Header";
import { Text, VStack, Button } from "@chakra-ui/react";
import NextLink from "next/link";


export default function Cart() {
  const products = useSelector((state) => state.cart);

  return (
    <center>
      <Box
        minH="90vh"
        maxW={{
          base: "3xl",
          lg: "7xl",
        }}
        mx="auto"
        px={{
          base: "4",
          md: "8",
          lg: "12",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
      >

        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >

          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart ({products.length} items)
            </Heading>

            <VStack spacing={4}>
              <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl" mt={8}>
                If you want to add more products in cart see my {" "}
                <NextLink href="/" passHref>
                  <Button as={"a"} colorScheme="blue" variant="outline">
                    {" "} Products  {" "}
                  </Button>
                </NextLink>
                {" "} Page  {" "}
              </Text>
            </VStack>

            <Stack spacing="6">
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </center>
  );
}
