interface SearchPaginationQueryRequest {
    pageIndex: number,
    pageSize: number,
    keyword: string
}

interface ApiResponse<T> {
    statusCode: number,
    message?: string,
    content: T,
    dataTime: Date
}


export { SearchPaginationQueryRequest, ApiResponse, }
