import { Grid, GridItem, Show, flexbox } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: ` "nav" "main" "aside" `,
        lg: `"nav nav" "aside main" `, //1024PX
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>aside</GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
