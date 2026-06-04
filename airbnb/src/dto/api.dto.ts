interface SearchPagingQueryReq {
    pageIndex: number,
    pageSize: number,
    keyword: string
}

interface ApiRes<T> {
    statusCode: number,
    message?: string,
    content: T,
    dataTime: Date
}
interface SearchPagingRes<T> {
    pageIndex: number,
    pageSize: number,
    totalRow: number,
    keyword: string,
    data: T
}


export { SearchPagingQueryReq, ApiRes, SearchPagingRes }
