import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  return (
    <Grid
      templateAreas={{
        base: ` "nav" "main" "aside" `,
        lg: `"nav nav" "aside main" `, //1024PX
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            // selectedGenre={selectedGenre}
            selectedGenre={gameQuery.genre}
            // onSelectGenre={(genre) => setSelectedGenre(genre)}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <PlatformSelector
          onSelectPlatform={(platform) =>
            setGameQuery({
              ...gameQuery,
              platform,
            })
          }
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid
          selectedPlatform={gameQuery.platform}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
