import React from "react";
import clsx from "clsx";
import Layout from "./../components/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import SpreadSheet from "@rowsncolumns/spreadsheet";
import { SimpleGrid, Box, Text, Button, List, ListItem } from "@chakra-ui/core";

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="React Components for Tabular Data. SpreadSheets and Datagrid for the Enterprise."
    >
      <SimpleGrid
        columns={2}
        className="container"
        height={500}
        spacing={30}
        pt={10}
      >
        <Box justifyContent="center" display="flex" flexDirection="column">
          <Text as="h1" fontSize="4xl" fontWeight="bold" mb={2}>
            SpreadSheets
          </Text>
          <Text mb={6} fontSize="lg">
            Excel-like Datagrid component for React JS. Built for high
            performance rendering similar to google sheets.
          </Text>
          <List styleType="disc" pb={5}>
            <ListItem>High performance (uses canvas for rendering)</ListItem>
            <ListItem>Declarative</ListItem>
            <ListItem>Easily customizable</ListItem>
            <ListItem>Feature packed</ListItem>
          </List>
          <Box>
            {/* <Button variantColor='blue' mr={2}>Demo</Button> */}
            <Button as="a" href="/docs">
              Get Started
            </Button>
          </Box>
        </Box>
        <Box minWidth="700px" display="flex">
          <SpreadSheet />
        </Box>
      </SimpleGrid>
    </Layout>
  );
}

export default Home;
