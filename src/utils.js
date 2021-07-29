export const formatDate = (date) => {
    return date.toISOString().split('T')[0]
}

export const parseDate = (date) => {
    return `${date.split('-')[0]}/${date.split('-')[1]}/${date.split('-')[2]}`
}
