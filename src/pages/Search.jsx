import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Search() {
    const { keyword } = useParams();

    return <h1>Search PAGE</h1>;
}

export default Search;
