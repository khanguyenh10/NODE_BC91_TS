interface ApiResponse<T> {
    statusCode: number,
    message?: string,
    content: T,
    dataTime: Date
}

export { ApiResponse }