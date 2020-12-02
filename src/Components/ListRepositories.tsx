import React from 'react';
import {GitHubRepository} from "../Types/GitHub";

interface Props {
    repositories?: Array<GitHubRepository>;
}

const ListRepositories: React.FC<Props> = ({ repositories = [] }) => {
    return (
        <ul>
            {repositories.map(repository => (
                <li key={repository.id}>
                   <a href={repository.html_url} target="_blank">{repository.full_name}</a>
                </li>
            ))}
        </ul>
    );
}

export default ListRepositories;
