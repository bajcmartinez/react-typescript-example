export type GitHubRepository = {
    id: string;
    full_name: string;
    html_url: string;
}

export type GitHubSearchResultType = {
    total_count: number;
    incomplete_results: boolean;
    items: Array<GitHubRepository>
}