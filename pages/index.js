import React from "react";
import { HistoryProvider } from "./contexts/useHistoryContext";
import Head from "next/head";
import AskOpenAI from "./AskOpenAI";
import styles from "./index.module.css";
import { Typography } from "@mui/material";

export default function Home() {

  return (
    <HistoryProvider>
      <Head>
        <title>Amy McCarthy</title>
      </Head>

      <main className={styles.main}>
        <Typography align="center" variant="h5" sx={{paddingBottom: "50px", color: "white", maxWidth: "600px"}}>
          Hi there Shopifolk! <br/>My name is Amy McCarthy,<br/>click below to find out why you should hire me...
        </Typography>
        <AskOpenAI />
      </main>
    </HistoryProvider>
  );
}
