import React from 'react';
import axios from 'axios';
import {GitHubRepository, GitHubSearchResultType} from "./Types/GitHub";
import SearchForm from "./Components/SearchForm";
import ListRepositories from "./Components/ListRepositories";

function App() {
    const [repositories, setRepositories] = React.useState<Array<GitHubRepository>>();

    // Performs the search
    async function search(query: string) {
         const result = await axios.get<GitHubSearchResultType>(`https://api.github.com/search/repositories?q=${query}`);
         setRepositories(result.data.items);
    }

    return (
        <div>
            <SearchForm search={search}/>
            <ListRepositories repositories={repositories}/>
        </div>
    );
}

export default App;
