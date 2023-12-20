const Pagination = ({ lastPage, pagesInCurrentBlock, setCurrentPage, currentPage }) => {
    const handleLastPage = () => {
        setCurrentPage(lastPage)
    }
    const handleFirstPage = () => {
        setCurrentPage(1)
    }

    const handlePreviusPage = () => {
        const PreviusPage = currentPage - 1
        if (PreviusPage > 0) {
            setCurrentPage(PreviusPage)
        }
    }
    const handleNextPage = () => {
        const nextPage = currentPage + 1
        if (nextPage <= lastPage) {
            setCurrentPage(nextPage)
        }
    }

    return (
        <ul className="pb-4 text-lg flex flex-wrap gap-2 justify-center">
             
            <li>
                <button
                 onClick={handleFirstPage}
                 className="p-3 px-6 bg-red-500 rounded-md hover:bg-red-700 hover:text-white">{"<<"}</button>
            </li>
            <li>
                <button
                 onClick={handlePreviusPage}
                 className="p-3 px-6 bg-red-500 rounded-md hover:bg-red-700 hover:text-white">{"<"}</button>
            </li>
            {
                pagesInCurrentBlock.map((page) => (
                <li key={page}>
                    <button 
                        onClick={() => setCurrentPage(page)}
                        className={`p-3 px-6 bg-red-200 rounded-md hover:bg-red-500 hover:text-white
                        ${
                            page === currentPage ? "bg-red-500 text-white" : "bg-red-200"
                        }`}>{page}</button>
                </li>
            ))}

            <li>
                <button
                 onClick={handleNextPage}
                 className="p-3 px-6 bg-red-200 rounded-md hover:bg-red-500 hover:text-white">{">"}</button>
            </li>
            <li>
                <button 
                 onClick={handleLastPage}
                 className="p-3 px-6 bg-red-200 rounded-md hover:bg-red-500 hover:text-white">{">>"}</button>
            </li>
        </ul>
    )
}
export default Pagination