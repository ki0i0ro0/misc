import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Heading,
  IconButton,
  Image,
  Spinner,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import DeleteDialog from "../components/DeleteDialog";
import styles from "../styles/Home.module.css";
import { BookGridData } from "../types/book";

export default function List() {
  const [tableData, setTableData] = useState<BookGridData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editedId, setEditedId] = useState<string>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const toast = useToast();

  // fetch table data at componentDidMount
  useEffect(() => {
    fetchTableData();
  }, []);

  // events
  const fetchTableData = async () => {
    setIsLoading(true);
    const books = localStorage.getItem("books");
    let booksArray: BookGridData[] = JSON.parse(books) ?? [];
    setIsLoading(false);
    setTableData(booksArray);
  };

  const routeCreate = (e): void => {
    Router.push({
      pathname: `/create`,
    });
  };

  const handleEdit = (e): void => {
    const id = e.currentTarget.getAttribute("data-row-no");
    Router.push({
      pathname: `/update/${id}`,
    });
  };

  const handleIncrement = async (e) => {
    const id = e.currentTarget.getAttribute("data-row-no");
    const book = tableData.find((v) => v.id === +id);
    if (book) {
      book.bookNo = +book.bookNo + 1;
    }
    localStorage.setItem("books", JSON.stringify(tableData));
    // re-fetch
    setTableData([]);
    await fetchTableData();
  };

  const rowDeleteClicked = (e): void => {
    const id: string = e.currentTarget.getAttribute("data-row-no");
    setEditedId(id);
    setIsDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    setIsDeleteDialogOpen(false);

    // delete book
    // await axios.delete(`/api/book/${editedId}`);
    const books = tableData.filter((v) => !(v.id === +editedId));
    localStorage.setItem("books", JSON.stringify(books));

    // re-fetch
    setTableData([]);
    await fetchTableData();

    // success toast
    toast({
      title: "Delete Succeeded !",
      description: "We've deleted beverage you clicked.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* title */}
        <Heading
          maxWidth="80vw"
          size="lg"
          my="5"
          textAlign="center"
          color="gray.600"
        >
          Let’s check your books!
        </Heading>

        {/* add button */}
        {/* <Flex>
          <Spacer /> */}
        <Button
          onClick={routeCreate}
          leftIcon={<AddIcon />}
          colorScheme="teal"
          variant="solid"
          alignSelf="flex-end"
          mt="3"
          mr="3"
        >
          Add New Book
        </Button>
        {/* </Flex> */}

        {/* data table */}
        <Box width={["100vw", "100vw", "80vw", "60vw"]} my="5">
          <Table variant="striped" size="sm">
            <TableCaption placement="top" mb="3">
              Book List
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th isNumeric>No.</Th>
                <Th>Increment</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((data) => {
                return (
                  <Tr key={data.id}>
                    <Td>{data.name}</Td>
                    <Td isNumeric>{data.bookNo.toLocaleString()}</Td>
                    {/* <Td>
                      {data.isRecommend && (
                        <StarIcon w={4} h={4} color="teal.500" />
                      )}
                    </Td> */}
                    <Td>
                      <IconButton
                        onClick={handleIncrement}
                        data-row-no={data.id}
                        colorScheme="blue"
                        aria-label="edit_icon"
                        size="sm"
                        icon={<EditIcon />}
                      />
                    </Td>

                    <Td>
                      <IconButton
                        onClick={handleEdit}
                        data-row-no={data.id}
                        colorScheme="teal"
                        aria-label="edit_icon"
                        size="sm"
                        icon={<EditIcon />}
                      />
                    </Td>
                    <Td>
                      <IconButton
                        onClick={rowDeleteClicked}
                        data-row-no={data.id}
                        colorScheme="pink"
                        aria-label="delete_icon"
                        size="sm"
                        icon={<DeleteIcon />}
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>

          {isLoading && (
            <Center>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="teal.500"
                size="xl"
                my="5"
              />
            </Center>
          )}
        </Box>

        {/* delete dialog */}
        <DeleteDialog
          isOpen={isDeleteDialogOpen}
          onClose={() => setIsDeleteDialogOpen(false)}
          onDelete={handleDelete}
        ></DeleteDialog>
      </main>
    </div>
  );
}
