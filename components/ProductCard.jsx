import { Rating } from "./Rating";
import { useDispatch } from "react-redux";
/* eslint-disable @next/next/no-img-element */
import toast, { Toaster } from 'react-hot-toast';
import { add } from "../redux/features/cartSlice";
import { Box, Button, HStack, Image, Skeleton, Stack, Text, useBreakpointValue, useColorModeValue, } from "@chakra-ui/react";

export const ProductCard = (props) => {
  const dispatch = useDispatch();
  const { product, rootProps } = props;
  const { image, title, price, rating } = product;

  const addToCart = () => {
    dispatch(add(product));

    toast.custom((t) => (
      <div
        className={`${t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://scontent.fisb9-1.fna.fbcdn.net/v/t39.30808-6/321773439_509591187671204_4746146816125786063_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cZEIQuq_7XIAX_1gG38&_nc_oc=AQkv3NL71Ul59ecaL77fA6PwbAZQvs7_jM-uKF2u_5gnIHIsF49jjaAfUiRAMUxdHHk&_nc_ht=scontent.fisb9-1.fna&oh=00_AfDMVz5KDtSL1takbzHO_oy1zKZb-900b1hj5_KEiYZxuQ&oe=64D77077"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Rana Rabees
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Yeah! Your Item Added In Cart
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            **Thanks**
          </button>
        </div>
      </div>
    ))
    
  };

  return (
    <Stack
      marginBottom={"2rem"}
      spacing={useBreakpointValue({ base: "4", md: "5" })}
      {...rootProps}
    >
      <Box position="relative">
        <Image
          src={image}
          alt={title}
          height="350px"
          width="100%"
          draggable="false"
          fallback={<Skeleton />}
          borderRadius={useBreakpointValue({ base: "md", md: "xl" })}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {title.substring(0, 20)}
          </Text>
          <Text
            as="span"
            fontWeight="semibold"
            color={useColorModeValue("gray.800", "gray.100")}
          >
            ${price}
          </Text>
        </Stack>
        <HStack>
          <Rating defaultValue={Math.ceil(rating.rate)} size="sm" />
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            {rating.count} Reviews
          </Text>
        </HStack>
      </Stack>
      <Stack align="center">
        <Button colorScheme="blue" isFullWidth onClick={addToCart}>
          Add to cart
        </Button>
        <Toaster />
      </Stack>
    </Stack>
  );
};
