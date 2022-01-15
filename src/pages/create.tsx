import { Box, Heading, Image, useToast } from "@chakra-ui/react";
import Router from "next/router";
import React from "react";
import BackToList from "../components/BackToList";
import BookForm from "../components/BookForm";
import styles from "../styles/Home.module.css";
import { BookFormData, BookGridData } from "../types/book";

export default function Create() {
  const toast = useToast();

  // values for Formik.
  const createValues = (): BookFormData => {
    return {
      name: "",
      bookNo: 1,
    };
  };

  const initialValues = createValues();

  // events
  const createBook = async (values: BookFormData, actions) => {
    const books = localStorage.getItem("books");

    const booksArray: BookGridData[] = JSON.parse(books) ?? [];
    const body: BookGridData = {
      id: booksArray.length + 1,
      name: values.name,
      bookNo: values.bookNo,
    };

    booksArray.push(body);

    localStorage.setItem("books", JSON.stringify(booksArray));

    // form reset
    Object.assign(values, createValues());

    // submit finish
    actions.setSubmitting(false);

    // back to home
    Router.push({
      pathname: "/list",
    });

    // success toast
    toast({
      title: "Create Succeed !",
      description: "We've created new beverage you entered.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* link to home. */}
        <BackToList></BackToList>

        {/* title */}
        <Heading
          maxWidth="80vw"
          size="lg"
          my="5"
          textAlign="center"
          color="gray.600"
        >
          Let"s add a new book.
        </Heading>

        {/* Form */}
        <Box
          width={[
            "80vw", // 0-30em
            "70vw", // 30em-48em
            "70vw", // 48em-62em
            "40vw", // 62em+
          ]}
        >
          <BookForm
            initialValues={initialValues}
            onSubmit={createBook}
            type="create"
          ></BookForm>
        </Box>
      </main>
    </div>
  );
}
