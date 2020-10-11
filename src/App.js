import React, {useState} from 'react';

import MySlot from "./slot";
import Filter from "./filter";
import Search from "./search";


function App() {
    const [filter, setFilter] = useState('ALL')
    const [search, setSearch] = useState("")

    return (
        <>
            <header className="l-row">
                <Filter filter={filter} setFilter={setFilter}/>
                <Search search={search} setSearch={setSearch}/>
            </header>
            <main>
                <MySlot totalSlots={11}  search={search} filter={filter}/>
            </main>
        </>
    );
}

export default App;
